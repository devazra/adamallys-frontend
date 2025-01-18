import GridBanner from '@/components/hero/grid-banner'
import IndustrialEnergyComp from '@/components/IndustrialEngery'
import ChooseAdamallys from '@/components/choose-adamallys/choose-adamallys'
import OtherServices from "@/components/other-services-slider/OtherServices"
import Accordion from '@/components/Accordion'

const IndustrialEnergy = (props) => {
  const { title, info, video_title, Video, KeyProducts, OtherServices: otherServicesData } = props;


  return (
    <>
      <div className="mb-24" />
      <section>
        <div>
          <h1 className="text-center flex flex-col justify-center items-center text-[25px] mt-2 mb-1 sm:text-[40px] font_calibri leading-[149%] md:text-[50px] lg:text-[60px] font-bold text-[#2E368F] px-4">
            Products & Services
            <div className='h-[1px] w-[49px] bg-[#8B8B8B] my-4 md:hidden block' />
          </h1>
        </div>
        <GridBanner />
      </section>
      <h2 className='text-[25px] text-center md:hidden lg:leading-[67px] font-bold text-theme-main !mb-0'>{title}</h2>
      <p className="text-[12px] font-light text-center leading-[26px] py-3 md:hidden px-[18px] md:px-0">
        {info}
      </p>
      <section className="mt-6 md:mt-14 container mx-auto flex flex-col lg:flex-row gap-5 lg:gap-10 mb-6 lg:mb-20 px-[18px] xl:px-0">
        <div className='lg:w-[30%] md:min-w-[464px]'>
          <IndustrialEnergyComp
            isIndustrial
            caption={video_title}
            image={Video?.data?.attributes?.url}
          />
        </div>
        <div className='lg:w-[70%] lg:mt-[-14px]'>
          <h2 className='m-0 text-[60px] font_calibri text-center md:text-[60px] md:text-left leading-[67px] font-bold text-theme-main hidden md:block'>
            {title}
          </h2>
          <p className="font_calibri text-lg font-light leading-[26px] py-4 lg:py-[30px] hidden md:block">
            {info}
          </p>
          <p className="text-[25px] md:text-[40px] text-center md:text-left font_calibri leading-[45px] font-bold text-theme-main">Our Key Product Offerings</p>
          <div className='md:mt-[30px] mb-0 mt-[30px] w-full h-[1px] bg-[#B2B6E0]' />
          <div className=''>
            <Accordion
              data={
                KeyProducts?.map((item, idx) => (
                  {
                    title: item?.Title,
                    content: (
                      item?.__component === "cards.ie-content" ?
                        <p className='text-lg font-light'>{item?.Caption}</p>
                        :
                        <ul className=''>
                          {
                            item?.List?.map((item, id) => (
                              <li key={id}>
                                <span className='font-bold text-lg whitespace-nowrap mr-1'>{item?.Label}</span>
                                <span className='font-light text-lg'>{item?.list}</span>
                              </li>
                            ))
                          }
                        </ul>
                    )
                  }
                ))
              }
            />
          </div>
        </div>
      </section>
      <ChooseAdamallys />
      <OtherServices {...otherServicesData} />
    </>
  )
}

export default IndustrialEnergy

