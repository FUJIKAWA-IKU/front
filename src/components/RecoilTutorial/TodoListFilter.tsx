import React from "react";
import { useRecoilState } from "recoil";
import { todoListFilterState } from "../../../states/TodoList/atom";

export const TodoListFilter: React.FC = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const handleChange = (e: any) => {
    setFilter(e.target.value);
    // const newTodoList = todoList.filter
  };

  return (
    <>
      <select onChange={handleChange} value={filter}>
        <option value="全て">全て</option>
        <option value="完了">完了</option>
        <option value="未完了">未完了</option>
      </select>
    </>
  );
};
