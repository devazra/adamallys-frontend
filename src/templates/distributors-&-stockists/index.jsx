'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react';

const DistributorsAndStockistsTemplate = ({ Cards, Banner }) => {
  const [expanded, setExpanded] = useState({});
  const [showButton, setShowButton] = useState({});

  const descriptionRefs = useRef([]);

  const data = Cards?.map?.(card => (
    {
      link: card?.link,
      title: card?.title,
      image: card?.Icon?.data?.attributes?.url,
      description: card?.info,
    }
  ))

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
  }, []);

  return (
    <main
      className='mt-[5rem] lg:mt-[8rem] container mx-auto px-3 xl:px-0'>
      <section>
        <div className={`relative min-h-[418px] flex flex-col text-white justify-center items-center`}
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${Banner?.Image?.data?.attributes?.url})`
          }}
        >
          <div className="relative z-[2] px-8 hidden md:block">
            <h1 className="text-white text-[60px] leading-[67px] text-center font-bold">
              {Banner?.title}
            </h1>
            <p className="mt-[17px] text-[22px] leading-[32px] text-center font-bold">
              {Banner?.sub_title}
            </p>
          </div>
          <div className={`absolute black_gradient inset-0`}>
          </div>
        </div>
      </section>

      <div className="relative z-[2] px-8 mt-6 md:hidden">
        <h1 className=" text-[25px] md:text-[60px] leading-[67px] text-[#171F7C] text-center font-bold">
          {Banner?.title}
        </h1>
        <p className=" text-[14px] text-center font-bold text-[#171F7C]">
          {Banner?.sub_title}
        </p>
      </div>

      <div className="my-10 md:my-[68px] px-2 flex webkit-flex webkit-wrap flex-wrap gap-[24px]">
        {
          data?.map((distributor, index) =>
            <div key={distributor?.title} className="basis-full flex-1 lg:basis-[40%] relative border border-[#B2B6E0] flex flex-col min-h-[360px]">
              <div className="flex webkit-flex flex-row flex-dir-row flex-grow">
                <div className="flex-1 px-4 lg:pl-[64px] lg:pr-[57px] border-r border-r-[#B2B6E0] min-h-[220px] flex webkit-flex justify-center items-center lg:!items-start">
                  <div className="z-[10] relative lg:mt-[100px] h-[100px] flex webkit-flex items-center justify-center">
                    <Image
                      width={198}
                      height={198}
                      alt='Distributors-logo'
                      src={distributor?.image}
                      className='z-[10]'
                    />
                  </div>
                </div>
                <div className="flex-1 pt-[42px] px-4 lg:pl-[64px] lg:pr-[57px] flex flex-col justify-center">
                  <p className="text-theme-main font-bold text-lg text-center md:text-left md:text-[30px] leading-[44px] md:mb-3">{distributor?.title}</p>
                  <div className="lg:flex-grow mb-10 flex webkit-flex flex-col flex-dir-col justify-center md:justify-start md:items-start">
                    <p
                      ref={(el) => descriptionRefs.current[index] = el}
                      className={`text-[#3E3E3E] font_calibri text-center md:text-left text-xs inline-block font-light md:text-lg leading-[15px] md:leading-[26px] ${expanded[distributor.title] ? '' : 'truncate'}`}
                      style={{
                        whiteSpace: 'wrap',
                        maxHeight: expanded[distributor.title] ? 'none' : '155px',
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: expanded[distributor.title] ? 'none' : 6,
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {distributor.description}
                    </p>
                    {showButton[distributor.title] &&
                      <button
                        className="inline-block text-theme-main text-sm md:text-base"
                        onClick={() => toggleExpand(distributor.title)}
                      >
                        {expanded[distributor.title] ? 'Read Less' : 'Read More'}
                      </button>
                    }
                  </div>
                </div>
              </div>
              <div className="border-t border-t-[#B2B6E0]" />
              <div className="flex webkit-flex justify-center gap-4 lg:gap-8 py-2 lg:py-4  items-center mt-1 mb-1">
                {distributor?.link &&
                  <a className='whitespace-nowrap font_calibri text-xs bg-white  md:text-lg font-bold leading-[26px] text-theme-main py-2 lg:py-4 px-[30px] md:px-[65px] border border-[#B2B6E0] rounded-[30px]' href={distributor?.link} target='_blank'>Visit Website</a>
                }
                <a className='whitespace-nowrap font_calibri bg-white text-xs md:text-lg font-bold leading-[26px] text-theme-main py-2 lg:py-4 px-[30px] md:px-[65px] border border-[#B2B6E0] rounded-[30px]' href="mailto:adamallys@adamallys-llc.com" target='_self'>Enquire Now</a>
              </div>
            </div>
          )
        }

        {data.length % 2 !== 0 && <div className='basis-full flex-1 hidden md:flex md:webkit-flex justify-center flex-col items-center bg-gradient-to-r from-[#2E368F] to-[#B2B6E0] opacity-75 lg:basis-[40%] relative border min-h-[360px]'>
          <Image src="/svg/site-fav.svg" alt="" width={174} height={84} />
        </div>}
      </div>
    </main>
  )
}

export default DistributorsAndStockistsTemplate