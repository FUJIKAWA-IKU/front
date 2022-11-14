import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../../../states/TodoList/atom";

type MyObj = {
  id: number;
  title: string;
  isComplete: boolean;
};

export const TodoItemCreator: React.FC = () => {
  const [text, setInput] = useState("");
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const onChange = (e: any) => {
    setInput(e.target.value);
  };

  const onSubmit = (e: any) => {
    setTodoList((oldTodoList: Array<MyObj>) => [
      ...oldTodoList,
      {
        id: getId(),
        title: text,
        isComplete: false,
      },
    ]);
    setInput("");
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button type="submit">送信</button>
      </form>
    </>
  );
};

let id = 1;
const getId = () => {
  return id++;
};
