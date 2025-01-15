import ShipSupplyHeading from '@/components/ShipSupplyHeading'
import LeadingPageBanner from '@/components/digitalization/Leadingpage'
import PageNavigation from "@/components/page-navigation/PageNavigation"
import OtherServices from '@/components/other-services-slider/OtherServices'
import ChooseAdamallys from '@/components/choose-adamallys/choose-adamallys'
import TwoColumnContent from "@/components/two-column-content/two-column-content"

const DryDockingServiceTemplate = (props) => {
  const { Why_Choose_Image, Why_Choose_Title, Why_Choose_info, banner_background_image, banner_info, banner_title, cards, OtherServices: otherServicesData } = props;

  return (
    <main className=''>
      <ShipSupplyHeading />
      <PageNavigation />
      <LeadingPageBanner
        {...{
          title: banner_title,
          content: banner_info,
          bgImage: banner_background_image?.data?.attributes?.url
        }}
      />
      <div className="mt-[72px]">
        <TwoColumnContent
          link={cards?.[0]?.link}
          title={cards?.[0]?.title}
          image={cards?.[0]?.Icon?.data?.attributes?.url}
          caption={cards?.[0]?.info}
        />
      </div>
      <TwoColumnContent
        invert
        bgGray
        link={cards?.[1]?.link}
        title={cards?.[1]?.title}
        image={cards?.[1]?.Icon?.data?.attributes?.url}
        caption={cards?.[1]?.info}
      />
      <TwoColumnContent
        link={cards?.[2]?.link}
        title={cards?.[2]?.title}
        image={cards?.[2]?.Icon?.data?.attributes?.url}
        caption={cards?.[2]?.info}
      />
      <TwoColumnContent
        bgGray
        invert
        link={cards?.[3]?.link}
        title={cards?.[3]?.title}
        image={cards?.[3]?.Icon?.data?.attributes?.url}
        caption={cards?.[3]?.info}
      />
      <ChooseAdamallys
        {...{ title: Why_Choose_Title, image: Why_Choose_Image?.data?.attributes?.url, description: Why_Choose_info }}
      />
      <OtherServices {...otherServicesData} />
    </main>
  )
}

export default DryDockingServiceTemplate