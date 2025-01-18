"use client"
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import useIsMobile from "@/hooks/useIsMobile"
import Link from "next/link";

export const renderRichText = (blocks) => {
  return blocks?.map((block, index) => {
    const { type, level, children } = block;
    switch (type) {
      case "heading":
        const HeadingTag = `h${level}`;
        if (HeadingTag === "h2") {
          return (
            <HeadingTag key={index} className="font_franklin">
              {children?.map((child, childIndex) =>
                child.type === "text" ? child.text : null
              )}
            </HeadingTag>
          );
        } else {
          return (
            <h3 key={index} className="!text-xl !text-[#3E3E3E]">
              {children?.map((child, childIndex) =>
                child.type === "text" ? child.text : null
              )}
            </h3>
          );
        }
      case "paragraph":
        return (
          <p key={index} className="!text-[12px] md:!text-[16px] font-light !mt-4 !text-[#3E3E3E]">
            {children.map((child, childIndex) => {
              if (child.type === "text") {
                return child.text;
              } else if (child.type === "link") {
                return (
                  <a key={childIndex} href={child.url} className="text-blue-500 underline">
                    {child.children.map((linkChild) => linkChild.text)}
                  </a>
                );
              }
              return null;
            })}
          </p>
        );

      default:
        return null;
    }
  });
};


const OurCompany = ({ data }) => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const underlineRef = useRef(null);
  const contentRef = useRef(null);
  const buttonRef = useRef(null);
  const isMobile = useIsMobile();

  const [expanded, setExpanded] = useState(isMobile ? true : false);

  const descriptionRefs = useRef();

  const toggleExpand = () => {
    setExpanded(prev => !prev);
  };

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
      },
    });

    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.6 }
    )
      .fromTo(
        underlineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.4 },
        "-=0.4"
      )
      .fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 }
      )
      .fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6 },
        "-=0.6"
      );
  }, []);

  return (
    <section ref={sectionRef} className="">
      <div className="container mt-[35px] md:mt-0 md:py-[35px] md:py-20 mx-auto flex md:flex-row md:gap-6 flex-col px-[18px] xl:px-0">
        <div className="md:w-[25%] mb-[22px]">
          <h3
            ref={headingRef}
            className="text-theme-main uppercase text-[25px] font-bold text-center md:text-left md:justify-start md:items-start md:text-[30px] font_calibri flex justify-center flex-col items-center"
          >
            Our Company
            <div
              ref={underlineRef}
              className="w-10 mt-2 h-[1px] bg-theme-main origin-left"
            />
          </h3>
        </div>
        <div className="md:w-[75%]">
          <div
            ref={contentRef}
            className="oc_content font_calibri"
          >
            <div
              ref={descriptionRefs}
              className={`inline-block font-light text-lg leading-[26px] ${expanded ? '' : 'truncate'}`}
              style={{
                whiteSpace: 'wrap',
                maxHeight: expanded ? 'none' : '430px',
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitLineClamp: expanded ? 'none' : 15,
                WebkitBoxOrient: 'vertical',
              }}
            >
              {renderRichText(data)}
            </div>

            <div className="flex flex-col md:flex-row gap-5 justify-between items-center mt-6">
              <button
                className="flex items-center font_calibri justify-center md:justify-start w-full gap-2 text-xs md:text-base md:gap-10 text-theme-main " onClick={toggleExpand}
              >
                {expanded ? 'Read Less' : 'Read More'}
                {expanded ?
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <mask id="mask0_42_1450" maskUnits="userSpaceOnUse" x="0" y="0" width="17" height="17">
                      <rect width="17" height="17" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_42_1450)">
                      <path
                        d="M2.52911 11.5329L3.10237 10.9597L8.09316 5.39569L13.6572 10.9597L14.2305 10.3864L8.09316 4.2305L2.52911 10.3864L2.52911 11.5329Z"
                        fill="#2E368F"
                      />
                    </g>
                  </svg>
                  :
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <mask
                      id="mask0_42_1450"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="17"
                      height="17"
                    >
                      <rect width="16.1863" height="16.1863" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_42_1450)">
                      <path
                        d="M5.39553 14.2305L4.82227 13.6572L10.3863 8.09316L4.82227 2.52911L5.39553 1.95584L11.5329 8.09316L5.39553 14.2305Z"
                        fill="#2E368F"
                      />
                    </g>
                  </svg>
                }
              </button>
              <Link href="/about" className="font_calibri text-nowrap bg-[#2e368fbf] hover:bg-theme-main font-light text-white leading-[139%] py-[10px] px-[28px] rounded-[10px]">About Us</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCompany;
