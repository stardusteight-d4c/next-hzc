import React from 'react'

const MainBtn = ({ iconBtn, titleBtn }) => {
  return (
    <button className="flex items-center justify-center w-full p-2 m-auto font-semibold rounded-lg md:w-auto md:m-0 text-text bg-button">
      {iconBtn}
      <span className="pl-2 leading-6">{titleBtn}</span>
    </button>
  )
}

export default MainBtn
