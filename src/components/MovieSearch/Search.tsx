import React, { useState } from "react";

type Props = {
  searchFunc: any;
};

export const Search: React.FC<Props> = ({ searchFunc }) => {
  const [search, setSearch] = useState<string>("");

  const onChange = (e: any) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const resetInputField = () => {
    setSearch("");
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    searchFunc(search);
    resetInputField();
  };

  return (
    <>
      <form>
        <input value={search} onChange={onChange} />
        <input type="submit" value="SEARCH" onClick={onSubmit} />
      </form>
    </>
  );
};
