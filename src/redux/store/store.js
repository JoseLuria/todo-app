import { createStore, combineReducers } from "redux";
import { viewReducer } from "../reducers/view.reducer";
import { todosReducer } from "../reducers/todos.reducer";

const saveToLocalStorage = (state) => {
  const listReducer = state.todos.todosList;
  localStorage.todos = JSON.stringify(listReducer);
};

const reducers = combineReducers({
  view: viewReducer,
  todos: todosReducer,
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => saveToLocalStorage(store.getState()));
