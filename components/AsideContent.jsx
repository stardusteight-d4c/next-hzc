import Image from 'next/image'
import React from 'react'
import AsideCard from './micro/AsideCard'

const AsideContent = ({ data, about }) => {
  return (
    <aside className="hidden p-4 md:block text-text bg-primary rounded-2xl pb-14">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold leading-6">{about}</h3>
        <span className="text-sm font-semibold leading-4 cursor-pointer text-button">
          Ver todos
        </span>
      </div>
      {data.map((data) => (
        <AsideCard
          key={data.id}
          about={about}
          img={data.img}
          title={data.title}
          user={data.user}
        />
      ))}
    </aside>
  )
}

export default AsideContent
