import Image from 'next/image'
import React from 'react'
import { Zoom } from 'react-reveal'
import MainBtn from './micro/MainBtn'

const FeaturedCard = ({
  img,
  about,
  title,
  user,
  iconSpan1,
  iconSpan2,
  span1,
  span2,
  titleBtn,
  iconBtn,
}) => {
  return (
    <Zoom top>
      <section className="w-[90vw] md:w-auto">
        <div className="relative bg-primary rounded-2xl">
          <div className="hidden md:block">
            <Image
              src={img}
              alt="Arte HZC"
              layout="responsive"
              width="830px"
              height="335px"
            />
          </div>
          <div className="block md:hidden">
            <Image
              src={img}
              alt="Arte HZC"
              layout="responsive"
              width="830px"
              height="635px"
            />
          </div>
          <div className="p-4">
            <h3 className="md:text-lg md:font-bold">{about}</h3>
            <h2 className="font-bold text-lg md:text-[26px] my-2 cursor-pointer">
              {title}
            </h2>
            <span className="text-[14px] leading-6 text-text-200 mb-2 cursor-pointer">
              {user}
            </span>
            <div className="flex gap-6">
              <span className="cursor pointer gap-1 text-[14px] leading-6 text-text-200 mb-2 flex items-center justify-start ">
                <div className="w-4 h-4">{iconSpan1}</div>
                {span1}
              </span>
              <span className="gap-1 text-[14px] leading-6 text-text-200 mb-2 flex items-center justify-start ">
                <div className="w-4 h-4">{iconSpan2}</div>
                {span2}
              </span>
            </div>
            <MainBtn titleBtn={titleBtn} iconBtn={iconBtn} />
          </div>
        </div>
      </section>
    </Zoom>
  )
}

export default FeaturedCard
