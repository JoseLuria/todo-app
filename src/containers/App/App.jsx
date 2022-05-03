import { useEffect } from "react";
import Layout from "../../layout/Layout";
import Header from "../Header/Header";
import Form from "../../components/Form/Form";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import TodosList from "../../components/TodosList/TodosList";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setTodo } from "../../redux/actions/todos.actions";

function App() {
  const { todosList } = useSelector(({ todos }) => todos);
  const activeTodos = todosList.filter(({ status }) => status === false);
  const completedTodos = todosList.filter(({ status }) => status === true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.todos) {
      const todosStorage = localStorage.todos;
      const listOfTodos = JSON.parse(todosStorage);
      dispatch(setTodo(listOfTodos));
    } else {
      localStorage.setItem("todos", JSON.stringify([]));
    }
  }, []);

  return (
    <Layout>
      <Header>
        <Form />
      </Header>
      <Main activeTodos={activeTodos}>
        <TodosList activeTodos={activeTodos} completeTodos={completedTodos} />
      </Main>
      <Footer />
    </Layout>
  );
}

export default App;
