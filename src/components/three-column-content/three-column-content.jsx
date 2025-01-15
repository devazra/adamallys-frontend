import Image from 'next/image'
import LiBold from '../LiBold';
import Link from 'next/link';

const ThreeColumnContent = (props) => {
  const { id, image1, image2, title, caption, points, link = '#' } = props;
  return (
    <section id={id} className={`container mx-auto grid md:grid-cols-2 lg:grid-cols-3 mb-4 gap-4 px-[18px] xl:px-0`}>
      <div className=''>
        <figure className='h-full'>
          <Image src={image1} alt='' className='w-full md:h-full h-[243px] object-cover ' width={700} height={800} />
        </figure>
      </div>
      <div className={`p-8 xl:p-14 ship_supply_content text-white bg-theme-main`}>
        <h2 className='!text-[25px] md:!text-[40px] !mb-0 md:!mb-3'>{title}</h2>
        <p className='!text-xs md:!text-lg'>{caption}</p>
        <ul className='flex flex-col gap-3'>
          {points?.map((point, index) =>
            <LiBold isGradientBg className='!text-xs md:!text-lg' key={index}>{point}</LiBold>
          )}
        </ul>
        <div className='max-w-[178px]'>
          <Link href={link} className='mt-6 whitespace-nowrap flex text-xs justify-between md:text-base items-center gap-6 bg-white py-[13px] px-[24px] text-[#2E368F] font_calibri rounded-full'>
            <span>View Products</span>
            <Image src={'/svg/arrow_next.svg'} alt='arrow_next' width={16} height={16} />
          </Link>
        </div>
      </div>
      <div className='hidden lg:block'>
        <figure className='h-full'>
          <Image src={image2} alt='' className='w-full md:h-full h-[243px] object-cover' width={700} height={800} />
        </figure>
      </div>
    </section>
  )
}

export default ThreeColumnContent