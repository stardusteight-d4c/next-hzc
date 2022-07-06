import React, { useState } from 'react'
import Image from 'next/image'
import { FiChevronDown } from 'react-icons/fi'
import { MdOutlineNotifications } from 'react-icons/md'
import { MdClose } from 'react-icons/md'
import { HiMenu } from 'react-icons/hi'
import Sidebar from './Sidebar'

const Menu = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <nav className="relative">
      <Sidebar nav={nav} handleNav={handleNav} />
      <section className="flex items-center justify-between w-screen p-4 h-14 md:h-20 md:py-6 md:justify-end bg-secundary md:bg-background shadow-custom-shadow md:px-14">
        {nav ? <MdClose size={24} className="z-40 md:hidden" onClick={handleNav} /> : <HiMenu size={24} className="z-40 md:hidden" onClick={handleNav} />}
        <div>
          <div className="block md:hidden">
            <Image
              src="/assets/logo.svg"
              alt="logo"
              height="40px"
              width="40px"
              layout="intrinsic"
              quality="100"
            />
          </div>
          <div className="items-center hidden gap-2 cursor-pointer md:flex">
            <Image
              className="rounded-full"
              src="https://avatars.githubusercontent.com/u/87643260?v=4"
              alt="avatar"
              height="32px"
              width="32px"
              layout="intrinsic"
              quality="100"
            />
            <span className="leading-8 text-text-200">Gabriel Sena</span>
            <FiChevronDown size={24} className="text-text" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-text-200 w-[1px] h-8 mx-8 hidden md:block" />
          <MdOutlineNotifications
            size={24}
            className="cursor-pointer text-text"
          />
        </div>
      </section>
    </nav>
  )
}

export default Menu
