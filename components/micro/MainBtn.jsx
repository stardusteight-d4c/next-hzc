import React from 'react'

const MainBtn = ({ icon, title }) => {
  return (
    <button className="flex items-center justify-center p-2 font-semibold rounded-lg text-text bg-button">
      {icon}
      <span className="pl-2 leading-6">{title}</span>
    </button>
  )
}

export default MainBtn
