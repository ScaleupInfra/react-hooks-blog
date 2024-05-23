import loaderAnimation from "../assets/loaderAnimation.svg";

function Loading() {
  return (
    <div className="loading">
      <img src={loaderAnimation} alt="Loading animation" />
      <p>Loading content. Please wait...</p>
    </div>
  );
}

export default Loading;
