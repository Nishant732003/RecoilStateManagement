import React from "react";
import { useRecoilState } from "recoil";
import { todoListFilter } from "../store/atom/inputField";

const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilter);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <div>
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </div>
  );
};

export default TodoListFilters;
