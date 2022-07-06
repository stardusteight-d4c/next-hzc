import Image from 'next/image'
import React from 'react'
import Card from '../components/Card'
import AsideContent from '../components/AsideContent'

import { AiOutlineEye } from 'react-icons/ai'
import { MdLocationOn } from 'react-icons/md'

import { mostVisited, picosFav } from '../data'

const picos = () => {
  return (
    <main className="py-8 px-4 md:pl-[262px] md:pr-[58px] 2xl:max-w-[1600px] 2xl:m-auto">
      <h1 className="font-bold text-[26px] leading-8 mb-6">Picos</h1>
      <section className="grid grid-cols-4 gap-8">
        <div className="col-span-3 w-[92vw] md:w-auto">
          <Image
            src="/assets/picos/pico.png"
            layout="responsive"
            width="830px"
            height="480px"
            alt="Picos Image"
          />
        </div>
        <div className="col-span-1">
          <AsideContent about="Favoritos" data={picosFav} />
        </div>
      </section>

      <h2 className="pt-8 md:pt-0 font-bold text-[26px] leading-8 my-6">
          Vídeos mais vistos
        </h2>
        <section className="mb-6">
          <div className="flex flex-col grid-cols-4 gap-8 md:grid">
            {mostVisited.map((data, index) => (
              <div className="grid col-span-1" key={index}>
                <Card
                  key={data.id}
                  img={data.img}
                  user={data.user}
                  title={data.title}
                  info={data.info}
                  spanIcon={<AiOutlineEye size={16} />}
                  buttonIcon={<MdLocationOn size={20} />}
                />
              </div>
            ))}
          </div>
        </section>
    </main>
  )
}

export default picos
