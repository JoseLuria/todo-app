import React from "react";
import TodoItem from "../components/TodoItem/TodoItem";
import { Draggable } from "react-beautiful-dnd";

const useTodosMap = () => {
  const handleMapTodos = (array, message) => {
    if (array.length > 0) {
      return array.map(({ id, title, status }, index) => (
        <Draggable key={id} draggableId={`${id}`} index={index}>
          {(provided) => (
            <div
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
            >
              <TodoItem id={id} status={status}>
                {title}
              </TodoItem>
            </div>
          )}
        </Draggable>
      ));
    } else {
      return (
        <p className="m-auto p-8 text-center text-[0.875rem] duration-200 text-gray dark:text-grayish-dark">
          {message}
        </p>
      );
    }
  };
  return { handleMapTodos };
};

export default useTodosMap;
