import React from 'react'

  const CustomButton = ({children, bold, action, view}) => {
  return (
    <button 
      className={`${bold && "font-bold"} outline-none duration-200 ${view === children ? "text-blue focus:text-blue hover:text-blue" : "hover:text-dark-gray focus:text-dark-gray dark:hover:text-low-grayish dark:focus:text-low-grayish"}`}
      onClick={action}
    >
      {children}
    </button> 
  )
}

export default CustomButton