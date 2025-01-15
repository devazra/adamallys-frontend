"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import MegaMenu from "./MegaMenu";
import MobileHeader from "./mobile-header";
import { usePathname } from "next/navigation";
import RequestAQuoteButton from '@/components/RequestAQuoteButton'

const HeaderOne = ({ data }) => {
  const { Button, NavLinks, Logo } = data
  const pathname = usePathname()

  return (
    <header className={`z-[300] absolute top-0 w-full ${pathname !== "/" && "bg-white"}`}>
      <section className="py-5 hidden xl:block text-theme-main header-gradient font_calibri">
        <div className="container mx-auto">
          <div className="flex justify-between items-center gap-4">
            <ul className="flex gap-4 2xl:gap-9 items-center">
              <MegaMenu />
              {NavLinks?.slice(0, 2).map((item, idx) => (
                item?.Label?.toLowerCase() === 'standards & innovation' ?
                  <MegaMenu
                    key={idx}
                    title='Standards & Innovation'
                    links={[
                      {
                        label: 'Sustainability at Adamallys',
                        href: '/sustainability'
                      },
                      {
                        label: 'Digitalization & Technology at Adamallys',
                        href: '/digitalization'
                      },
                      {
                        label: 'Certification & Membership',
                        href: '/certification'
                      },
                    ]}
                  /> :
                  <li key={idx} className="relative group">
                    <Link
                      href={item?.Link}
                      className={`uppercase ${pathname === item?.Link ? '' : ''}`}
                    >{item?.Label}</Link>
                    <div className={`absolute bottom-[-4px] left-0 mt-2 w-[18px] h-[2px] group-hover:bg-theme-main ${pathname === item?.Link ? 'bg-theme-main' : ''}`} />
                  </li>
              ))}
            </ul>
            <div className="">
              <figure className={`flex justify-center items-center`}>
                <Link href="/" className="">
                  <Image
                    alt="logo"
                    width={126}
                    height={74}
                    className="w-16 md:w-[140px]"
                    src={Logo?.data?.attributes.url ?
                      Logo?.data?.attributes.url :
                      `/svg/logo.svg`}
                  />
                </Link>
              </figure>
            </div>
            <div className="flex gap-[23px] justify-end">
              <ul className="flex items-center gap-4 2xl:gap-[27px]">
                {NavLinks?.slice(2).map((item, idx) => (
                  item?.Label?.toLowerCase() === 'who we are' ?
                    <MegaMenu
                      key={idx}
                      title='who are we'
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
                    /> :
                    <li key={idx} className="relative group">
                      <Link className="uppercase" href={item?.Link} key={idx}>{item?.Label}</Link>
                      <div className={`absolute bottom-[-4px] left-0 mt-2 w-[18px] h-[2px] group-hover:bg-theme-main ${pathname === item?.Link ? 'bg-theme-main' : ''}`} />
                    </li>
                ))}
              </ul>
              <RequestAQuoteButton Email={Button?.Email} />
            </div>
          </div>
        </div>
      </section>
      <MobileHeader NavLinks={NavLinks} />
    </header>
  );
};

export default HeaderOne;
