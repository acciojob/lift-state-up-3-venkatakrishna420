import React, { useState } from "react";
import './../styles/App.css';
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

const App = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="parent">
      {/* Do not remove the main div */}
      <h1>Parent Component</h1>

      <ChildComponent1 onSelect={handleSelect} />
      <ChildComponent2 onSelect={handleSelect} />

      <p>
        <strong>Selected Option:</strong> {selectedOption || "None"}
      </p>
    </div>
  );
};

export default App;
