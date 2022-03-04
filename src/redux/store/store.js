import { createStore, combineReducers } from "redux";
import { viewReducer } from "../reducers/view.reducer";
import { todosReducer } from "../reducers/todos.reducer";

const reducers = combineReducers({
  view: viewReducer,
  todos: todosReducer
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
