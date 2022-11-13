import React from "react";
import { useRecoilValue } from "recoil";
import { TodoListStats } from "./TodoListStats";
import { TodoItemCreator } from "./TodoItemCreator";
import { TodoItem } from "./TodoItem";
import { filteredTodoListState } from "../../../states/TodoList/selector";
import { TodoListFilter } from "./TodoListFilter";

export const RecoilTutorial: React.FC = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoItemCreator />
      <TodoListStats />
      <TodoListFilter />
      {todoList.map((todo) => (
        <TodoItem key={`${todo.title} - ${todo.id}`} todo={todo} />
      ))}
    </>
  );
};
