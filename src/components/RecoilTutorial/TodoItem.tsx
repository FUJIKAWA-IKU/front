/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { useRecoilState } from "recoil";
import { todoListState } from "../../../states/TodoList/atom";

type todoType = {
  id: number;
  title: string;
  isComplete: boolean;
};

type Props = {
  todo: todoType;
};

export const TodoItem: React.FC<Props> = ({ todo }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const deleteItem = () => {
    const index = todoList.findIndex((listItem) => {
      return listItem.id === todo.id;
    });
    const newTodoList = [
      ...todoList.slice(0, index),
      ...todoList.slice(index + 1),
    ];
    setTodoList(newTodoList);
    console.log("削除");
  };

  const changeComplete = () => {
    const index = todoList.findIndex((listItem) => {
      return listItem.id === todo.id;
    });
    const newTodoList = [
      ...todoList.slice(0, index),
      { ...todo, isComplete: !todo.isComplete },
      ...todoList.slice(index + 1),
    ];
    setTodoList(newTodoList);
  };

  return (
    <>
      <div css={itemStyle}>
        <button onClick={changeComplete}>
          {todo.isComplete ? "完" : "未完了"}
        </button>
        <p>{todo.title}</p>
        <div onClick={deleteItem}>削除</div>
      </div>
    </>
  );
};

const itemStyle = css`
  display: flex;
  align-items: center;
  gap: 10px;
`;
