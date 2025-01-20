"use client"
import Image from 'next/image'
import PortLabelGroup from '@/components/PortLabelGroup';
import { useState } from 'react';

const PortIcon = () => <div className='relative'>
  <div className="absolute top-0 left-0 rounded-full w-[27px] h-[27px] hover:bg-[#2E368E] opacity-75 z-[2]"></div>
  <Image className='' src={'/images/ports/port_icon.png'} alt='' width={27} height={27} />
</div>

const PortsTemplates = ({ ports }) => {
  const [activePort, setActivePort] = useState({
    uae: "Musaffah Port (Abu Dhabi)",
    oman: ""
  })

  const handleActivePortOman = (port) => {
    setActivePort({ ...activePort, oman: port })
  }

  const handleLeavePortOman = (port) => {
    setActivePort({ ...activePort, oman: port })
  }

  const handleLeavePortUAE = (port) => {
    setActivePort({ ...activePort, uae: port })
  }

  const handleActivePortUAE = (port) => {
    setActivePort({ ...activePort, uae: port })
  }

  return (
    <main className='mt-[4rem] mb-[40px] lg:mb-[73px] container mx-auto px-[18px] xl:px-0'>
      <div className="pt-5 sm:pt-[30px] md:pt-[60px]">
        <h1 className='font_calibri capitalize text-[25px] md:text-[60px] leading-[25px] md:leading-[60px] text-center font-bold text-theme-main md:mb-[46px]'>
          Ports
        </h1>

        <div className='w-[49px] h-[2px] bg-[#8B8B8B] md:hidden mx-auto' />

        <div className='px-2 lg:px-[30px] pt-[28px] lg:pt-[38px] pb-[35px] lg:pb-[45px] blue_gradient mt-[32px] lg:mt-[45px]'>
          <h2 className='mb-[26px] text-center lg:text-left font_calibri text-[25px] leading-[25px] sm:text-[60px] sm:leading-[60px] text-theme-main font-bold'>Ports in United Arab Emirates</h2>
          <div className="container mx-auto max-w-[1280px] map overflow-x-auto">
            <div className="w-[1280px] relative">
              <Image
                className='w-[1280px] '
                style={{ width: '100%', objectFit: 'cover', objectPosition: 'center' }}
                src={'/images/ports/uae_ports.png'} alt='uae_ports'
                width={1600}
                height={700}
              />
              {handlePortSelection(activePort?.uae)}
              <button className='h-[26px] w-[25px] hover:bg-[#2E368E]/40 rounded-full cursor-pointer absolute bottom-[296px] left-[720px]' onMouseLeave={() => handleLeavePortUAE("none")} onMouseEnter={() => handleActivePortUAE("Musaffah Port (Abu Dhabi)")}>
                <PortIcon />
              </button>
              <button className='h-[26px] w-[25px] hover:bg-[#2E368E]/40 rounded-full cursor-pointer absolute bottom-[336px] left-[750px]' onMouseLeave={() => handleLeavePortUAE("none")} onMouseEnter={() => handleActivePortUAE("Mina Zayed (Abu Dhabi)")}>
                <PortIcon />
              </button>
              <button className='h-[26px] w-[25px] hover:bg-[#2E368E]/40 rounded-full cursor-pointer absolute bottom-[373.3px] left-[770.5px]' onMouseLeave={() => handleLeavePortUAE("none")} onMouseEnter={() => handleActivePortUAE("Mina Khalifa (Abu Dhabi)")}>
                <PortIcon />
              </button>
             
              <button className='h-[26px] w-[25px] hover:bg-[#2E368E]/40 rounded-full cursor-pointer absolute bottom-[424px] left-[816.8px]' onMouseLeave={() => handleLeavePortUAE("none")} onMouseEnter={() => handleActivePortUAE("Jebel Ali Ports (Dubai)")}>
                <PortIcon />
              </button>
              <button className='h-[26px] w-[25px] hover:bg-[#2E368E]/40 rounded-full cursor-pointer absolute bottom-[434.5px] left-[846.8px]' onMouseLeave={() => handleLeavePortUAE("none")} onMouseEnter={() => handleActivePortUAE("Dubai Dry Docks")}>
                <PortIcon />
              </button>
              <button className='h-[26px] w-[25px] hover:bg-[#2E368E]/40 rounded-full cursor-pointer absolute bottom-[460px] left-[869.6px]' onMouseLeave={() => handleLeavePortUAE("none")} onMouseEnter={() => handleActivePortUAE("Hamriyah Port (Sharjah)")}>
                <PortIcon />
              </button>
              <button className='h-[26px] w-[25px] hover:bg-[#2E368E]/40 rounded-full cursor-pointer absolute bottom-[480.7px] left-[893px]' onMouseLeave={() => handleLeavePortUAE("none")} onMouseEnter={() => handleActivePortUAE("Port Khalid (Sharjah)")}>
                <PortIcon />
              </button>
              <button className='h-[26px] w-[25px] hover:bg-[#2E368E]/40 rounded-full cursor-pointer absolute bottom-[512.7px] left-[892px]' onMouseLeave={() => handleLeavePortUAE("none")} onMouseEnter={() => handleActivePortUAE("Ajman Port")}>
                <PortIcon />
              </button>
              
              <button className='h-[26px] w-[25px] hover:bg-[#2E368E]/40 rounded-full cursor-pointer absolute bottom-[528.3px] left-[947px]' onMouseLeave={() => handleLeavePortUAE("none")} onMouseEnter={() => handleActivePortUAE("Umm Al Quwain Port")}>
                <PortIcon />
              </button>
              <button className='h-[26px] w-[25px] hover:bg-[#2E368E]/40 rounded-full cursor-pointer absolute bottom-[557px] left-[968.6px]' onMouseLeave={() => handleLeavePortUAE("none")} onMouseEnter={() => handleActivePortUAE("MINA SAQR (Ras Al Khaimah Port)")}>
                <PortIcon />
              </button>
              <button className='h-[26px] w-[26px] hover:bg-[#2E368E]/40 rounded-full cursor-pointer absolute top-[211px] left-[1016.7px]' onMouseLeave={() => handleLeavePortUAE("none")} onMouseEnter={() => handleActivePortUAE("Khor Fakkan Port")}>
                <PortIcon />
              </button>
              <button className='h-[26px] w-[26px] hover:bg-[#2E368E]/40 rounded-full cursor-pointer absolute top-[282px] left-[1009.7px]' onMouseLeave={() => handleLeavePortUAE("none")} onMouseEnter={() => handleActivePortUAE("Fujairah Port")}>
                <PortIcon />
              </button>

            </div>
          </div>
          <div className="mt-[26px] lg:mt-[45px]">
            <PortLabelGroup labels={ports?.UAE_Ports} type="uae" activePort={activePort} setActivePort={setActivePort} />
          </div>
        </div>

        <div className='px-2 lg:px-[30px] pt-[28px] lg:pt-[38px] pb-[35px] lg:pb-[45px] blue_gradient mt-[32px] lg:mt-[45px]'>
          <h2 className='mb-[26px] text-center lg:text-left font_calibri text-[25px] leading-[25px] sm:text-[60px] sm:leading-[60px] text-theme-main font-bold'>Ports in OMAN</h2>
          <div className="container mx-auto max-w-[1280px] map overflow-x-auto">
            <div className="w-[1280px] relative">
              <Image
                className='relative w-[1280px] '
                style={{ width: '100%', objectFit: 'cover', objectPosition: 'center' }}
                src={'/images/ports/oman_port.png'} alt='uae_ports'
                width={1600}
                height={700}
              />
              {handlePortOman(activePort?.oman, setActivePort)}
              <button
                className='h-[26px] w-[25px] hover:bg-[#2E368E]/40 rounded-full cursor-pointer absolute top-[43.5px] left-[574.5px]' onMouseLeave={() => handleLeavePortOman("none")} onMouseEnter={() => handleActivePortOman("Khasab Port (Musandam)")}>
                <PortIcon />
              </button>
              <button className='h-[26px] w-[25px] hover:bg-[#2E368E]/40 rounded-full cursor-pointer absolute top-[211.5px] left-[586.5px]' onMouseLeave={() => handleLeavePortOman("none")} onMouseEnter={() => handleActivePortOman("Sohar Port")}>
                <PortIcon />
              </button>
              <button className='h-[26px] w-[25px] hover:bg-[#2E368E]/40 rounded-full cursor-pointer absolute top-[280.5px] left-[762.5px]' onMouseLeave={() => handleLeavePortOman("none")} onMouseEnter={() => handleActivePortOman("Sultan Qaboos Port (Muscat)")} >
                <PortIcon />
              </button>
             
              <button className='h-[26px] w-[25px] hover:bg-[#2E368E]/40 rounded-full cursor-pointer absolute top-[619.1px] left-[706.5px]' onMouseLeave={() => handleLeavePortOman("none")} onMouseEnter={() => handleActivePortOman("Duqm Port")} >
                <PortIcon />
              </button>
              <button className='h-[26px] w-[25px] hover:bg-[#2E368E]/40 rounded-full cursor-pointer absolute bottom-[90.5px] left-[507.2px]' onMouseLeave={() => handleLeavePortOman("none")} onMouseEnter={() => handleActivePortOman("Salalah Port")}
              >
                <PortIcon />
              </button>
            </div>
          </div>
          <div className=" mt-[26px] lg:mt-[45px]">
            <PortLabelGroup labels={ports?.Oman} type="oman" activePort={activePort} setActivePort={setActivePort} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default PortsTemplates

function handlePortOman(portName) {
  switch (portName) {
    case "Khasab Port (Musandam)":
      return <>
        <div className='absolute top-[95px] left-[455px] flex flex-col-reverse rounded-[15px] z-10 bg-[#D50004]'>
          <Image src="/ports/Khasab-Port.jpg" alt="" className='h-[132px] rounded-[15px] w-[264px] object-cover' width={264} height={132} />
          <h6 className='font-bold font_calibri px-4 pt-1 pb-1.5 text-white'>{portName}</h6>
          <div className='bg-[#D50004] h-7 w-7 absolute -rotate-45 -top-3 left-1/2 z-[-1] -translate-x-1/2' />
        </div>
      </>
    case "Sohar Port":
      return <div className='absolute top-[22px] left-[467px] rounded-[15px] z-10 bg-[#D50004]'>
        <Image src="/ports/Sohar-Port.jpg" alt="" className='h-[132px] rounded-[15px] w-[264px] object-cover' width={264} height={132} />
        <h6 className='font-bold font_calibri px-4 pt-1 pb-1.5 text-white'>{portName}</h6>
        <div className='bg-[#D50004] h-7 w-7 absolute -rotate-45 -bottom-3 left-1/2 z-[-1] -translate-x-1/2' />
      </div>
    case "Sultan Qaboos Port (Muscat)":
      return <div className='absolute top-[90px] left-[642px] rounded-[15px] z-10 bg-[#D50004]'>
        <Image src="/ports/Sultan-Qaboos-Port.jpg" alt="" className='h-[132px] rounded-[15px] w-[264px] object-cover' width={264} height={132} />
        <h6 className='font-bold font_calibri px-4 pt-1 pb-1.5 text-white'>{portName}</h6>
        <div className='bg-[#D50004] h-7 w-7 absolute -rotate-45 -bottom-3 left-1/2 z-[-1] -translate-x-1/2' />
      </div>
    case "Duqm Port":
      return <div className='absolute top-[430px] left-[587px] rounded-[15px] z-10 bg-[#D50004]'>
        <Image src="/ports/Duqm-Port.jpg" alt="" className='h-[132px] rounded-[15px] w-[264px] object-cover' width={264} height={132} />
        <h6 className='font-bold font_calibri px-4 pt-1 pb-1.5 text-white'>{portName}</h6>
        <div className='bg-[#D50004] h-7 w-7 absolute -rotate-45 -bottom-3 left-1/2 z-[-1] -translate-x-1/2' />
      </div>
    case "Salalah Port":
      return <div className='absolute top-[655px] left-[387px] rounded-[15px] z-10 bg-[#D50004]'>
        <Image src="/ports/Salalah-Port.jpg" alt="" className='h-[132px] rounded-[15px] w-[264px] object-cover' width={264} height={132} />
        <h6 className='font-bold font_calibri px-4 pt-1 pb-1.5 text-white'>{portName}</h6>
        <div className='bg-[#D50004] h-7 w-7 absolute -rotate-45 -bottom-3 left-1/2 z-[-1] -translate-x-1/2' />
      </div>
    default:
      console.log("Unknown port selected.");
      break;
  }
}

function handlePortSelection(portName) {
  switch (portName) {
    case "Musaffah Port (Abu Dhabi)":
      return <div className='absolute top-[212px] left-[601px] rounded-[15px] z-10 bg-[#D50004]'>
        <Image src="/ports/MUSAFFAH-PORT.jpg" alt="" className='h-[132px] rounded-[15px] w-[264px] object-cover' width={264} height={132} />
        <h6 className='font-bold font_calibri px-4 pt-1 pb-1.5 text-white'>{portName}</h6>
        <div className='bg-[#D50004] h-7 w-7 absolute -rotate-45 -bottom-3 left-1/2 z-[-1] -translate-x-1/2' />
      </div>
    case "Mina Khalifa (Abu Dhabi)":
      return <div className='absolute top-[136px] left-[650px] rounded-[15px] z-10 bg-[#D50004]'>
        <Image src="/ports/Mina-Khalifa-port.jpg" alt="" className='h-[132px] rounded-[15px] w-[264px] object-cover' width={264} height={132} />
        <h6 className='font-bold font_calibri px-4 pt-1 pb-1.5 text-white'>{portName}</h6>
        <div className='bg-[#D50004] h-7 w-7 absolute -rotate-45 -bottom-3 left-1/2 z-[-1] -translate-x-1/2' />
      </div>
    case "Mina Zayed (Abu Dhabi)":
      return <div className='absolute top-[172px] left-[632px] rounded-[15px] z-10 bg-[#D50004]'>
        <Image src="/ports/Mina-Zayed-Port.jpeg.jpg" alt="" className='h-[132px] rounded-[15px] w-[264px] object-cover' width={264} height={132} />
        <h6 className='font-bold font_calibri px-4 pt-1 pb-1.5 text-white'>{portName}</h6>
        <div className='bg-[#D50004] h-7 w-7 absolute -rotate-45 -bottom-3 left-1/2 z-[-1] -translate-x-1/2' />
      </div>
    case "Jebel Ali Ports (Dubai)":
      return <div className='absolute top-[82px] left-[696px] rounded-[15px] z-10 bg-[#D50004]'>
        <Image src="/ports/Jebel-Ali.jpg" alt="" className='h-[132px] rounded-[15px] w-[264px] object-cover' width={264} height={132} />
        <h6 className='font-bold font_calibri px-4 pt-1 pb-1.5 text-white'>{portName}</h6>
        <div className='bg-[#D50004] h-7 w-7 absolute -rotate-45 -bottom-3 left-1/2 z-[-1] -translate-x-1/2' />
      </div>
    case "Dubai Dry Docks":
      return <div className='absolute top-[74px] left-[722px] rounded-[15px] z-10 bg-[#D50004]'>
        <Image src="/ports/Dubai-Dry-Docks.jpeg.jpg" alt="" className='h-[132px] rounded-[15px] w-[264px] object-cover' width={264} height={132} />
        <h6 className='font-bold font_calibri px-4 pt-1 pb-1.5 text-white'>{portName}</h6>
        <div className='bg-[#D50004] h-7 w-7 absolute -rotate-45 -bottom-3 left-1/2 z-[-1] -translate-x-1/2' />
      </div>
    case "Hamriyah Port (Sharjah)":
      return <div className='absolute top-[47px] left-[749px] rounded-[15px] z-10 bg-[#D50004]'>
        <Image src="/ports/Hamariya-Port.jpg" alt="" className='h-[132px] rounded-[15px] w-[264px] object-cover' width={264} height={132} />
        <h6 className='font-bold font_calibri px-4 pt-1 pb-1.5 text-white'>{portName}</h6>
        <div className='bg-[#D50004] h-7 w-7 absolute -rotate-45 -bottom-3 left-1/2 z-[-1] -translate-x-1/2' />
      </div>
    case "Port Khalid (Sharjah)":
      return <div className='absolute top-[25px] left-[773px] rounded-[15px] z-10 bg-[#D50004]'>
        <Image src="/ports/Port-Khalid.jpg" alt="" className='h-[132px] rounded-[15px] w-[264px] object-cover' width={264} height={132} />
        <h6 className='font-bold font_calibri px-4 pt-1 pb-1.5 text-white'>{portName}</h6>
        <div className='bg-[#D50004] h-7 w-7 absolute -rotate-45 -bottom-3 left-1/2 z-[-1] -translate-x-1/2' />
      </div>
    case "Ajman Port":
      return <div className='absolute top-[230px] left-[773px] rounded-[15px] z-10 bg-[#D50004]'>
        <h6 className='font-bold font_calibri px-4 pt-1 pb-1.5 text-white'>{portName}</h6>
        <Image src="/ports/Ajman-Port.jpg" alt="" className='h-[132px] rounded-[15px] w-[264px] object-cover' width={264} height={132} />
        <div className='bg-[#D50004] h-7 w-7 absolute -rotate-45 -top-3 left-1/2 z-[-1] -translate-x-1/2' />
      </div>
    case "Umm Al Quwain Port":
      return <div className='absolute top-[216px] left-[830px] rounded-[15px] z-10 bg-[#D50004]'>
        <h6 className='font-bold font_calibri px-4 pt-1 pb-1.5 text-white'>{portName}</h6>
        <Image src="/ports/Umm-Al-Quwain.jpg" alt="" className='h-[132px] rounded-[15px] w-[264px] object-cover' width={264} height={132} />
        <div className='bg-[#D50004] h-7 w-7 absolute -rotate-45 -top-3 left-1/2 z-[-1] -translate-x-1/2' />
      </div>
    case "MINA SAQR (Ras Al Khaimah Port)":
      return <div className='absolute top-[188px] left-[849px] rounded-[15px] z-10 bg-[#D50004]'>
        <h6 className='font-bold font_calibri px-4 pt-1 pb-1.5 text-white'>{portName}</h6>
        <Image src="/ports/Mina-Saqr-Port.jpg" alt="" className='h-[132px] rounded-[15px] w-[264px] object-cover' width={264} height={132} />
        <div className='bg-[#D50004] h-7 w-7 absolute -rotate-45 -top-3 left-1/2 z-[-1] -translate-x-1/2' />
      </div>
    case "Khor Fakkan Port":
      return <div className='absolute top-[258px] right-[119px] rounded-[15px] z-10 bg-[#D50004]'>
        <h6 className='font-bold font_calibri px-4 pt-1 pb-1.5 text-white'>{portName}</h6>
        <Image src="/ports/khor-fakkan-port.jpg" alt="" className='h-[132px] rounded-[15px] w-[264px] object-cover' width={264} height={132} />
        <div className='bg-[#D50004] h-7 w-7 absolute -rotate-45 -top-3 left-1/2 z-[-1] -translate-x-1/2' />
      </div>

    case "Fujairah Port":
      return <div className='absolute top-[90px] right-[125px] rounded-[15px] z-10 bg-[#D50004]'>
        <Image src="/ports/Fujairah-Port.jpeg.jpg" alt="" className='h-[132px] rounded-[15px] w-[264px] object-cover' width={264} height={132} />
        <h6 className='font-bold font_calibri px-4 pt-1 pb-1.5 text-white'>{portName}</h6>
        <div className='bg-[#D50004] h-7 w-7 absolute -rotate-45 -bottom-3 left-1/2 z-[-1] -translate-x-1/2' />
      </div>
    default:
      console.log("Unknown port selected.");
      break;
  }
}