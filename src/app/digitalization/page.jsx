import { getDigitalizationAndTechnologyAtAdamallys } from "@/services";
import LeadingPageBanner from "@/components/digitalization/Leadingpage";
import TwoColumnContent from "@/components/two-column-content/two-column-content";

export default async function Home() {
  const data = await getDigitalizationAndTechnologyAtAdamallys()

  return (
    <>
      <div className="mb-[5rem] md:mb-[120px]" />
      <h1 className='px-[18px] font_calibri capitalize text-[25px] md:text-[60px] leading-[25px] md:leading-[60px] text-center font-bold text-theme-main md:mb-[46px] lg:pt-4'>
        {data?.title}
      </h1>
      <div className='w-[49px] h-[2px] bg-[#8B8B8B] md:hidden mx-auto mt-2 mb-6' />
      <LeadingPageBanner
        isDigitalization
        title={data?.Banner_Title}
        content={data?.Banner_Info}
        bgImage={data?.Banner_Image?.data?.attributes?.url}
        style={{ background: 'linear-gradient(to right,rgba(23, 31, 124, 1), rgba(23, 31, 124, 0))' }}
      />
      <div className="my:6 lg:my-[56px] flex flex-col gap-6 lg:gap-10">
        <div className="lg:sticky top-[90px]">
          <TwoColumnContent
            zeroGap
            hideButton
            title={data?.Cards?.[0]?.title}
            caption={data?.Cards?.[0]?.info}
            image={data?.Cards?.[0]?.image?.data?.attributes?.url}
            points={data?.Cards?.[0]?.lists?.map(({ list }) => list)}
          />
        </div>
        <div className="lg:sticky top-[90px]">
          <TwoColumnContent
            invert
            bgGray
            zeroGap
            hideButton
            bgColor="#E0E2FB"
            title={data?.Cards?.[1]?.title}
            caption={data?.Cards?.[1]?.info}
            image={data?.Cards?.[1]?.image?.data?.attributes?.url}
            points={data?.Cards?.[1]?.lists?.map(({ list }) => list)}
          /></div>
        <div className="lg:sticky top-[90px]">
          <TwoColumnContent
            zeroGap
            hideButton
            title={data?.Cards?.[2]?.title}
            caption={data?.Cards?.[2]?.info}
            caption2={data?.Cards?.[2]?.Info2}
            image={data?.Cards?.[2]?.image?.data?.attributes?.url}
            points={data?.Cards?.[2]?.lists?.map(({ list }) => list)}
          />
        </div>
      </div>
    </>
  );
}
