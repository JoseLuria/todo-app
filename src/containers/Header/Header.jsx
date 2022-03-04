import React from 'react'
import MoonLogo from "../../assets/icon-moon.svg"
import SunLogo from "../../assets/icon-sun.svg"

const Header = ({children}) => {
  const handleChangeTheme = () => {
    if(document.documentElement.classList.contains("dark")){
      document.documentElement.classList.remove("dark")
      localStorage.setItem('theme', 'light')
    }else{
      document.documentElement.classList.add("dark")
      localStorage.setItem('theme', 'dark');
    }
  } 

  return (
    <header className='w-full max-w-custom mx-auto'>
      <div className='w-full flex justify-between mb-[2.125rem] md:mb-10'>
        <h1 className='font-bold text-[1.625rem] tracking-[0.625rem] text-transparent uppercase md:text-[2.5rem] md:tracking-[0.938rem]'>Todo</h1>
        <button onClick={handleChangeTheme} className="outline-none">
          <img className='dark:hidden' width={25.11} height={26} src={MoonLogo} alt="Moon Logo"/>
          <img className='hidden dark:block' width={26} height={26} src={SunLogo} alt="Sun Logo" />
        </button>
      </div>
      {children} 
    </header>
  )
}

export default Header