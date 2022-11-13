/** @jsxImportSource @emotion/react */
import React from "react";
import Link from "next/link";
import { css } from "@emotion/react";

export const Toppage = () => {
  return (
    <>
      <Link href="/movie-search">
        <a css={linkStyle}>映画検索</a>
      </Link>
      <Link href="/recoil-tutorial">
        <a>Recoilチュートリアル</a>
      </Link>
    </>
  );
};

const linkStyle = css`
  display: block;
`;
