"use client";

import Image from "next/image";
import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import { gsap } from "gsap";
import { getFullImageURL } from "@/utils";
import Link from "next/link";

const settings = {
  dots: false,
  infinite: true,
  arrows: false,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  cssEase: 'ease-in-out'
};

const OurBrands = ({ data, content }) => {
  const slider = useRef(null);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    // Animate heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    // Animate content paragraph
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );

    // Animate slider icons
    const sliderItems = sliderRef.current.querySelectorAll(".slider-icon");
    sliderItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="my-[38px] md:my-[54px]">
      <div className="container mx-auto ">
        <div className="flex px-3 xl:px-0 justify-center md:justify-between items-center">
          <h3
            ref={headingRef}
            className="text-theme-main text-[25px] uppercase font-bold text-center md:text-left md:justify-start md:items-start md:text-[30px] font_calibri flex justify-center flex-col items-center "
          >
            Our Brands
            <div className="w-10 h-[1px] bg-theme-main" />
          </h3>
          <div className="flex items-center gap-7">
            <Link href="/about" className="font_calibri hidden md:block text-nowrap font-light text-white leading-[139%] py-[10px] px-[28px] bg-[#2e368fbf] hover:bg-theme-main rounded-[10px]">View All Brands</Link>
            <div className="items-center gap-2 hidden md:flex">
              <Image
                src="/svg/arrow_circle_left.svg"
                alt=""
                className="cursor-pointer"
                width={40}
                height={40}
                onClick={() => slider?.current?.slickPrev()}
              />
              <Image
                src="/svg/arrow_circle_right.svg"
                alt=""
                className="cursor-pointer"
                width={40}
                height={40}
                onClick={() => slider?.current?.slickNext()}
              />
            </div>
          </div>
        </div>
        <p ref={contentRef} className="font-light px-[18px] mt-3 mb-[30px] xl:px-0 lg:mb-[37px] text-center md:text-left text-xs md:text-base font_calibri">
          {content}
        </p>
        <div className="px-[18px] xl:px-0">
          <Slider ref={slider} {...settings}>
            {data?.map((icon, id) => (
              <div
                ref={sliderRef}
                className="!grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-[10px] lg:gap-[16px] lg:grid-cols-7"
                key={id}
              >
                {icon?.Icon?.data?.map((item, idx) => (
                  <div key={idx} className="flex justify-center">
                    <Image
                      style={{ objectFit: 'contain' }}
                      className="slider-icon p-1 w-[165px] h-[94px]"
                      src={getFullImageURL(item?.attributes?.url)}
                      alt="image"
                      width={165}
                      height={94}
                    />
                  </div>
                ))}
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-5 items-center">
        <div className="items-center gap-3 md:hidden flex justify-center">
          <Image
            src="/svg/arrow_circle_left.svg"
            alt=""
            className="cursor-pointer"
            width={49}
            height={49}
            onClick={() => slider?.current?.slickPrev()}
          />
          <Image
            src="/svg/arrow_circle_right.svg"
            alt=""
            className="cursor-pointer"
            width={49}
            height={49}
            onClick={() => slider?.current?.slickNext()}
          />
        </div>
        <Link href="/about" className="font_calibri md:hidden  text-nowrap bg-[#2e368fbf] hover:bg-theme-main font-light text-white leading-[139%] py-[10px] px-[28px] rounded-[10px]">View All Brands</Link>
      </div>
    </section>
  );
};

export default OurBrands;
