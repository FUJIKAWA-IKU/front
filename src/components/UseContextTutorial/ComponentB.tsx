import React from "react";
import { ComponentC } from "./ComponentC";

export const ComponentB: React.FC = () => {
  return (
    <>
      <p>コンポーネントB</p>
      <ComponentC />
    </>
  );
};
