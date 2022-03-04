import React from 'react'

const Layout = ({children}) => {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  return (
    <div className='w-full h-full relative'>
      <div className='w-full h-[200px] bg-cover duration-200 bg-light-mobile dark:bg-dark-mobile md:h-[300px] md:bg-light-desktop md:dark:bg-dark-desktop'>
      </div>
      <div className='absolute w-full min-h-full top-0 left-0 flex flex-col px-[1.625rem] pt-12 pb-[4.5rem] md:h-full md:pt-[4.375rem] xl:pb-[3.063rem]'>
        {children}
      </div>
    </div>
  )
}

export default Layout