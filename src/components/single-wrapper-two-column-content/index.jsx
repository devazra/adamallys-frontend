import Image from 'next/image'
import LiBold from '@/components/LiBold'
import Link from 'next/link';

const SingleWrapperTwoColumnContent = (props) => {
  const { isGradientBg = false, images, title, caption, points, link, isProductButton } = props;

  return (
    <div className="mx-[18px] md:mx-0">
      <section className={` ${isGradientBg ? 'blue_gradient2 md:px-[70px]' : 'mt-0'} container mx-auto flex flex-col md:flex-row gap-4 sm:pb-10 lg:pb-[170px]`}>
        <div
          className={'p-[18px] md:px-0 md:w-[50%]'}
        >
          {
            images?.map((image, index) =>
              <figure key={index} className={`sticky top-[90px] ${isGradientBg ? 'pt-5 md:pt-10' : ''}`}>
                <Image
                  alt={title}
                  src={image}
                  width={1700}
                  height={1800}
                  className=' object-cover'
                />
              </figure>
            )
          }
        </div>
        <div
          className={`flex-1 flex flex-col justify-between md:w-[50%] p-[18px] md:p-8 lg:p-14 ship_supply_content ${isGradientBg ? "md:mt-[80px] text-white" : "text-theme-main md:mt-[60px]"}`}>
          <div>
            <h2 className='font_franklin text-[25px] lg:text-[40px]'>{title}</h2>
            <p>{caption}</p>
            {points?.map(({ title: pointTitle, info, lists }, index) =>
              <div key={title + index}>
                <h3 className='text-[25px] mb-2 font-bold'>{pointTitle}</h3>
                <ul className='flex flex-col gap-2 mb-4'>
                  {lists ? lists?.map((point, idx) =>
                    <LiBold isGradientBg={isGradientBg} key={pointTitle + idx}>
                      {point?.list}
                    </LiBold>
                  ) :
                    <LiBold isGradientBg={isGradientBg}>{info}</LiBold>
                  }
                </ul>
              </div>
            )}
            {isProductButton &&
              <div>
                <Link href={link || "#"} className={`flex max-w-[178px] text-xs justify-between md:text-base items-center gap-6 ${"bg-theme-main text-white"} py-[13px] px-[24px] font_calibri rounded-full`}>
                  <span className='!whitespace-nowrap'>View Products</span>
                  <Image src={'/svg/arrow_forward.svg'} alt='arrow_next' width={16} height={16} />
                </Link>
              </div>
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default SingleWrapperTwoColumnContent