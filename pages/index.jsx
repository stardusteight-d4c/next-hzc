import Head from 'next/head'
import FeaturedCard from '../components/FeaturedCard'
import Card from '../components/Card'
import AsideContent from '../components/AsideContent'

import { newArts, newVideos, recentShirts } from '../data'
import { mostViwed } from '../data'

import { AiOutlineEye } from 'react-icons/ai'
import { MdOutlineWatchLater } from 'react-icons/md'
import { BsPlayCircle } from 'react-icons/bs'

import { MdOutlineAttachMoney } from 'react-icons/md'
import { BiCartAlt } from 'react-icons/bi'

export default function Home() {
  return (
    <div>
      <Head>
        <title>«HZC» Home</title>
        <meta
          name="description"
          content="HZC - Site de Skatistas para Skatistas"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="py-8 px-4 md:pl-[262px] md:pr-[58px] 2xl:max-w-[1600px] 2xl:m-auto">
        <h1 className="font-bold text-[26px] leading-8 mb-6">Início</h1>
        <section className="grid grid-cols-4 gap-8">
          <div className="col-span-3">
            <FeaturedCard
              img="/assets/arts/art1.png"
              about="Vídeo em destaque"
              title="HZC - Life is... / 2022"
              user="Bruno Lopes"
              iconSpan1={<AiOutlineEye size={16} />}
              span1="33 minutos"
              iconSpan2={<MdOutlineWatchLater size={16} />}
              span2="53 visualizações"
              titleBtn="Assistir agora"
              iconBtn={<BsPlayCircle size={20} />}
            />
          </div>
          <div className="col-span-1">
            <AsideContent about="Vídeos recentes" data={newVideos} />
          </div>
        </section>
        <h2 className="pt-8 md:pt-0 font-bold text-[26px] leading-8 my-6">
          Vídeos mais vistos
        </h2>
        <section className="mb-6">
          <div className="flex flex-col grid-cols-4 gap-8 md:grid">
            {mostViwed.map((data, index) => (
              <div className="grid col-span-1" key={index}>
                <Card
                  key={data.id}
                  img={data.img}
                  user={data.user}
                  title={data.title}
                  info={data.info}
                  spanIcon={<MdOutlineWatchLater size={16} />}
                  buttonIcon={<BsPlayCircle size={20} />}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="grid-cols-4 gap-8 md:grid">
          <div className="col-span-1">
            <AsideContent about="Novas artes" data={newArts} />
          </div>
          <div className="col-span-3">
            <FeaturedCard
              img="/assets/arts/art2.png"
              about="Nova arte"
              title="Only Zikas - Lagoa Dompa Club"
              user="João ZMS"
              iconSpan1={<MdOutlineAttachMoney size={16} />}
              span1="33,33"
              iconSpan2={<MdOutlineWatchLater size={16} />}
              span2="88 visualizações"
              titleBtn="Comprar agora"
              iconBtn={<BiCartAlt size={20} />}
            />
          </div>
        </section>
        <h2 className="pt-8 md:pt-0 font-bold text-[26px] leading-8 my-6">
          Camisas mais recentes
        </h2>
        <div className="flex flex-col grid-cols-4 gap-8 md:grid">
          {recentShirts.map((data, index) => (
            <div className="grid col-span-1" key={index}>
              <Card
                key={data.id}
                img={data.img}
                user={data.user}
                title={data.title}
                info={data.info}
                spanIcon={<MdOutlineAttachMoney size={16} />}
                buttonIcon={<BiCartAlt size={20} />}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
