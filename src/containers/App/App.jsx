import Layout from "../../layout/Layout";
import Header from "../Header/Header";
import Form from "../../components/Form/Form";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import TodosList from "../../components/TodosList/TodosList";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([])
  const [todosView, setTodosView] = useState("All")

  const handleSetTodosView = view => setTodosView(view)

  const handleCheckTodo = (id) => {
    const todoChecked = todos.map(todo => (todo.id === id ? {...todo, status: !todo.status} : todo)) 
    setTodos(todoChecked)
    localStorage.todos = JSON.stringify(todoChecked)
  }

  const hadleRemoveTodo = (id) => {
    const removedTodo = todos.filter(todo => todo.id !== id) 
    setTodos(removedTodo)
    localStorage.todos = JSON.stringify(removedTodo)
  }

  const handleSetTodos = e => {
    e.preventDefault()
    if(e.target.title.value.length > 0){
      const newTodo = {
        id: +new Date(),
        title: e.target.title.value,
        status: false,
      }
      const newList = [newTodo, ...todos] 
      setTodos(newList)
      e.target.title.value = ""
      localStorage.todos = JSON.stringify(newList)
    } 
  }

  const handleOnDragEnd = (result) => {
    if(!result.destination) return

    const todosItems = [...todos]
    const [orderedTodo] = todosItems.splice(result.source.index, 1)
    todosItems.splice(result.destination.index, 0, orderedTodo)
    
    setTodos(todosItems)
    localStorage.todos = JSON.stringify(todosItems)
  }

  const activeTodos = todos.filter(({status}) => status === false)
  const completedTodos = todos.filter(({status}) => status === true)

  const handleClearTodos = () => {
    setTodos(activeTodos)
    localStorage.todos = JSON.stringify(activeTodos) 
  }

  useEffect(() =>{ 
    if(localStorage.todos){
      const todosStorage = localStorage.todos
      setTodos(JSON.parse(todosStorage)) 
    }else {
      localStorage.setItem('todos', JSON.stringify([]))
    }
  }, [])

  return (
    <Layout>
      <Header>
        <Form 
          handleSetTodos={handleSetTodos}
        />
      </Header>
      <Main
        handleSetTodosView={handleSetTodosView}
        todosView={todosView}
        handleClearTodos={handleClearTodos}
        activeTodos={activeTodos}
      >
        <TodosList
          handleOnDragEnd={handleOnDragEnd} 
          todos={todos}
          todosView={todosView}
          activeTodos={activeTodos} 
          completeTodos={completedTodos} 
          handleCheckTodo={handleCheckTodo}
          hadleRemoveTodo={hadleRemoveTodo}
        /> 
      </Main>
      <Footer/>
    </Layout>
  );
}

export default App;