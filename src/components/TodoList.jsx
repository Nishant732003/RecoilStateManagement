import React from 'react'
import { filteredTodoListState } from '../store/atom/inputField'
import TodoItem from './TodoItem';
import TodoListStats from './TodoListStats';
import TodoListFilters from './TodoListFilters';
import TodoItemCreator from './TodoItemCreator';
import { useRecoilValue } from 'recoil';
const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters/>
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};

export default TodoList
