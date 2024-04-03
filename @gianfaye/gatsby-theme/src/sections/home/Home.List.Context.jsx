import { createContext, useState } from "react";

export const GridLayoutContextY = createContext({
  gridLayout: "tiles",
  hasSetGridLayout: false,
  setGridLayout: (tile) => {},
  getGridLayout: () => {},
});

const GridLayoutProviderY = ({ children }) => {
  const initialLayout = "tiles";

  const [gridLayout, setGridLayout] = useState(initialLayout);
  const [hasSetGridLayout, setHasSetGridLayout] = useState(false);

  function setGridLayoutAndSave(tile) {
    localStorage.setItem("gridLayout", tile || initialLayout);
    setGridLayout(tile);
  }

  function getGridLayoutAndSave() {
    setGridLayout(localStorage.getItem("gridLayout") || initialLayout);
    setHasSetGridLayout(true);
  }

  return (
    <GridLayoutContextY.Provider
      value={{
        gridLayout,
        hasSetGridLayout,
        setGridLayout: setGridLayoutAndSave,
        getGridLayout: getGridLayoutAndSave,
      }}
    >
      {children}
    </GridLayoutContextY.Provider>
  );
};

export default GridLayoutProviderY;
