import React from 'react'

const AppHeader = ({title,description}) => {
  return (
    <div className='mt-12 lg:mt-4 text-center container mx-auto'>
      <h1 className='text-2xl lg:text-4xl font-bold'>{title}<span className='text-primary'> Blog</span></h1>
      <p className='text-xl text-[#333] mt-2 lg:mt-4 lg:w-[40rem] mx-auto p-3 lg:p-0'>{description}</p>
    </div>
  )
}

export default AppHeader