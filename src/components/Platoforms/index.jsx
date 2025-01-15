import React from 'react'

const Platforms = ({Buttons}) => {
  console.log("🚀 ~ Platforms ~ Buttons:", Buttons)
  return (
    <section className='container mx-auto flex flex-col md:flex-row px-3 xl:px-0 items-center mb-4'>
        <h2 className='text-[#2E368F] text-[30px] sm:text-[40px] font_franklin font-medium leading-tight'>{Buttons?.Title}</h2>
        <div className='flex  container mx-auto flex-wrap mb-[66px] mt-[23px] items-center gap-2 sm:gap-4 font_calibri text-theme-main'>
        {Buttons?.Buttons?.map((item, idx) => (
            <a target="_blank" href={item?.Link || "#"} key={idx}><button className="py-[6px] font_calibri font-semibold px-4 sm:px-[30px] border border-theme-main leading-[32px] rounded-full w-[242px]">{item?.Label}</button></a>
          ))}
        </div>
    </section>
  )
}

export default Platforms