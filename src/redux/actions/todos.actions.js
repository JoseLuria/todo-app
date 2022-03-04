import { todosTypes } from "../types/todos.types"

export const setTodo = (list) => {
  return {
    type: todosTypes.SET,
    payload: list 
  } 
}