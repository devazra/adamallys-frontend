"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MegaMenu from './MegaMenu'
import { usePathname } from 'next/navigation'
import useScrollPosition from "@/hooks/useScrollPosition"
import RequestAQuoteButton from '@/components/RequestAQuoteButton'

const HeaderTwo = ({ data, menuOptions, slideFromTop }) => {
  const { Button, Logo } = data;
  const pathname = usePathname()
  const scrollPosition = useScrollPosition()

  return (
    <header className={`py-3 w-full fixed z-[200] hidden xl:block transition-all duration-500 ease-linear text-theme-main font_calibri bg-white 
      ${slideFromTop ? (scrollPosition > 100 ? "top-0" : "-top-[200px]") : "top-0"}
    `}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center gap-4">
          <div className=" md:w-[10%]">
            <figure>
              <Link href="/" className="">
                <Image
                  alt="logo"
                  width={126}
                  height={74}
                  className="w-16 md:w-[115px]"
                  src={Logo?.data?.attributes.url || `/svg/logo.svg`}
                />
              </Link>
            </figure>
          </div>
          <div className="flex gap-4 2xl:gap-8">
            <ul className="flex items-center gap-4 2xl:gap-8">
              <ul className="flex items-center gap-4 2xl:gap-[27px]">
                {menuOptions?.map((item, idx) => (item?.options ?
                  <MegaMenu
                    title={item?.label}
                    links={item?.options}
                  />
                  :
                  <li key={idx} className="relative group">
                    <Link className="uppercase" href={item?.href} key={idx}>{item?.label}</Link>
                    <div className={`absolute bottom-[-4px] left-0 mt-2 w-[18px] h-[2px] group-hover:bg-theme-main ${pathname === item?.href ? 'bg-theme-main' : ''}`} />
                  </li>
                ))}
              </ul>
              <RequestAQuoteButton Email={Button?.Email} />
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderTwo