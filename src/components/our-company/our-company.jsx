"use client"
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export const renderRichText = (blocks) => {
  return blocks?.map((block, index) => {
    const { type, level, children } = block;
    switch (type) {
      case "heading":
        const HeadingTag = `h${level}`;
        if (HeadingTag === "h2") {
          return (
            <HeadingTag key={index} className="font_franklin">
              {children?.map((child) => child.text)}
            </HeadingTag>
          );
        } else {
          return (
            <h3 key={index} className="!font-xl !text-[#3E3E3E]">
              {children?.map((child) => child.text)}
            </h3>
          );
        }
      case "paragraph":
        return (
          <p key={index} className="font-light !mt-4 !text-[#3E3E3E]">
            {children.map((child) => child.text)}
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

  const [expanded, setExpanded] = useState(false);

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
      <div className="container py-20 mx-auto px-3 flex md:flex-row gap-6 flex-col">
        <div className="md:w-[25%]">
          <h3
            ref={headingRef}
            className="text-theme-main font-bold font_calibri uppercase text-[30px]"
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

            <button
              className="flex items-center font_calibri gap-10 text-theme-main mt-6" onClick={toggleExpand}
            >
              {expanded ? 'Read Less' : 'Read More'}
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
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCompany;
