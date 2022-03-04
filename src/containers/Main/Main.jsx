import React from 'react'
import { useDispatch } from 'react-redux'
import CustomButton from '../../components/CustomButton/CustomButton'
import { setViewAll, setViewActive, setViewCompleted } from '../../redux/actions/view.actions'
import { useSelector } from 'react-redux'
import { setTodo } from '../../redux/actions/todos.actions'

const Main = ({children, activeTodos}) => {
  const dispatch = useDispatch()
  const { actual } = useSelector(({ view }) => view)
  const { todosList } = useSelector(({ todos }) => todos)
  
  const handleClearTodos = () => {
    const clearTodos = todosList.filter(({ status }) => status === false)
    dispatch(setTodo(clearTodos))
    localStorage.todos = JSON.stringify(clearTodos) 
  }
  
  return (
    <main className='w-full max-w-custom mx-auto relative mb-[40px] md:mb-0'>
      <div className='w-full h-[368px] flex flex-col duration-200 shadow-light bg-transparent mb-[64px] rounded-[5px] dark:bg-black dark:shadow-dark md:mb-0'>
        {children}
        <div className='h-[57px] border-t-[1px] duration-200 flex justify-between px-5 text-xs text-gray items-center border-t-low-grayish md:text-[0.875rem] dark:border-t-low-black dark:text-grayish-dark'>
          <p>{activeTodos.length > 0 ? activeTodos.length : 0} items left</p>
          <div className='absolute left-0 bottom-0 flex justify-center gap-[1.125rem] h-[48px] shadow-light rounded-[5px] w-full duration-200 bg-transparent dark:bg-black dark:shadow-dark md:shadow-none md:static md:w-auto md:h-auto'>
            <CustomButton action={() => dispatch(setViewAll())} view={actual} bold>All</CustomButton>
            <CustomButton action={() => dispatch(setViewActive())} view={actual} bold>Active</CustomButton>
            <CustomButton action={() => dispatch(setViewCompleted())} view={actual} bold>Completed</CustomButton>
          </div>
          <CustomButton action={handleClearTodos}>
            Clear Completed
          </CustomButton> 
        </div>
      </div>
    </main>
  )
}

export default Main