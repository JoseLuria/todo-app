import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions/todos.actions";

const Form = () => {
  const dispatch = useDispatch();

  const handleSetTodos = (e) => {
    e.preventDefault();
    if (e.target.title.value.length > 0) {
      const newTodo = {
        id: +new Date(),
        title: e.target.title.value,
        status: false,
      };
      dispatch(addTodo(newTodo));
      e.target.title.value = "";
    }
  };

  return (
    <form
      onSubmit={(e) => handleSetTodos(e)}
      className="w-full h-12 flex items-center duration-200 px-5 mb-4 rounded-[5px] bg-transparent shadow-light md:mb-[0.875rem] md:h-16 dark:shadow-dark dark:bg-black"
    >
      <div className="w-[20px] h-[20px] rounded-full duration-200 border-[1px] border-low-grayish md:w-[24px] md:h-[24px] dark:border-low-black"></div>
      <input
        name="title"
        className="ml-[12px] grow duration-200 caret-blue text-low-black text-[0.75rem] placeholder:text-gray 
        md:ml-[24px] md:text-[1.125rem] placeholder:dark:text-black-grayish dark:text-grayish"
        type="text"
        placeholder="Create a new todo…"
      />
    </form>
  );
};

export default Form;
