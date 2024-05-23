/* eslint-disable react/prop-types */
function Header({
  currentPage,
  handleNextPage,
  handlePrevPage,
  hideNavigation,
}) {
  return (
    <header>
      <h1>Image Gallery</h1>
      {!hideNavigation && (
        <nav>
          <h2>Page: {currentPage}</h2>
          <button onClick={handlePrevPage}>Previous</button>
          <button onClick={handleNextPage}>Next</button>
        </nav>
      )}
    </header>
  );
}

export default Header;
