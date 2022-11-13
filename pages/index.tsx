import React from "react";
import { RecoilRoot } from "recoil";
import { Toppage } from "../src/components/Toppage";

export default function Index() {
  return (
    <>
    <RecoilRoot>
      <Toppage />
    </RecoilRoot>
    </>
  );
}
