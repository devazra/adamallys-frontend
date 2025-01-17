'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import MapComponent from '@/components/MapComponent';
import { toast } from 'react-toastify';
import axios from 'axios';

const defaultValues = {
  name: '',
  companyName: '',
  phoneNumber: '',
  email: '',
  message: ''
}

const ContactTemplate = (props) => {
  const { AddressOne, AddressTwo, Email, Fax, MobileNumber, Buttons } = props.data;
  const [formData, setFormData] = useState(defaultValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handlePhoneChange = (e) => {
    let inputValue = e.target.value;
    inputValue = inputValue.replace(/[^0-9]/g, '');
    setFormData(prevData => ({
      ...prevData,
      phoneNumber: inputValue
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/contact-mail`, formData);
      if (response?.status === 200) {
        toast.success('Email sended successfully!')
        setFormData({ ...defaultValues })
      } else {
        toast.error("Something went wrong!")
      }
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error)
      toast.error("Something went wrong!")
    }
  };

  return (
    <main
      className='mt-[4rem] md:mt-[8rem]'
      style={{ overflowX: 'hidden' }}
    >
      <div className="flex flex-col  container mx-auto z-[1] relative">
        <div className='flex flex-col lg:flex-row'>
          <div className="basis-full md:min-w-[471px] md:basis-[40%] px-[18px] md:px-[30px] pt-[51px] pb-[42px] sm:px-[62px] sm:pt-[68px] sm:pb-[76px]  bg-theme-main">
            <h1 className='font_calibri text-white font-bold text-[30px] md:text-[60px] leading-[30px] md:leading-[62px] mb-6'>Contact</h1>
            <div className="flex gap-[11px] text-white">
              <div className='mt-1.5 min-w-6 h-6'>
                <Image className='min-w-6 h-6' src={'/svg/location_on.svg'} alt='location_on' width={23} height={23} />
              </div>
              <div>
                <p className='text-[14px] font_calibri md:text-lg leading-[20px] font-light md:font-normal md:leading-[26px]'>
                  {AddressOne}
                </p>
                <p className='text-[14px] font_calibri md:text-lg leading-[20px] font-light md:font-normal md:leading-[26px] mt-[18px]'>
                  {AddressTwo}
                </p>
              </div>
            </div>
            <div className="mt-[45px] inline-flex flex-col items-start gap-[9px]">
              <div className="w-auto border border-white h-[41px] md:h-[46px] pr-[18px] inline-flex items-center gap-[15px] rounded-[30px]">
                <div className='w-[44px] h-[41px] md:w-[50px] md:md:h-[46px] flex items-center justify-center bg-white rounded-[46%]'>
                  <Image src={'/svg/call-icon.svg'} alt='location_on' width={23} height={23} />
                </div>
                <a href={`tel:${MobileNumber}`} className='text-[14px] font_calibri leading-[20px] md:text-lg md:leading-[26px] font-light md:font-normal text-white'>{MobileNumber}</a>
              </div>
              <div className="w-auto border border-white h-[41px] md:h-[46px] pr-[18px] inline-flex items-center gap-[15px] rounded-[30px]">
                <div className='w-[44px] h-[41px] md:w-[50px] md:md:h-[46px] flex items-center justify-center bg-white rounded-[46%]'>
                  <Image src={'/svg/print.svg'} alt='location_on' width={23} height={23} />
                </div>
                <p className='text-[14px] font_calibri md:text-lg leading-[20px] font-light md:font-normal md:leading-[26px] text-white'>{Fax}</p>
              </div>
              <div className="w-auto border border-white h-[41px] md:h-[46px] pr-[18px] inline-flex items-center gap-[15px] rounded-[30px]">
                <div className='w-[44px] h-[41px] md:w-[50px] md:md:h-[46px] flex items-center justify-center bg-white rounded-[46%]'>
                  <Image src={'/svg/mail-icon.svg'} alt='location_on' width={23} height={23} />
                </div>
                <a href={`mailto:${Email}`} className='text-[14px] font_calibri leading-[20px] md:text-lg md:leading-[26px] font-light md:font-normal text-white'>{Email}</a>
              </div>
            </div>
          </div>
          <div className="basis-full bg-[#F5F6F8] flex items-center justify-center">
            <form onSubmit={handleSubmit} className='w-full px-[18px] lg:px-[30px] py-[34px] sm:px-[55px] sm:py-[76px]'>
              <div className="flex flex-col gap-4">
                <p className='text-theme-main font-bold text-[25px] text-center md:text-left leading-[28px] md:text-[40px] md:leading-[44px]'>Have a Question?</p>
                <div className='flex flex-col sm:flex-row gap:3 md:gap-6'>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder="Your Name"
                    className="w-full h-[55px] py-1 bg-transparent border-b border-theme-main focus:outline-none text-theme-main focus:text-theme-main"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    placeholder="Company Name"
                    className="w-full h-[55px] py-1 bg-transparent border-b border-theme-main focus:outline-none text-theme-main focus:text-theme-main"
                    onChange={handleChange}
                  />
                </div>
                <div className='flex flex-col sm:flex-row gap:3 md:gap-6'>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    placeholder="Phone Number"
                    className="w-full h-[55px] py-1 bg-transparent border-b border-theme-main focus:outline-none text-theme-main focus:text-theme-main"
                    onChange={handlePhoneChange}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Email"
                    className="w-full h-[55px] py-1 bg-transparent border-b border-theme-main focus:outline-none text-theme-main focus:text-theme-main"
                    onChange={handleChange}
                  />
                </div>
                <div className='flex flex-col sm:flex-row gap:3 md:gap-6'>
                  <textarea
                    type="text"
                    name="message"
                    rows={4}
                    value={formData.message}
                    placeholder="Message"
                    className="w-full py-1 bg-transparent border-b border-theme-main focus:outline-none text-theme-main focus:text-theme-main"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex justify-center items-center gap-[8px] mt-[23px]">
                <button
                  type="submit"
                  className="w-[96px] md:w-[157px] font_calibri flex md:font-bold md:text-lg items-center justify-center gap-[12px] h-[55px] py-1 bg-[text-theme-main] text-white bg-theme-main"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className='bg-[#4A51A2] px-2 py-8 flex gap-2 flex-wrap justify-center lg:gap-4'>
          {Buttons?.Buttons?.map((item, idx) => (
            <a target="_blank" href={item?.Link || "#"} key={idx}>
              <button className="whitespace-nowrap py-[6px] font_calibri font-semibold px-4 sm:px-[30px] border border[#FFFFFF] text-[#FFFFFF] leading-[32px] rounded-full">
                {item?.Label}
              </button>
            </a>
          ))}
        </div>
      </div>
      <div className="mt-[-70px] z-[0] relative">
        <MapComponent />
      </div>
    </main>
  )
}

export default ContactTemplate