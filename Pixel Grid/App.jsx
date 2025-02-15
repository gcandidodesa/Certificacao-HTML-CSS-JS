import React, { useEffect, useState } from "react";
import "./App.css";
import PixelGrid from "./PixelGrid";
import Toolbar from "./Toolbar";

const URL = process.env.BACKEND_URL;

const App = () => {
  const [grid, setGrid] = useState([]);
  const [selectedColor, setSelectedColor] = useState("black");

  const updateColor = async (x, y) =>{
    try {
      const response = await fetch (`${URL}/setGridColor`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({x, y, color: selectedColor})
      });
      const {grid: updateGrid} = await response.json();
      setGrid(updateGrid);
    } catch(error){
      console.error("Error updating grid", error);
    }
  };

  useEffect(() => {
    fetch(`${URL}/grid`)
      .then((response) => response.json())
      .then((data) => setGrid(data.grid))
      .catch((error) => console.error("Error fetching grid data:", error));
  }, []);

  return (
    <div className="content-wrapper">
      <h1>Pixel Grid</h1>
      <PixelGrid grid={grid}
      updateColor={updateColor} />
      <Toolbar
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
       />
    </div>
  );
};

export default App;
