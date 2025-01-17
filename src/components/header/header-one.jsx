"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import MegaMenu from "./MegaMenu";
import { usePathname } from "next/navigation";
import RequestAQuoteButton from '@/components/RequestAQuoteButton'

const HeaderOne = ({ data, menuOptions }) => {
  const { Button, Logo } = data
  const pathname = usePathname();

  return (
    <header className={`z-[300] absolute top-0 w-full ${pathname !== "/" && "bg-white"}`}>
      <section className="py-5 hidden xl:block text-theme-main header-gradient font_calibri">
        <div className="container mx-auto">
          <div className="flex justify-between items-center gap-4">
            <ul className="flex gap-4 2xl:gap-9 items-center">
              <li className="relative group">
                <Link
                  href={'/'}
                  className={'uppercase'}
                >Home</Link>
                <div
                  className={`absolute bottom-[-4px] left-0 mt-2 w-[18px] h-[2px] group-hover:bg-theme-main ${(!pathname || pathname === '/') ? 'bg-theme-main' : ''}`}
                />
              </li>
              <MegaMenu
                title='who We are'
                links={[
                  {
                    label: 'About Us',
                    href: '/about'
                  },
                  {
                    label: 'Ports',
                    href: '/ports'
                  },
                ]}
              />
              <MegaMenu />
              <li className="relative group">
                <Link
                  href={'/distributors-&-stockists'}
                  className='uppercase'
                >Distributor & Stockists</Link>
                <div
                  className={`absolute bottom-[-4px] left-0 mt-2 w-[18px] h-[2px] group-hover:bg-theme-main ${pathname === '/distributors-&-stockists' ? 'bg-theme-main' : ''}`}
                />
              </li>
            </ul>
            <div className="">
              <figure className={`flex justify-center items-center`}>
                <Link href="/" className="">
                  <Image
                    alt="logo"
                    width={200}
                    height={74}
                    className="w-16 md:w-[160px]"
                    src={Logo?.data?.attributes.url ?
                      Logo?.data?.attributes.url :
                      `/svg/logo.svg`}
                  />
                </Link>
              </figure>
            </div>
            <div className="flex gap-[23px] justify-end">
              <ul className="flex items-center gap-4 2xl:gap-[27px]">
                {menuOptions?.slice(-3).map((item, idx) => (item?.options ?
                  <MegaMenu
                    title={item?.label}
                    links={item?.options}
                  /> :
                  <li key={idx} className="relative group">
                    <Link className="uppercase" href={item?.href} key={idx}>{item?.label}</Link>
                    <div className={`absolute bottom-[-4px] left-0 mt-2 w-[18px] h-[2px] group-hover:bg-theme-main ${pathname === item?.href ? 'bg-theme-main' : ''}`} />
                  </li>
                ))}
              </ul>
              <RequestAQuoteButton Email={Button?.Email} />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default HeaderOne;
