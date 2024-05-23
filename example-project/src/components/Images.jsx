/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { fetchImages } from "../util/http";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import Image from "./Image";

function Images({ pageNumber, setHideNavigation }) {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    async function fetchImageData() {
      setIsLoading(true);
      try {
        const fetchedImages = await fetchImages(pageNumber, 10);
        if (fetchedImages.length > 0) {
          setImages(fetchedImages);
          setHideNavigation(false);
        } else {
          throw new Error("Something went wrong while fetching images");
        }
      } catch (e) {
        console.log(e);
        setIsError(true);
        setErrorMessage(e.message);
      }
      setIsLoading(false);
    }

    fetchImageData();
  }, [pageNumber, setHideNavigation]);

  let finalContent = null;

  if (isLoading) {
    finalContent = <Loading />;
  } else if (isError) {
    finalContent = <ErrorMessage>{errorMessage}</ErrorMessage>;
  } else {
    finalContent = (
      <section className="images-section">
        {images.map((image) => (
          <Image key={image.id} image={image} />
        ))}
      </section>
    );
  }
  return <>{finalContent}</>;
}

export default Images;
