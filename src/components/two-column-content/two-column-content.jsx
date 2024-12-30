import Image from 'next/image'

const TwoColumnContent = (props) => {
  const { invert, bgColor, bgGray = '', image, title, caption, points, isCustomBasis, zeroGap } = props;

  return (
    <section className={`container mx-auto flex flex-col md:flex-row px-3 mb-4 ${zeroGap ? '' : 'gap-4'} ${invert && "md:!flex-row-reverse"}`}>
      <div
        className={`basis-[100%] ${isCustomBasis ? 'md:basis-[65%]' : 'md:basis-[50%]'}`}
      >
        <figure className='w-full h-full'>
          <Image
            alt={title}
            src={image}
            width={1700}
            height={1200}
            className='w-full h-full object-cover'
          />
        </figure>
      </div>
      <div
        style={{
          backgroundColor: bgColor,
        }}
        className={`basis-[100%] ${isCustomBasis ? 'md:basis-[35%]' : 'md:basis-[50%]'} flex flex-col justify-between p-8 lg:p-14 ship_supply_content ${bgGray ? "bg-[#F1F3F5] text-theme-main" : "blue_gradient2 text-white"}`}
      >
        <div>
          <h2>{title}</h2>
          <p>{caption}</p>
          {points &&
            <ul className='flex flex-col gap-3'>
              {points?.map((point, index) =>
                <li key={index}>{point}</li>
              )}
            </ul>
          }
        </div>
        <div>
          <button className={`flex items-center gap-6 ${bgGray ? "bg-theme-main text-white" : "bg-white text-theme-main"} py-[13px] px-[24px] font_calibri rounded-full`}>
            <span>View Products</span>
            <Image src={bgGray ? '/svg/arrow_forward.svg' : '/svg/arrow_next.svg'} alt='arrow_next' width={16} height={16} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default TwoColumnContent