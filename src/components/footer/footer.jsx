import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getFooter } from "@/services";
import MobileFooter from './mobile-footer'

const Footer = async () => {
  const data = await getFooter()
  const { About, Logo, Adamallys_Group, AdamallysGroup2, AdamallysLLC, AdamallysMarineShipChandlingServices, Buttons, Copyright_Text } = data;

  return (
    <footer className="bg-white relative z-[100]">
      <section className="hidden sm:block footer_gradient pt-[63px] relative px-3 xl:px-0">
        <section className="grid container mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-10 lg:gap-[88px]">
          <div>
            <Link href="/" className="">
              <Image
                src={Logo?.data?.attributes?.url}
                alt="logo"
                width={126}
                height={74}
                className="w-[126px]"
              />
            </Link>
            <p className="font_calibri font-light mt-4 text-theme-main">
              {About}
            </p>
          </div>
          <div>
            <h6 className="font_calibri uppercase text-lg font-bold text-theme-main">Adamallys Group</h6>
            <ul className="mt-[13px]">
              {
                Adamallys_Group?.map((item, idx) => (
                  <li key={idx} className="text-[#3E3E3E] font_calibri mb-2 font-light">
                    <Link href={item.Link}>
                      {item.Label}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
          <div>
            <h6 className="font_calibri uppercase text-lg font-bold text-theme-main">Adamallys Group</h6>
            <ul className="mt-[13px]">
              <li className="text-[#3E3E3E] font_calibri mb-2 font-light">
                Address:<br />
                {AdamallysGroup2?.address}
              </li>
              <li className="text-[#3E3E3E] font_calibri mb-2 font-light">
                Contact Details:<br />
                <span>Tel: <a href={`tel:${AdamallysLLC?.Telephone}`}>{AdamallysLLC?.Telephone}</a></span><br />
                <span>Fax: {AdamallysGroup2?.Fax}</span>
              </li>
              <li className="text-[#3E3E3E] font_calibri mb-2 font-light">
                Email:<br />
                <a href={`mailto:${AdamallysGroup2?.Email}`}>
                  {AdamallysGroup2?.Email}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font_calibri uppercase text-lg font-bold text-theme-main">Adamallys LLC</h6>
            <ul className="mt-[13px]">
              <li className="text-[#3E3E3E] font_calibri mb-2 font-light">
                Location: <br />
                <span>{AdamallysLLC?.Location}</span>
              </li>
              <li className="text-[#3E3E3E] font_calibri mb-2 font-light">
                Contact Details:<br />
                <span>Tel: <a href={`tel:${AdamallysLLC?.Telephone}`}>{AdamallysLLC?.Telephone}</a></span><br />
                <span>Fax: {AdamallysLLC?.Fax}</span>
              </li>
              <li className="text-[#3E3E3E] font_calibri mb-2 font-light">
                Email:<br />
                <a href={`mailto:${AdamallysLLC?.Email}`}>
                  {AdamallysLLC?.Email}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font_calibri uppercase text-lg font-bold text-theme-main">Adamallys Marine
              Ship chandling services</h6>
            <ul className="mt-[13px]">
              <li className="text-[#3E3E3E] font_calibri mb-2 font-light">
                Location: <br />
                <span>{AdamallysMarineShipChandlingServices?.Location}</span>
              </li>
              <li className="text-[#3E3E3E] font_calibri mb-2 font-light">
                Contact Details:<br />
                <span>Tel:<a href={`tel:${AdamallysMarineShipChandlingServices?.Telephone}`}>{AdamallysMarineShipChandlingServices?.Telephone}</a></span><br />
                <span>Fax: {AdamallysMarineShipChandlingServices?.Fax}</span>
              </li>
              <li className="text-[#3E3E3E] font_calibri mb-2 font-light">
                Email:<br />
                <a href={`mailto:${AdamallysMarineShipChandlingServices?.Email}`}>
                  {AdamallysMarineShipChandlingServices?.Email}
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="flex justify-center container mx-auto flex-wrap mb-[66px] mt-[23px] items-center gap-2 sm:gap-4 font_calibri text-theme-main">
          {Buttons?.map((item, idx) => (
            <a target="_blank" href={item?.Link || "#"} key={idx}><button className="py-[6px] px-4 sm:px-[30px] border border-theme-main leading-[32px] rounded-full">{item?.Label}</button></a>
          ))}
        </section>
        <section className=" flex flex-col sm:flex-row gap-5 justify-between items-center container mx-auto pb-[36px]">
          <ul className="flex items-center gap-5">
            <li>
              <a target="_blank" href={data?.Socials[0]?.link || "#"}>
                <Image src={data?.Socials[0]?.Icon?.data?.attributes?.url} alt="" width={8} height={14} />
              </a>
            </li>
            <li>
              <a target="_blank" href={data?.Socials[1]?.link || "#"}>
                <Image src={data?.Socials[1]?.Icon?.data?.attributes?.url} alt="" width={13.6} height={15.5} />
              </a>
            </li>
            <li>
              <a target="_blank" href={data?.Socials[2]?.link || "#"}>
                <Image src={data?.Socials[2]?.Icon?.data?.attributes?.url} alt="" width={13.5} height={1.5} />
              </a>
            </li>
          </ul>
          <p className="font_calibri text-theme-main text-sm font-light">{Copyright_Text}</p>
        </section>
      </section>
      <MobileFooter />
    </footer>
  );
};

export default Footer;
