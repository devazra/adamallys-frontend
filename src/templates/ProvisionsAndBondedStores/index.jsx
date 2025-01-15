import ShipSupplyHeading from '@/components/ShipSupplyHeading'
import LeadingPageBanner from '@/components/digitalization/Leadingpage'
import PageNavigation from "@/components/page-navigation/PageNavigation"
import OtherServices from '@/components/other-services-slider/OtherServices'
import ChooseAdamallys from '@/components/choose-adamallys/choose-adamallys'
import SingleWrapperTwoColumnContent from '@/components/single-wrapper-two-column-content'

const ProvisionsAndBondedStoresTemplate = (props) => {
  const { banner_background_image, banner_info, banner_title, Cards, OtherServices: otherServicesData } = props;

  return (
    <>
      <ShipSupplyHeading />
      <PageNavigation />
      <LeadingPageBanner
        {...{
          title: banner_title,
          content: banner_info,
          bgImage: banner_background_image?.data?.attributes?.url
        }}
      />
      <div className="lg:mt-[66px] ">
        <SingleWrapperTwoColumnContent
          isProductButton
          points={Cards?.[0]?.List}
          title={Cards?.[0]?.title}
          caption={Cards?.[0]?.info}
          link={Cards?.[0]?.Link}
          images={[Cards?.[0]?.Image?.data?.attributes?.url]}
        />
        <SingleWrapperTwoColumnContent
          isGradientBg
          points={Cards?.[1]?.List}
          title={Cards?.[1]?.title}
          caption={Cards?.[1]?.info}
          link={Cards?.[1]?.Link}
          images={[Cards?.[1]?.Image?.data?.attributes?.url]}
        />
      </div>
      <ChooseAdamallys />
      <OtherServices {...otherServicesData} />
    </>
  )
}

export default ProvisionsAndBondedStoresTemplate