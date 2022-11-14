import React from "react";
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../../../states/TodoList/selector";

export const TodoListStats: React.FC = () => {
  const { totalNum, totalCompletedNum, totalUnCompletedNum } =
    useRecoilValue(todoListStatsState);
  return (
    <>
      <ul>
        <li>Todoの登録数: {totalNum}</li>
        <li>完了の数: {totalCompletedNum}</li>
        <li>未完了の数: {totalUnCompletedNum}</li>
      </ul>
    </>
  );
};
