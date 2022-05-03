import { todosTypes } from "../types/todos.types";

const initialState = {
  todosList: [],
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case todosTypes.SET:
      return {
        ...state,
        todosList: action.payload,
      };
    case todosTypes.ADD:
      return {
        ...state,
        todosList: [...state.todosList, action.payload],
      };
    case todosTypes.REMOVE:
      return {
        ...state,
        todosList: state.todosList.filter((todo) => todo.id !== action.payload),
      };
    case todosTypes.CHECK:
      return {
        ...state,
        todosList: state.todosList.map((todo) =>
          todo.id === action.payload ? { ...todo, status: !todo.status } : todo
        ),
      };
    case todosTypes.CLEAR:
      return {
        ...state,
        todosList: state.todosList.filter(({ status }) => status === false),
      };
    default:
      return state;
  }
};
