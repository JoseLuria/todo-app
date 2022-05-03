import { todosTypes } from "../types/todos.types";

export const setTodo = (list) => {
  return {
    type: todosTypes.SET,
    payload: list,
  };
};

export const addTodo = (newTodo) => {
  return {
    type: todosTypes.ADD,
    payload: newTodo,
  };
};

export const removeTodo = (id) => {
  return {
    type: todosTypes.REMOVE,
    payload: id,
  };
};

export const checkTodo = (id) => {
  return {
    type: todosTypes.CHECK,
    payload: id,
  };
};

export const clearTodos = () => {
  return {
    type: todosTypes.CLEAR,
  };
};
