import Head from 'next/head'
import FeaturedCard from '../components/FeaturedCard'
import Menu from '../components/Menu'
import { AiOutlineEye } from 'react-icons/ai'
import { MdOutlineWatchLater } from 'react-icons/md'
import AsideContent from '../components/AsideContent'
import { newVideos } from '../data'

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
      <Menu />
      <main className="py-8 pl-[262px] pr-[58px]">
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
            />
          </div>
          <div className="col-span-1">
            <AsideContent about="Vídeos recentes" data={newVideos} />
          </div>
        </section>
      </main>
    </div>
  )
}
