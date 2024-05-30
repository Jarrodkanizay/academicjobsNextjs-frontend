"use client";
import { useState } from "react";
import ChildComponent from "@/components/ChildTest";

const ParentComponent = () => {
  const [counter, setCounter] = useState(0);

  const updateCounter = (newCounter: any) => {
    setCounter(newCounter);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Counter: {counter}</p>
      <ChildComponent updateCounter={updateCounter} />
    </div>
  );
};

export default ParentComponent;
