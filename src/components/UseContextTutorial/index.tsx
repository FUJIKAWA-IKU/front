import React, { createContext, useState } from "react";
import { ComponentA } from "./componentA";

// export const UserCount = createContext();
export const HandleCount = createContext();

export const UseContextTutorial: React.FC = () => {
  const [count, setCount] = useState(100);
  const value = {
    count,
    setCount,
  }
  return (
    <>
      <p>useContextのチュートリアル</p>
      <HandleCount.Provider value={value}>
        <ComponentA />
      </HandleCount.Provider>
    </>
  );
};
