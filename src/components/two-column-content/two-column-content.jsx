import Image from 'next/image'
import Link from 'next/link';
import LiBold from '../LiBold';

const TwoColumnContent = (props) => {
  const { id, hideButton, invert, bgColor, bgGray = '', image, title, caption, points, isCustomBasis, zeroGap, link = '#', caption2 } = props;

  return (
    <section id={id} className={`bg-white container px-[18px] xl:px-0 mx-auto flex flex-col md:flex-row mb-4 ${zeroGap ? 'gap-4 md:gap-0' : 'gap-4'} ${invert && "md:!flex-row-reverse"}`}>
      <div
        className={`basis-[100%] ${isCustomBasis ? 'md:basis-[65%]' : 'md:basis-[50%]'}`}
      >
        <figure className='w-full h-full'>
          <Image
            alt={title}
            src={image}
            width={1700}
            height={1200}
            className='w-full md:h-full h-[243px] object-cover'
          />
        </figure>
      </div>
      <div
        style={{
          backgroundColor: bgColor,
        }}
        className={`basis-[100%] ${isCustomBasis ? 'md:basis-[35%]' : 'md:basis-[50%]'} flex flex-col justify-between p-6 md:p-8 lg:p-14 ship_supply_content ${bgGray ? "bg-[#F1F3F5] text-theme-main" : "blue_gradient2 text-white"}`}
      >
        <div>
          <h2 className='!text-[25px] md:!text-[40px] !mb-0 md:!mb-6'>{title}</h2>
          <p className='!text-xs md:!text-lg'>{caption}</p>
          {points &&
            <ul className='flex flex-col gap-3'>
              {points?.map((point, index) =>
                <LiBold key={index} className='!text-xs md:!text-lg' isGradientBg={!bgGray}>
                  {point}
                </LiBold>
              )}
            </ul>
          }
          {caption2 && <p className='mt-2'>{caption2}</p>}
        </div>
        {
          !hideButton && link &&
          <div className='max-w-[178px]'>
            <Link href={link || "#"} className={`flex whitespace-nowrap text-xs justify-between md:text-base items-center gap-6 ${bgGray ? "bg-theme-main text-white" : "bg-white text-theme-main"} py-[13px] px-[24px] font_calibri rounded-full`}>
              <span className='!whitespace-nowrap'>View Products</span>
              <Image src={bgGray ? '/svg/arrow_forward.svg' : '/svg/arrow_next.svg'} alt='arrow_next' width={16} height={16} />
            </Link>
          </div>
        }
      </div>
    </section>
  )
}

export default TwoColumnContent