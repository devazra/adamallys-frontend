"use client"
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import styles from './style.module.css';
import { getFullImageURL } from "@/utils";

const Services = ({ data }) => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const gridItemsRef = useRef([]);
  const titleRef = useRef(null);

  useEffect(() => {
    // Animate heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
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

    // Animate subheading
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    // Animate grid items
    gridItemsRef.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="">
      <div className="container pb-[38px] lg:pb-20 pt-5 px-[18px] xl:px-0 mx-auto gap-3 flex md:flex-row flex-col">
        <div className="md:w-[25%]">
          <h3
            ref={headingRef}
            className="text-theme-main text-[25px] uppercase font-bold text-center md:text-left md:justify-start md:items-start md:text-[30px] font_calibri flex justify-center flex-col items-center"
          >
            What we do
            <div className="w-10 mt-2 h-[1px] bg-theme-main" />
          </h3>
        </div>
        <div className="md:w-[75%] mt-5 md:mt-0">
          <h2
            ref={titleRef}
            className="text-[40px] mb-10 -mt-[6px] font_franklin hidden md:block"
          >
            Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-5 gap-[14px]">
            {data?.map((item, idx) => {
              const fullWidthItems = [2, 3, 5, 6, 7];
              const isFullWidth = fullWidthItems.includes(idx + 1);
              return (
                <div
                  key={idx}
                  ref={(el) => (gridItemsRef.current[idx] = el)}
                  className={`${styles.service_image_container} relative ${isFullWidth
                    ? "w-full object-cover sm:col-span-2 lg:col-span-3"
                    : "h-[378px] object-cover sm:col-span-2 lg:col-span-2"
                    }`}
                >
                  <Link
                    href={item?.link || "#"}
                    className={`text-white text-[25px] md:text-[30px] font-bold font_calibri ${idx === 3 && "!text-black"
                      }`}
                  >
                    <div>
                      <Image
                        width={573}
                        height={378}
                        alt={item?.title}
                        src={getFullImageURL(item?.Image?.data?.attributes?.url)}
                        className={`${styles.service_image} h-[378px] object-cover w-full`}
                      />
                    </div>
                  </Link>
                  <div className="absolute px-[18px] md:px-9 gap-3 flex justify-between w-full items-end bottom-9">
                    <Link
                      href={item?.link || "#"}
                      className={`text-white text-[25px] md:text-[30px] font-bold font_calibri ${idx === 3 && "!text-black"
                        }`}
                    >
                      {item?.title}
                    </Link>
                    <div className="block h-[43px] min-w-[43px]">
                      <Link className="" href={item?.link || '#'}>
                        <Image
                          src="/svg/service-arrow.svg"
                          alt="icon"
                          width={43}
                          height={43}
                          className={styles.service_icon}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
