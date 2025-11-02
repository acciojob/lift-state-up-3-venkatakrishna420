import React from "react";

const ChildComponent1 = ({ onSelect }) => {
  return (
    <div className="child1">
      <h3>Child Component 1</h3>
      <button onClick={() => onSelect("Option 1")}>Option 1</button>
    </div>
  );
};

export default ChildComponent1;
