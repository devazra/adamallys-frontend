'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react';

const data = [
  {
    link: '#',
    title: 'BAHCO',
    image: '/images/distributors-&-tockists/distributors-logo-1.png',
    description: 'Bahco designs and manufactures tools and saws tailored to the most demanding professionals, focusing our design highly on innovation, performance',
  },
  {
    link: '#',
    title: 'STANLEY',
    image: '/images/distributors-&-tockists/distributors-logo-1.png',
    description: 'Since 1843, professionals and skilled homeowners have trusted and wielded STANLEY® tools in their projects and tasks',
  },
  {
    link: '#',
    title: 'KOEHLER BRIGHT STAR',
    image: '/images/distributors-&-tockists/distributors-logo-1.png',
    description: 'KOEHLER BRIGHT STAR is a leading manufacturer of industrial and safety lights.',
  },
  {
    link: '#',
    title: 'WOLF SAFETY',
    image: '/images/distributors-&-tockists/distributors-logo-1.png',
    description: 'Wolf Safety is the worlds leading manufacturer of hazardous area portable & temporary lighting, offering the widest range of ATEX and IECEx certified',
  },

];

const DistributorsAndStockistsTemplate = () => {
  const [expanded, setExpanded] = useState({});
  const [showButton, setShowButton] = useState({});

  const descriptionRefs = useRef([]);

  const toggleExpand = (title) => {
    setExpanded((prevState) => ({
      ...prevState,
      [title]: !prevState[title],
    }));
  };

  useEffect(() => {
    data.forEach((distributor, index) => {
      const descriptionElement = descriptionRefs.current[index];
      if (descriptionElement) {
        setShowButton((prevState) => ({
          ...prevState,
          [distributor.title]: descriptionElement.scrollHeight > 130, // Show button if height exceeds 130px
        }));
      }
    });
  }, [data]);

  return (
    <main
      className='mt-[8rem] container mx-auto'>
      <section>
        <div className={`relative min-h-[418px] flex flex-col text-white justify-center items-center`}
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: 'url(/images/distributors-&-tockists/distributors-image.png)'
          }}
        >
          <div className="relative z-[999] px-8">
            <h1 className="text-white text-[60px] leading-[67px] text-center font-bold">
              Distributors & Stockists
            </h1>
            <p className="mt-[17px] text-[22px] leading-[32px] text-center font-bold">Adamallys LLC stocks products from some of the most renowned brands</p>
          </div>
          <div className={`absolute black_gradient inset-0`}>
          </div>
        </div>
      </section>
      <div className="my-[68px] flex flex-wrap gap-[24px]">
        {data?.map((distributor, index) =>
          <div key={distributor?.title} className=" basis-full flex-1 lg:basis-[40%] relative border flex min-h-[360px]">
            <div className="flex-1 pt-[42px] pl-[64px] pr-[57px] border-r">
              <Image
                width={198}
                height={198}
                alt='Distributors-logo'
                src="/images/distributors-&-tockists/distributors-logo-1.png"
              />
            </div>
            <div className="flex-1 pt-[42px] pl-[64px] pr-[57px]">
              <p className="text-theme-main font-bold text-[30px] leading-[44px] mb-3">{distributor?.title}</p>
              <div className="mb-[150px] ">
                <p
                  ref={(el) => descriptionRefs.current[index] = el}
                  className={`inline-block font-light text-lg leading-[26px] ${expanded[distributor.title] ? '' : 'truncate'}`}
                  style={{
                    whiteSpace: 'wrap',
                    maxHeight: expanded[distributor.title] ? 'none' : '130px',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: expanded[distributor.title] ? 'none' : 5,
                    '-webkit-box-orient': 'vertical',
                  }}
                >
                  {distributor.description}
                </p>
                {showButton[distributor.title] &&
                  <button
                    className="inline-block  text-theme-main font-semibold"
                    onClick={() => toggleExpand(distributor.title)}
                  >
                    {expanded[distributor.title] ? 'Read Less' : 'Read More'}
                  </button>
                }
              </div>
            </div>
            <div style={{
              transform: 'translateX(-50%)'
            }} className="absolute left-[50%] bottom-[42px] bg-white pt-[41px] pb-[38px]  ">
              <a className='whitespace-nowrap bg-white text-lg font-bold leading-[26px] text-theme-main py-4 px-[65px] border border-[#B2B6E0] rounded-[30px]' href={distributor?.link} target='_blank'>Visit Website</a>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

export default DistributorsAndStockistsTemplate