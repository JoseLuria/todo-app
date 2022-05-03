import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { setTodo } from "../../redux/actions/todos.actions";
import { useDispatch } from "react-redux";
import useTodosMap from "../../hooks/useTodosMap";

const TodosList = ({ activeTodos, completeTodos }) => {
  const { actual } = useSelector(({ view }) => view);
  const { todosList } = useSelector(({ todos }) => todos);
  const dispatch = useDispatch();
  const { handleMapTodos } = useTodosMap();

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const todosItems = [...todosList];
    const [orderedTodo] = todosItems.splice(result.source.index, 1);
    todosItems.splice(result.destination.index, 0, orderedTodo);
    dispatch(setTodo(todosItems));
  };

  const handleShowTodos = () => {
    switch (actual) {
      case "All":
        return handleMapTodos(
          todosList,
          "Your list is empty, add a new task to the list."
        );
      case "Active":
        return handleMapTodos(
          activeTodos,
          "It seems that there are no active tasks in the list."
        );
      default:
        return handleMapTodos(
          completeTodos,
          "It appears that there are no completed tasks in the list."
        );
    }
  };

  return (
    <div className="w-full h-[calc(100%-57px)]">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => (
            <section
              className="w-full h-full flex flex-col overflow-auto scrollbar-hide"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {handleShowTodos()}
              {provided.placeholder}
            </section>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TodosList;
