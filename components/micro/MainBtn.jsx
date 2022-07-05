import React from 'react'

const MainBtn = ({ iconBtn, titleBtn }) => {
  return (
    <button className="flex items-center justify-center p-2 font-semibold rounded-lg text-text bg-button">
      {iconBtn}
      <span className="pl-2 leading-6">{titleBtn}</span>
    </button>
  )
}

export default MainBtn
