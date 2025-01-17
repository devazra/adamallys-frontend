"use client"
import React from 'react'
import gsap from 'gsap'
import HeaderOne from './header-one'
import HeaderTwo from './header-two'
import { usePathname } from 'next/navigation'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MobileHeader from './mobile-header'

gsap.registerPlugin(ScrollTrigger);

const menuOptions = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Who we are',
    href: '#',
    options: [
      {
        label: 'About Us',
        href: '/about'
      },
      {
        label: 'Ports',
        href: '/ports'
      },
    ]
  },
  {
    label: 'Product & Services',
    href: '#',
    options: []
  },
  {
    label: 'Distributor & Stockists',
    href: '/distributors-&-stockists',
  },
  {
    label: 'Standards & Innovation',
    href: '#',
    options: [
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
    ]
  },
  {
    label: 'News',
    href: '/news-&-events',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

const HeaderLayout = ({ data }) => {
  const path = usePathname();
  return (
    <div className={`${path === "/" ? '' : 'pb-4 lg:pb-8'} z-[99999] relative`}>
      <HeaderOne menuOptions={menuOptions} data={data} />
      <HeaderTwo menuOptions={menuOptions} data={data} slideFromTop />
      <MobileHeader menuOptions={menuOptions} />
    </div>
  )
}

export default HeaderLayout