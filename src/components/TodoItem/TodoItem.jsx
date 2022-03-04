import React from 'react'
import CheckIcon from "../../assets/icon-check.svg"
import CrossIcon from "../../assets/icon-cross.svg"
import { useDispatch, useSelector } from 'react-redux'
import { setTodo } from '../../redux/actions/todos.actions'

const TodoItem = ({children, id, status}) => {
  const dispatch = useDispatch()
  const { todosList } = useSelector(({ todos }) => todos)

  const handleCheckTodo = () => {
    const chekedTodo = todosList.map((todo) => todo.id === id ? { ...todo, status: !todo.status } : todo) 
    dispatch(setTodo(chekedTodo))
    localStorage.todos = JSON.stringify(chekedTodo) 
  }

  const handleRemoveTodo = () => {
    const removedTodo = todosList.filter(todo => todo.id !== id) 
    dispatch(setTodo(removedTodo))
    localStorage.todos = JSON.stringify(removedTodo)
  }

  return (
    <div
      className={`h-[52px] group px-5 flex duration-200 text-xs items-center border-b-[1px] rounded-[5px] bg-transparent dark:bg-black ${status ? "text-low-gray dark:text-black-gray line-through" : "text-dark-gray dark:text-grayish"} border-b-low-grayish dark:border-b-low-black md:text-[1.125rem]`}
    >
      <button
        onClick={handleCheckTodo}
        className={`w-[20px] h-[20px] rounded-full outline-none p-[1px] duration-200 ${ status ? "bg-gradient" : "bg-low-grayish dark:bg-low-black hover:bg-gradient focus:bg-gradient"} md:w-[24px] md:h-[24px]`}
        >
        <div className={`w-full h-full flex duration-200 rounded-full ${status ? "bg-gradient" : "bg-transparent dark:bg-black"}`}>
          <img className={`m-auto ${status ? "visible opacity-100" : "invisible opacity-0"}`} src={CheckIcon} alt="Check Icon" />
        </div> 
      </button>
      <p className='grow mx-[12px] md:mx-[24px] overflow-hidden whitespace-nowrap text-ellipsis'>{children}</p>
      <button
        onClick={handleRemoveTodo} 
        className='outline-none opacity-100  xl:opacity-0 xl:group-hover:opacity-100 xl:focus:opacity-100'
        >
        <img src={CrossIcon} alt="Cross Icon" />
      </button>
    </div>
  )
}

export default TodoItem