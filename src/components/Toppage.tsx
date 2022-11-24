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
        <a css={linkStyle}>Recoilチュートリアル</a>
      </Link>
      <Link href="/useContext-tutorial">
        <a css={linkStyle}>useContextチュートリアル</a>
      </Link>
      <Link href="/forwardRef-sample">
        <a css={linkStyle}>forwardRef使ってみた〜</a>
      </Link>
    </>
  );
};

const linkStyle = css`
  display: block;
`;
