import React, { useContext } from "react";
import { HandleCount } from ".";

export const ComponentC: React.FC = () => {
  const { count, setCount } = useContext(HandleCount);
  return (
    <>
      <p>コンポーネントC</p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
};
