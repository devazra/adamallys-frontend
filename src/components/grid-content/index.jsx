import Image from 'next/image'
import LiBold from '../LiBold';
import Link from 'next/link';

const GridContent = (props) => {
  const { id, data, images } = props;

  return (
    <section id={id} className={`container mx-auto flex flex-col mb-4 gap-4 px-3 xl:px-0`}>
      <div className="flex flex-col md:flex-row gap-4">
        {images?.map((image, index) =>
          <div
            key={index}
            className={`basis-[100%] md:basis-[50%]`}
          >
            <figure className='w-full h-full'>
              <Image
                src={image}
                width={1700}
                height={1200}
                alt={'image'}
                className='w-full md:h-full h-[243px] object-cover'
              />
            </figure>
          </div>
        )}
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        {data?.map(({ title, points, caption, bgGray, link }) =>
          <div
            key={title}
            className={`basis-[100%] md:basis-[50%] flex flex-col justify-between p-8 lg:p-14 ship_supply_content ${bgGray ? "bg-[#F1F3F5] text-theme-main" : "blue_gradient2 text-white"}`}
          >
            <div>
              <h2 className='!text-[25px] md:!text-[40px] !mb-0 md:!mb-6'>{title}</h2>
              <p className='!text-xs md:!text-lg'>{caption}</p>
              {points &&
                <ul className='flex flex-col gap-3'>
                  {points?.map((point, index) =>
                    <LiBold isGradientBg={!bgGray} className='!text-xs md:!text-lg' key={index}>{point}</LiBold>
                  )}
                </ul>
              }
            </div>
            <div className='max-w-[178px]'>
              <Link href={link} className={`whitespace-nowrap flex items-center text-xs justify-between md:text-base gap-6 ${bgGray ? "bg-theme-main text-white" : "bg-white text-theme-main"} py-[13px] px-[24px] font_calibri rounded-full`}>
                <span>View Products</span>
                <Image src={bgGray ? '/svg/arrow_forward.svg' : '/svg/arrow_next.svg'} alt='arrow_next' width={16} height={16} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default GridContent