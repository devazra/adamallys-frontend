"use client";
import React, { useState } from "react";
import Logo from "./logo";
import Link from "next/link";
import Accordion from "../Accordion";
import { usePathname, useRouter } from "next/navigation";
import { MenuIcon, XIcon } from "../../../public/icons";
import { shipSupplyPaginationData } from "@/consts/shipSupply";
import Image from "next/image";
import useScrollPosition from "@/hooks/useScrollPosition";

const standardsInnovationLinks = [
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
];

const whoWeAreLinks = [
  {
    label: 'About Us',
    href: '/about'
  },
  {
    label: 'Ports',
    href: '/ports'
  },
]

const MobileHeader = ({ menuOptions, NavLinks }) => {
  const { push } = useRouter();
  const pathname = usePathname();
  const scrollPosition = useScrollPosition()

  const [openMobileNav, setOpenMobileNav] = useState(false);

  const handleNavigate = (link) => {
    push(link)
    setOpenMobileNav(false)
  }

  const isShipSupplyPage = pathname === "/products-&-services"
  const isIndustrialPage = pathname === "/industrial-&-energy-sector-supplies"
  const isMarineLogisticsPage = pathname === "/marine-logistics-&-warehousing"

  return (
    <header
      className={`${(scrollPosition < 100 && pathname === "/") ? "header-gradient" : "bg-white"} fixed z-[200] top-0 xl:hidden top-0 w-full z-[50]`}
    >
      <div>
        <div className="pl-[18px] item-center flex justify-between w-full">
          <Logo />
          <div className="!bg-[#2E368F] w-[68px] h-[65px] flex justify-center items-center" onClick={() => setOpenMobileNav(!openMobileNav)}>
            {openMobileNav ? <XIcon /> : <MenuIcon />}
          </div>
        </div>
        {openMobileNav &&
          <div
            className={`${openMobileNav && "min-h-[650px]"} absolute w-full right-0 transition-all duration-300 left-0 z-[-1] pt-20 pb-5 px-4 ${openMobileNav ? "top-0" : "-top-[1000%]"
              } flex flex-col justify-between`}
            style={{
              background: 'linear-gradient(to bottom, #FFFFFF, #DFE2FF )'
            }}
          >
            <ul className="flex flex-col p-6">
              {menuOptions?.map((item, idx) => (item?.options ?
                item?.options?.length ?
                  <Accordion
                    isHeader
                    data={[
                      {
                        title: item?.label,
                        content: <>
                          <ul className="relative min-w-[310px] flex flex-col gap-2 py-4 px-5">
                            {item?.options?.map((linkItem, index) =>
                              <li key={index} className="relative group">
                                <Link
                                  href={linkItem?.href}
                                  onClick={() => handleNavigate(linkItem?.href)}
                                  className={`group text-lg text-theme-main whitespace-nowrap ${pathname === linkItem?.href ? 'font-bold' : ''} hover:font-bold`}
                                >
                                  {linkItem?.label}
                                </Link>
                                <div
                                  className={`group-hover:bg-theme-main mt-2 w-[18px] h-[2px] transition-colors duration-300 ${pathname === linkItem?.href ? 'bg-theme-main' : 'bg-transparent'}`}
                                />
                              </li>
                            )}
                          </ul>
                        </>
                      }
                    ]}
                  /> :
                  <Accordion
                    isHeader
                    data={[
                      {
                        title: 'Product & Services',
                        content: <>
                          <div
                            className={`w-full text-theme-main`}>
                            <div
                              className="relative group"
                            >
                              <div className="flex gap-2 items-center justify-between">
                                <Image src={'/svg/arrow_forward_link.svg'} alt='arrow' width={13} height={13} />
                                <Link
                                  onClick={() => handleNavigate("/products-&-services")}
                                  href="/products-&-services"
                                  className={`w-full text-lg z-9 whitespace-nowrap ${(isShipSupplyPage) ? 'font-bold' : ''} hover:font-bold`}
                                >
                                  Ship Supply
                                </Link>
                              </div>
                            </div>
                            <ul className="pl-6 grid grid-cols-1 gap-2 py-4 px-5">
                              {shipSupplyPaginationData?.map((page, index) => (
                                <li
                                  key={page?.link + index}
                                  className={`mr-5 relative group font-light ${page?.link === pathname && "!font-bold"}`}
                                >
                                  <Link
                                    onClick={() => handleNavigate(page?.link)}
                                    href={page?.link} className={`whitespace-nowrap text-lg text-theme-main hover:font-bold font_calibri`}>
                                    {page?.label}
                                  </Link>
                                  <div
                                    className={`group-hover:bg-theme-main mt-2 w-[18px] h-[2px] ${page?.link === pathname ? 'bg-theme-main' : ''}`} />
                                </li>
                              ))}
                            </ul>
                            <div className="relative group">
                              <Link
                                onClick={() => handleNavigate("/marine-logistics-&-warehousing")}
                                href="/marine-logistics-&-warehousing"
                                className={`text-lg whitespace-nowrap ${isMarineLogisticsPage ? 'font-bold' : ''} hover:font-bold`}
                              >Marine Logistics & Warehousing</Link>
                              <div className={`mt-2 w-[18px] h-[2px] group-hover:bg-theme-main ${isMarineLogisticsPage ? 'bg-theme-main' : ''}`} />
                            </div>

                            <div className="relative group mt-2">
                              <Link
                                onClick={() => handleNavigate("/industrial-&-energy-sector-supplies")}
                                href="/industrial-&-energy-sector-supplies"
                                className={`text-lg whitespace-nowrap ${isIndustrialPage ? 'font-bold' : ''} hover:font-bold`}
                              >Industrial & Energy Sector Supplies</Link>
                              <div className={`mt-2 w-[18px] h-[2px] group-hover:bg-theme-main ${isIndustrialPage ? 'bg-theme-main' : ''}`} />
                            </div>
                          </div>
                        </>
                      }
                    ]}
                  />
                :
                <li key={idx} className="relative group pt-4">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item?.href}
                      onClick={() => handleNavigate(item?.href)}
                      className={`block text-theme-main uppercase hover:font-bold group ${pathname === item?.href ? 'font-bold' : ''}`}
                    >
                      {item?.label}
                    </Link>
                    <Image src='/svg/arrow_forward_nav.svg' alt='arrow_forward_nav' width={17} height={17} />
                  </div>
                  <div className={`absolute bottom-[-4px] left-0 mt-2 w-[18px] h-[2px] group-hover:bg-theme-main ${pathname === item?.href ? 'bg-theme-main' : ''}`} />
                </li>
              ))}

            </ul>
            <Link href={'/request-a-quote'} onClick={() => handleNavigate('/request-a-quote')} className="w-full text-white mt-3 bg-theme-main text-left px-[19px] py-[9px]">
              <p className="text-center text-[15px] font-light">Request a Quote</p>
              <h6 className="text-center text-lg font-bold">adamallys@adamallys-llc.com</h6>
            </Link>
          </div>
        }
      </div>
    </header>
  );
};

export default MobileHeader;
