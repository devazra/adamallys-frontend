import React from 'react'
import Image from 'next/image'
import { getFooter } from '@/services'
import Tooltip from '@/components/Tooltip'

const VerticleIcon = async () => {
  const { Side_Sticky_Links } = await getFooter()
  return (
    Side_Sticky_Links.length > 0 &&
    <ul className='fixed  right-2 z-[1000] hidden md:flex flex-col gap-2 top-1/2 -translate-y-1/2'>
      {Side_Sticky_Links?.map((item, idx) => (
        <li key={idx}>
          <Tooltip content={item?.Caption || "Tooltip"}>
            <a
              target={((item?.Caption?.toLowerCase() === 'phone') || (item?.Caption?.toLowerCase() === 'email')) ? '_self' : '_blank'}
              href={
                (item?.Caption?.toLowerCase() === 'phone') ?
                  `tel:${item?.link}` :
                  (item?.Caption?.toLowerCase() === 'email')
                    ? `mailto:${item?.link}` :
                    item?.link
              }
            >
              <span className='w-12 h-12 bg-white rounded-full flex flex-col border border-[#EDEDED] justify-center items-center'>
                <Image
                  style={{ scale: (item?.Caption?.toLowerCase() === "mespas") ? 1.5 : item?.Caption?.toLowerCase() === "procureship" ? 1.3 : 1 }}
                  src={item?.Icon?.data?.attributes?.url} alt="" width={20} height={20} className='w-[1.35rem]'
                />
              </span>
            </a>
          </Tooltip>
        </li>
      ))}
    </ul>
  )
}

export default VerticleIcon