import Image from 'next/image'
import React from 'react'
import MainBtn from './micro/MainBtn'
import { BsPlayCircle } from 'react-icons/bs'

const FeaturedCard = ({
  img,
  about,
  title,
  user,
  iconSpan1,
  iconSpan2,
  span1,
  span2,
}) => {
  return (
    <section className="grid grid-cols-4 grid-rows-3 gap-8">
      <div className="relative col-span-3 bg-primary rounded-2xl">
        <div className="row-span-2">
          <Image
            src={img}
            alt="Arte HZC"
            layout="responsive"
            width="830px"
            height="335px"
          />
        </div>
        <div className="row-span-1 p-4">
          <h3 className="text-lg font-bold">{about}</h3>
          <h2 className="font-bold text-[26px] my-2">{title}</h2>
          <span className="text-[14px] leading-6 text-text-200 mb-2">
            {user}
          </span>
          <div className="flex gap-6">
            <span className="gap-1 text-[14px] leading-6 text-text-200 mb-2 flex items-center justify-start ">
              <div className="w-4 h-4">{iconSpan1}</div>
              {span1}
            </span>
            <span className="gap-1 text-[14px] leading-6 text-text-200 mb-2 flex items-center justify-start ">
              <div className="w-4 h-4">{iconSpan2}</div>
              {span2}
            </span>
          </div>
          <MainBtn title="Assistir agora" icon={<BsPlayCircle size={20} />} />
        </div>
      </div>
      <div className="col-span-1 row-span-1 max-w-[700px] min-h-[545px] bg-white rounded-2xl"></div>
    </section>
  )
}

export default FeaturedCard
