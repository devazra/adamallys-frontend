"use client"
import Link from 'next/link'
import Image from 'next/image'
import GridBanner from '@/components/hero/grid-banner'
import Milestones from '@/components/milestones/Milestones'
import ChooseAdamallys from '@/components/choose-adamallys/choose-adamallys'
import OtherServices from "@/components/other-services-slider/OtherServices"
import modifyImageUrl from "@/utils/modifyImageUrl"
import Platforms from "@/components/Platoforms"

const renderRichText = (blocks) => {
  return blocks?.map((block, index) => {
    const { children } = block;
    return (
      <p key={index} className="font-light !text-[rgba(62, 62, 62, 1)]">
        {children?.map((child) => child?.text)}
      </p>
    );
  });
};

const ShipSupply = (props) => {
  const { title, content, Product_and_service, milestones, OtherServices: otherServicesData, Buttons } = props;

  const text = renderRichText(content)
  return (
    <div>
      <div className="mb-24" />
      <section>
        <div>
          <h1 className="text-center flex flex-col justify-center items-center text-[25px] mt-2 mb-1 sm:text-[40px] font_calibri leading-[149%] md:text-[50px] lg:text-[60px] font-bold text-[#2E368F] px-4">
            Products & Services
            <div className='h-[1px] w-[49px] bg-[#8B8B8B] mt-4 md:hidden block' />
          </h1>
        </div>
        <GridBanner />
      </section>
      <section className="mt-4 md:mt-14 container px-[18px] xl:px-0 mx-auto flex flex-col md:flex-row gap-5 md:gap-[49px] mb-4 md:mb-20">
        <div className='md:w-[30%]'>
          <div className='md:sticky md:top-[110px] mt-[-14px]'>
            <h2 className='text-3xl md:text-5xl lg:text-6xl font_calibri text-theme-main font-bold flex flex-col justify-center items-center md:items-start md:text-left md:justify-start'>{title}</h2>
            <div className='ship_supply_content font_calibri mt-4 text-[#3E3E3E] md:text-lg font-light leading-[26px] text-center md:text-left text-xs'>
              {text}
            </div>
          </div>
        </div>
        <div className='md:w-[70%]'>
          <div className='w-full h-[1px] bg-[#9F9F9F] mt-[30px] my-[15px] md:mb-0 md:py-0 md:hidden' />
          <div className='flex flex-col md:gap-10'>
            <div className='w-full h-[1px] bg-[#9F9F9F] hidden md:block' />
            {
              Product_and_service?.map?.((item, idx) => (
                <div key={idx}>
                  <div className='grid grid-cols-2 gap-4 md:gap-10'>
                    <figure className='h-ful w-full'>
                      <Image src={modifyImageUrl(item?.Image?.data?.attributes?.url)} alt={item?.title} className='max-h-[257px] w-full h-full object-cover' width={400} height={214} />
                    </figure>
                    <div className='flex flex-col justify-between'>
                      <div>
                        <h3 className='text-theme-main text-xl md:text-4xl mb-1 font_franklin'>{item?.title}</h3>
                        <p className='mt-3 text-lg font-light text-[#3E3E3E] leading-[26px] font_calibri line-clamp-2 md:line-clamp-none'>{item?.Excerpt}</p>
                      </div>
                      <Link href={item?.link} className='mt-[45px] text-theme-main flex gap-[29px]'>
                        Read More
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <mask id="mask0_550_4737" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                            <rect width="24" height="24" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_550_4737)">
                            <path d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z" fill="#2E368F" />
                          </g>
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <div className='w-full h-[1px] bg-[#9F9F9F] my-4 md:mb-0 md:mt-[40px]' />
                </div>
              ))
            }
          </div>
        </div>
      </section>
      <Platforms Buttons={Buttons[0]}/>
      <Milestones data={milestones} />
      <ChooseAdamallys />
      <OtherServices {...otherServicesData} />
    </div>
  )
}

export default ShipSupply