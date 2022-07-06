import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { AiOutlineHome, AiOutlinePicture } from 'react-icons/ai'
import { BsCameraVideo } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'
import { RiGroupLine } from 'react-icons/ri'
import { TbShirt } from 'react-icons/tb'

const Sidebar = ({ nav, handleNav }) => {
  const { pathname } = useRouter()
  const [activeItem, setActiveItem] = useState('')

  useEffect(() => {
    if (pathname === '/') setActiveItem('inicio')
    else if (pathname === '/videos') setActiveItem('videos')
    else if (pathname === '/picos') setActiveItem('picos')
    else if (pathname === '/integrantes') setActiveItem('integrantes')
    else if (pathname === '/camisas') setActiveItem('camisas')
    else if (pathname === '/pinturas') setActiveItem('pinturas')
  }, [pathname])

  return (
    <aside
      className={
        nav
          ? 'absolute top-0 left-0 w-[204px] h-[1024px] bg-secundary z-30 ease-in-out duration-300'
          : '-left-full absolute top-0 md:left-0 w-[204px] h-[1024px] bg-secundary z-30 ease-in-out duration-300'
      }
    >
      <div className="px-[43px] pt-6 pb-8">
        <Link href="/">
          <Image
            src="/assets/logo.svg"
            alt="logo"
            width="118px"
            height="118px"
            layout="intrinsic"
            quality="100"
          />
        </Link>
      </div>
      <ul>
        <Link href="/">
          <li
            onClick={handleNav}
            className={
              'inicio' === activeItem
                ? 'font-bold flex items-center justify-start gap-4 px-4 border-l-8 border-l-white text-text'
                : 'flex items-center justify-start border-l-8 border-l-secundary gap-4 px-4 text-text-200'
            }
          >
            <AiOutlineHome size={24} />
            <span className="py-4 cursor-pointer">Início</span>
          </li>
        </Link>
        <Link href="/videos">
          <li
            onClick={handleNav}
            className={
              'videos' === activeItem
                ? 'font-bold flex items-center justify-start gap-4 px-4 border-l-8 border-l-white text-text'
                : 'flex items-center justify-start border-l-8 border-l-secundary gap-4 px-4 text-text-200'
            }
          >
            <BsCameraVideo size={24} />
            <span className="py-4 cursor-pointer">Vídeos</span>
          </li>
        </Link>
        <Link href="/picos">
          <li
            onClick={handleNav}
            className={
              'picos' === activeItem
                ? 'font-bold flex items-center justify-start gap-4 px-4 border-l-8 border-l-white text-text'
                : 'flex items-center justify-start border-l-8 border-l-secundary gap-4 px-4 text-text-200'
            }
          >
            <GoLocation size={24} />
            <span className="py-4 cursor-pointer">Picos</span>
          </li>
        </Link>
        <Link href="/integrantes">
          <li
            onClick={handleNav}
            className={
              'integrantes' === activeItem
                ? 'font-bold flex items-center justify-start gap-4 px-4 border-l-8 border-l-white text-text'
                : 'flex items-center justify-start border-l-8 border-l-secundary gap-4 px-4 text-text-200'
            }
          >
            <RiGroupLine size={24} />
            <span className="py-4 cursor-pointer">Integrantes</span>
          </li>
        </Link>
        <Link href="/camisas">
          <li
            onClick={handleNav}
            className={
              'camisas' === activeItem
                ? 'font-bold flex items-center justify-start gap-4 px-4 border-l-8 border-l-white text-text'
                : 'flex items-center justify-start border-l-8 border-l-secundary gap-4 px-4 text-text-200'
            }
          >
            <TbShirt size={24} />
            <span className="py-4 cursor-pointer">Camisas</span>
          </li>
        </Link>
        <Link href="/pinturas">
          <li
            onClick={handleNav}
            className={
              'pinturas' === activeItem
                ? 'flex items-center justify-start gap-4 px-4 border-l-8 border-l-white text-text'
                : 'flex items-center justify-start border-l-8 border-l-secundary gap-4 px-4 text-text-200'
            }
          >
            <AiOutlinePicture size={24} />
            <span className="py-4 cursor-pointer">Pinturas</span>
          </li>
        </Link>
      </ul>
    </aside>
  )
}

export default Sidebar
