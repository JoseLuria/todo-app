import { todosTypes } from "../types/todos.types"

const initialState = {
  todosList: [],
}

export const todosReducer = (state = initialState, action) => {
  switch(action.type){
    case todosTypes.SET:
      return {
        ...state,
        todosList: action.payload
      }
    default:
      return state
  }
}