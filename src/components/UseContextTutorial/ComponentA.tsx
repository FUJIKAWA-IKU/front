import React from "react";
import { ComponentB } from "./ComponentB";

export const ComponentA: React.FC = () => {
  return (
    <>
      <p>コンポーネントA</p>
      <ComponentB />
    </>
  );
};
