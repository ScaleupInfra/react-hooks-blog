function Image({ image }) {
  const { author, download_url, height, width, url } = image;
  return (
    <div className="image">
      <a href={url} target="_blank">
        <img src={download_url} alt={`Image by ${author}`} />
      </a>

      <p className="author">Image by: {author}</p>
      <p className="dimensions">
        Dimensions: {width} x {height}
      </p>

      <div className="download-wrapper">
        <a className="download" href={download_url}>
          Download
        </a>
      </div>
    </div>
  );
}

export default Image;
