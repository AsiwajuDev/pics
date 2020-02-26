import React from "react";
import "./App.css";

//Component Imports
import SearchBar from "./Components/SearchBar";

const App = () => {
  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar />
    </div>
  );
};

export default App;
