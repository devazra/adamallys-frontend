"use client"
import dayjs from 'dayjs'
import Image from 'next/image'
import { getFullImageURL } from '@/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { renderRichText } from '@/components/our-company/our-company';

const NewsAndEventDetailsTemplate = ({ data, content = {} }) => {
  const { id, attributes } = content
  const [nextNews, setNextNews] = useState()
  const [prevNews, setPrevNews] = useState()
  const router = useRouter();

  const otherNews = data?.filter((newsInstance) => id !== newsInstance?.id)?.slice(0, 3);

  useEffect(() => {
    if (data && id) {
      const currentIndex = data.findIndex(item => item.id === id);
      const previousItem = data[currentIndex - 1] || null;
      const nextItem = data[currentIndex + 1] || null;

      setPrevNews(previousItem);
      setNextNews(nextItem);
    }
  }, [data, id]);

  return (
    <div>
      <section className="container mx-auto px-[18px] xl:px-0 md:pt-[30px] mt-14">
        <div className=" flex flex-col md:gap-0 pt-5">
          <h1 className="mt-[25px] md:mt-0 mb-3 md:mb-0 text-[25px] md:text-[60px] font-bold text-theme-main">
            {attributes?.title}
          </h1>
          <p className="text-theme-main">
            {dayjs(attributes?.Date).format("MMMM DD-DD YYYY")}
          </p>
        </div>

        <div className="pt-5 md:pt-[32px] pb-6 md:pb-[38px]">
          <figure>
            <Image
              className='w-full'
              alt={attributes?.title}
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              src={attributes?.Banner_Image?.data?.attributes?.url} width={1702} height={491}
            />
          </figure>
        </div>

        <div
          className="pb-6 md:pb-[38px]"
        >
          {renderRichText(attributes?.Content)}
        </div>

        <div className="flex items-center justify-between gap-4 pb-5 md:pb-[32px]">
          <button
            type="submit"
            disabled={!(prevNews?.attributes?.Slug) && true}
            onClick={() => router.push(`/news-&-events/${prevNews?.attributes?.Slug}`)}
            className="w-[96px] md:w-[157px] font_calibri flex items-center justify-center gap-[12px] h-[49px] bg-white text-theme-main border border-theme-main"
          >
            Back
          </button>

          <button
            type="submit"
            disabled={!(nextNews?.attributes?.Slug) && true}
            onClick={() => router.push(`/news-&-events/${nextNews?.attributes?.Slug}`)}
            className="w-[96px] md:w-[157px] font_calibri flex items-center justify-center gap-[12px] h-[49px] bg-white text-theme-main border border-theme-main"
          >
            Next
          </button>
        </div>

        <p className="text-theme-main pb-6 md:pb-[39px] font_franklin text-[25px] md:text-[40px] leading-[45px] ">Read more</p>

        <div className="flex gap-6 mb-[69px] flex-wrap">
          {otherNews?.map((item, idx) => (
            <div key={idx} className={`${otherNews > 2 && "flex-1"} basis-full sm:basis-[40%] lg:basis-[30%] flex flex-col`}>
              <figure>
                <Image src={getFullImageURL(item?.attributes?.Image?.data?.attributes?.url)} alt={item?.attributes.Slug} className='w-full' width={434} height={293} />
              </figure>
              <div className='flex-1 flex flex-col justify-between bg-[#F5F6F8] p-5 md:px-[43] md:pt-[39px] md:pb-[43px] font_calibri'>
                <div>
                  <h6 className='text-theme-main'>{dayjs(item?.attributes?.Date).format('DD MMM YYYY')}</h6>
                  <p className='text-[#8B8B8B] text-[17px] sm:text-[20px] md:text-[25px] md:leading-[34px] font-light mt-[13px]'>{item?.attributes?.Excerpt}
                  </p>
                </div>
                <Link href={`/news-&-events/${item?.attributes.Slug}`}>
                  <button className={`flex items-center gap-10 mt-[13px] text-theme-main`}>
                    Read More
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                      <mask id="mask0_42_1540" maskUnits="userSpaceOnUse" x="0" y="0" width="17" height="17">
                        <rect width="16.1863" height="16.1863" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_42_1540)">
                        <path d="M5.39553 14.2305L4.82227 13.6572L10.3863 8.09313L4.82227 2.52908L5.39553 1.95581L11.5329 8.09313L5.39553 14.2305Z" fill={"#2E368F"} />
                      </g>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default NewsAndEventDetailsTemplate