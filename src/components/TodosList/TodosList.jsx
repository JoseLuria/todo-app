import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const TodosList = (props) => {
  const {
    handleOnDragEnd, 
    todos, 
    activeTodos, 
    completeTodos, 
    handleCheckTodo,
    hadleRemoveTodo,
    todosView
  } = props 

  const handleMapTodos = (array, message) => {
    if(array.length > 0){
      return(
        array.map(({id, title, status}, index) => (
          <Draggable key={id} draggableId={`${id}`} index={index}>
            {(provided) => (
              <div
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef} 
              >
                <TodoItem
                  id={id}
                  status={status}
                  handleCheckTodo={handleCheckTodo}
                  handleRemoveTodo={hadleRemoveTodo}
                  >
                  {title}
                </TodoItem>
              </div>
            )}
          </Draggable>
        ))
      )  
    }else{
      return <p className='m-auto p-8 text-center text-[0.875rem] duration-200 text-gray dark:text-grayish-dark'>{message}</p>
    } 
  }

  const handleShowTodos = () => {
    if(todosView === "All"){
      return handleMapTodos(todos, "Your list is empty, add a new task to the list.")
    }else if(todosView === "Active"){
      return handleMapTodos(activeTodos, "It seems that there are no active tasks in the list.")
    }else if(todosView === "Completed"){
      return handleMapTodos(completeTodos, "It appears that there are no completed tasks in the list.")
    }
  }

  return (
    <div className='w-full h-[calc(100%-57px)]'>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='todos'>
          {(provided) => (
            <section 
              className='w-full h-full flex flex-col overflow-auto scrollbar-hide'
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {
                handleShowTodos()
              }
              {provided.placeholder}
            </section>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default TodosList