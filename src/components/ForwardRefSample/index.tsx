import React, { useState, useRef } from "react";

export const ForwardRefSample: React.FC = () => {
  const [name, setName] = useState("");
  const onChange = (e: any) => {
    setName(e.target.value)
  }
  const inputEl = useRef(null);

  const onClick = () => {
    // if (inputEl.current) {
    //   inputEl.current.focus()
    // }
  }

  return (
    <>
      <input type="text" onChange={onChange} ref={inputEl} />
      <p>名前：{name}</p>
      <button onClick={onClick}>フォーカス</button>
    </>
  );
};
