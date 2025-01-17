'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { shipSupplyPaginationData } from '@/consts/shipSupply';

import styles from './style.module.css';

const productAndServicesMegaMenu = [
  '/industrial-&-energy-sector-supplies',
  '/products-&-services',
  '/marine-logistics-&-warehousing',
  ...shipSupplyPaginationData?.map(({ link }) => link)
];

const MegaMenu = ({ title, links = [] }) => {
  const pathname = usePathname();

  const [isShipSupplyHovered, setIsShipSupplyHovered] = useState(false);
  const isShipSupplyPage = pathname === "/products-&-services"
  const isIndustrialPage = pathname === "/industrial-&-energy-sector-supplies"
  const isMarineLogisticsPage = pathname === "/marine-logistics-&-warehousing"

  const isActive = links?.map(({ href }) => href)?.includes(pathname);
  const isProductActive = productAndServicesMegaMenu?.includes(pathname);

  return (
    <div className="relative">
      <div className="product-services">
        <Link
          href={title ? "" : "/products-&-services"}
          className={`relative z-[99] group ${styles.product_services}`}
        >
          {title || 'Product & Services'}
          <span className={`absolute group-hover:bg-theme-main bottom-[-4px] left-0 block mt-2 w-[18px] h-[2px] ${(isActive || (!title && isProductActive)) ? 'bg-theme-main' : ''}`} />
        </Link>
        <div className={`${styles.mega_menu} w-[145px] h-12 absolute top-1`}>
          <nav
            style={{ zIndex: 999, boxShadow: '0px 2px 12.5px 0px rgba(46, 54, 143, 0.09)' }}
            className={`absolute flex top-[36px] bg-white text-theme-main z-[999]`}
          >
            <ul className="relative min-w-[310px] flex flex-col gap-2 py-4 px-5">
              {links?.length ?
                links?.map((linkItem, index) =>
                  <li key={index} className="relative group">
                    <Link
                      href={linkItem?.href}
                      className={`group whitespace-nowrap ${pathname === linkItem?.href ? 'font-bold' : ''} hover:font-bold`}
                    >
                      {linkItem?.label}
                    </Link>
                    <div
                      className={`group-hover:bg-theme-main mt-2 w-[18px] h-[2px] transition-colors duration-300 ${pathname === linkItem?.href ? 'bg-theme-main' : 'bg-transparent'}`}
                    />
                  </li>
                ) :
                <>
                  <li
                    onMouseEnter={() => setIsShipSupplyHovered(true)}
                    onMouseLeave={() => setIsShipSupplyHovered(false)}
                    className='top-[15px] w-full h-[25px] absolute z-2' />
                  <li
                    onMouseEnter={() => setIsShipSupplyHovered(true)}
                    onMouseLeave={() => setIsShipSupplyHovered(false)}
                    className="relative group"
                  >
                    <div className="flex items-center justify-between">
                      <Link
                        href="/products-&-services"
                        className={`w-full z-9 whitespace-nowrap ${(isShipSupplyPage || isShipSupplyHovered) ? 'font-bold' : ''} hover:font-bold`}
                      >
                        Ship Supply
                      </Link>
                      {
                        isShipSupplyHovered &&
                        <Image src={'/svg/arrow_forward_link.svg'} alt='arrow' width={13} height={13} />
                      }
                    </div>
                    <div className={`mt-2 w-[18px] h-[2px] group-hover:bg-theme-main ${isShipSupplyPage ? 'bg-theme-main' : ''}`} />
                  </li>

                  <li className="relative group">
                    <Link
                      href="/marine-logistics-&-warehousing"
                      className={`whitespace-nowrap ${isMarineLogisticsPage ? 'font-bold' : ''} hover:font-bold`}
                    >Marine Logistics & Warehousing</Link>
                    <div className={`mt-2 w-[18px] h-[2px] group-hover:bg-theme-main ${isMarineLogisticsPage ? 'bg-theme-main' : ''}`} />
                  </li>

                  <li className="relative group">
                    <Link
                      href="/industrial-&-energy-sector-supplies"
                      className={`whitespace-nowrap ${isIndustrialPage ? 'font-bold' : ''} hover:font-bold`}
                    >Industrial & Energy Sector Supplies</Link>
                    <div className={`mt-2 w-[18px] h-[2px] group-hover:bg-theme-main ${isIndustrialPage ? 'bg-theme-main' : ''}`} />
                  </li>
                </>
              }
            </ul>
            <div
              onMouseEnter={() => setIsShipSupplyHovered(true)}
              onMouseLeave={() => setIsShipSupplyHovered(false)}
              className={`${isShipSupplyHovered ? 'flex' : 'hidden'}`}
            >
              <div className='w-[2px] bg-[rgba(0,0,0,0.075)]' />
              <div
                className={`w-full min-w-[480px] flex  w-full bg-white text-theme-main`}>
                <ul className="grid grid-cols-2 gap-2 py-4 px-5">
                  {shipSupplyPaginationData?.map((page, index) => (
                    <li
                      key={page?.link + index}
                      className={`mr-5 relative group font-light ${page?.link === pathname && "!font-bold"}`}
                    >
                      <Link
                        href={page?.link} className={`${styles.below_line} !whitespace-nowrap text-theme-main hover:font-bold font_calibri`}>
                        {page?.label}
                      </Link>
                      <div
                        className={`group-hover:bg-theme-main mt-2 w-[18px] h-[2px] ${page?.link === pathname ? 'bg-theme-main' : ''}`} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;