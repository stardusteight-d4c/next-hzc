import Image from 'next/image'
import React from 'react'
import SquareBtn from './micro/SquareBtn'

const Card = ({ img, user, title, spanIcon, info, buttonIcon }) => {
  return (
    <section className="relative bg-primary rounded-2xl">
      <div>
        <Image
          src={img}
          alt="Arte HZC"
          width="250px"
          height="160px"
          layout="responsive"
        />
      </div>
      <div className="p-4">
        <div>
          <span className="pb-2 text-text-200">{user}</span>
          <h2 className="mb-16 text-lg font-bold">{title}</h2>
        </div>
        <div className="flex items-center justify-between ">
          <div className="absolute flex items-center justify-between gap-1 bottom-6 left-4 text-text-200">
            {spanIcon}
            {info}
          </div>
          <div className='absolute bottom-4 right-4'>
            <SquareBtn>{buttonIcon}</SquareBtn>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Card
