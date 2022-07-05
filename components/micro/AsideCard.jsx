import Image from 'next/image'
import React from 'react'

const AsideCard = ({ img, title, user }) => {
  return (
    <section>
      <div className="flex items-start justify-start gap-4 pt-4">
        <div>
          <Image
            src={img}
            alt="Arte HZC"
            width="32px"
            height="32px"
            layout="fixed"
          />
        </div>
        <div className="text-sm mt-[-5px]">
          <h3 className="font-bold leading-6">{title}</h3>
          <span className="font-normal leading-6 text-text-200">{user}</span>
        </div>
      </div>
    </section>
  )
}

export default AsideCard
