import Image from 'next/image'
import React from 'react'
import { BsPlayCircle } from 'react-icons/bs'
import { MdOutlineWatchLater } from 'react-icons/md'
import Card from '../components/Card'
import { mostViwed } from '../data'

const videos = () => {
  return (
    <main className="py-8 px-4 md:pl-[262px] md:pr-[58px] 2xl:max-w-[1600px] 2xl:m-auto md:grid grid-cols-4 gap-[50px]">
      <section className="col-span-3">
        <iframe
          width="775"
          height="480"
          src="https://www.youtube.com/embed/auaO8fmnYAM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className='w-full h-[400px]'
        />
        <article>
          <h1 className="font-semibold text-2xl md:text-[32px] leading-[48px] my-4">
            Gap do Itaú da Voluntários da Pátria
          </h1>
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/assets/profile.png"
              alt="Profile Picture"
              width="48px"
              height="48px"
              layout="intrinsic"
              className="rounded-full"
              quality="100"
            />
            <span>Leiws Vie</span>
          </div>
          <p className="leading-8">
            Venenatis maecenas animi eiusmod nostrum, mauris alias quas.
            Recusandae, ridiculus porta nec eaque? Excepteur aut do quisquam
            ultricies, quos! Morbi ad magna sunt anim imperdiet iusto hymenaeos
            voluptate? Nostrum sapien hic non occaecat! Facilis interdum
            debitis, deserunt fermentum quas mattis interdum penatibus. Dictum
            laboris diamlorem, repellat, aut ligula. Quam tellus, facilisis
            possimus? Quidem nunc! Aenean sem! Curabitur eos felis porro integer
            consectetuer consectetur. Porttitor, convallis, sapien earum
            inventore dapibus facilis, facilis semper. Tempora senectus dictumst
            odio vivamus pariatur, praesentium laoreet, hendrerit duis proin
            excepturi, torquent et, sem, eu temporibus aut placerat nostrum.
            Parturient perspiciatis nesciunt. Earum ligula habitasse quo
            laoreet.
          </p>
          <div className="my-4">
            <Image
              src="/assets/map.png"
              alt="Map Picture"
              width="830px"
              height="340px"
              layout="responsive"
            />
          </div>
          <p className="leading-8">
            Venenatis maecenas animi eiusmod nostrum, mauris alias quas.
            Recusandae, ridiculus porta nec eaque? Excepteur aut do quisquam
            ultricies, quos! Morbi ad magna sunt anim imperdiet iusto hymenaeos
            voluptate? Nostrum sapien hic non occaecat! Facilis interdum
            debitis, deserunt fermentum quas mattis interdum penatibus. Dictum
            laboris diamlorem, repellat, aut ligula. Quam tellus, facilisis
            possimus? Quidem nunc! Aenean sem! Curabitur eos felis porro integer
            consectetuer consectetur. Porttitor, convallis, sapien earum
            inventore dapibus facilis, facilis semper. Tempora senectus dictumst
            odio vivamus pariatur, praesentium laoreet, hendrerit duis proin
            excepturi, torquent et, sem, eu temporibus aut placerat nostrum.
            Parturient perspiciatis nesciunt. Earum ligula habitasse quo
            laoreet.
          </p>
          <div className="flex items-center justify-between gap-8 my-4">
            <div>
              <Image
                src="/assets/post1.png"
                alt="Post1 Picture"
                width="500px"
                height="255px"
                layout="intrinsic"
              />
            </div>
            <div>
              <Image
                src="/assets/post2.png"
                alt="Post2 Picture"
                width="350px"
                height="255px"
                layout="intrinsic"
              />
            </div>
          </div>
          <p className="leading-8">
            Venenatis maecenas animi eiusmod nostrum, mauris alias quas.
            Recusandae, ridiculus porta nec eaque? Excepteur aut do quisquam
            ultricies, quos! Morbi ad magna sunt anim imperdiet iusto hymenaeos
            voluptate? Nostrum sapien hic non occaecat! Facilis interdum
            debitis, deserunt fermentum quas mattis interdum penatibus. Dictum
            laboris diamlorem, repellat, aut ligula. Quam tellus, facilisis
            possimus? Quidem nunc! Aenean sem! Curabitur eos felis porro integer
            consectetuer consectetur. Porttitor, convallis, sapien earum
            inventore dapibus facilis, facilis semper. Tempora senectus dictumst
            odio vivamus pariatur, praesentium laoreet, hendrerit duis proin
            excepturi, torquent et, sem, eu temporibus aut placerat nostrum.
            Parturient perspiciatis nesciunt. Earum ligula habitasse quo
            laoreet.
          </p>
        </article>
      </section>
      <section className="col-span-1 mb-6">
        <h2 className="mt-4 mb-4 text-lg font-bold leading-none md:mt-0">
          Outros vídeos similares
        </h2>
        <div className="flex flex-col gap-8 md:grid">
          {mostViwed.map((data, index) => (
            <div key={index}>
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
    </main>
  )
}

export default videos
