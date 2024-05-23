/* eslint-disable react/prop-types */
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import Image from "./Image";
import useFetchData from "../hooks/useFetchData";
import { fetchImages } from "../util/http";
import { useCallback } from "react";

function Images({ pageNumber, setHideNavigation }) {
  // Added useCallback hook to avoid unnecessary re-renders
  const unhideNavbar = useCallback(() => {
    setHideNavigation(false);
  }, [setHideNavigation]);

  // Using the new generalized useFetchData hook
  const {
    data: images,
    isLoading,
    isError,
    errorMessage,
  } = useFetchData(fetchImages, pageNumber, unhideNavbar);

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
