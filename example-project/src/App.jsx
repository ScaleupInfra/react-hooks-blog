import { useCallback, useState } from "react";
import Images from "./components/Images";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [hideNavigation, setHideNavigation] = useState(true);

  const handleNextPage = () => {
    setPageNumber((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    setPageNumber((prev) => prev - 1);
  };

  const handleHideNavigation = useCallback((hideNav) => {
    setHideNavigation(hideNav);
  }, []);

  return (
    <>
      <Header
        currentPage={pageNumber}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        hideNavigation={hideNavigation}
      />
      <Images
        pageNumber={pageNumber}
        setHideNavigation={handleHideNavigation}
      />
    </>
  );
}

export default App;
