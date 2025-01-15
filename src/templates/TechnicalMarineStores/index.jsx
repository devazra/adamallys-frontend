import Tags from "@/components/tags/tags"
import GridContent from '@/components/grid-content'
import ShipSupplyHeading from '@/components/ShipSupplyHeading'
import LeadingPageBanner from '@/components/digitalization/Leadingpage'
import PageNavigation from "@/components/page-navigation/PageNavigation"
import OtherServices from '@/components/other-services-slider/OtherServices'
import ChooseAdamallys from '@/components/choose-adamallys/choose-adamallys'
import OneColumnContent from '@/components/one-column-content/two-column-content'
import TwoColumnContent from "@/components/two-column-content/two-column-content"
import ThreeColumnContent from "@/components/three-column-content/three-column-content"

const TechnicalMarineStoresTemplate = (props) => {
  const { banner_background_image, banner_info, banner_title, Tags: tags, Card, OtherServices: otherServicesData } = props;
  const tagList = tags?.map(({ list }) => list);
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
      <Tags tags={tagList} />
      <TwoColumnContent
        id={tagList[0]}
        link={Card?.[0]?.link}
        title={Card?.[0]?.title}
        caption={Card?.[0]?.info}
        image={Card?.[0]?.image?.data?.attributes?.url}
        points={Card?.[0]?.lists?.map(({ list }) => list)}
      />
      <TwoColumnContent
        invert
        bgGray
        id={tagList[1]}
        link={Card?.[1]?.link}
        title={Card?.[1]?.title}
        caption={Card?.[1]?.info}
        image={Card?.[1]?.image?.data?.attributes?.url}
        points={Card?.[1]?.lists?.map(({ list }) => list)}
      />
      <ThreeColumnContent
        id={tagList[2]}
        link={Card?.[2]?.link}
        title={Card?.[2]?.title}
        caption={Card?.[2]?.info}
        image1={Card?.[2]?.image?.data?.attributes?.url}
        points={Card?.[2]?.lists?.map(({ list }) => list)}
        image2={Card?.[2]?.Secound_Image?.data?.attributes?.url || "/images/ship-supply/cabin-stores-two.png"}
      />
      <TwoColumnContent
        bgGray
        id={tagList[3]}
        isCustomBasis
        bgColor={"#E0E2FB"}
        link={Card?.[3]?.link}
        title={Card?.[3]?.title}
        caption={Card?.[3]?.info}
        image={Card?.[3]?.image?.data?.attributes?.url}
        points={Card?.[3]?.lists?.map(({ list }) => list)}
      />
      <OneColumnContent
        leftTitle
        id={tagList[4]}
        link={Card?.[4]?.link}
        title={Card?.[4]?.title}
        caption={Card?.[4]?.info}
        image={Card?.[4]?.image?.data?.attributes?.url}
        points={Card?.[4]?.lists?.map(({ list }) => list)}
      />
      <TwoColumnContent
        bgGray
        id={tagList[5]}
        link={Card?.[5]?.link}
        title={Card?.[5]?.title}
        caption={Card?.[5]?.info}
        image={Card?.[5]?.image?.data?.attributes?.url}
        points={Card?.[5]?.lists?.map(({ list }) => list)}
      />
      <TwoColumnContent
        bgGray
        invert
        id={tagList[6]}
        link={Card?.[6]?.link}
        title={Card?.[6]?.title}
        caption={Card?.[6]?.info}
        image={Card?.[6]?.image?.data?.attributes?.url}
        points={Card?.[6]?.lists?.map(({ list }) => list)}
      />
      <ThreeColumnContent
        id={tagList[7]}
        link={Card?.[7]?.link}
        title={Card?.[7]?.title}
        caption={Card?.[7]?.info}
        image1={Card?.[7]?.image?.data?.attributes?.url}
        points={Card?.[7]?.lists?.map(({ list }) => list)}
        image2={Card?.[7]?.Secound_Image?.data?.attributes?.url || "/images/ship-supply/safety-stores-image2.png"}
      />
      <TwoColumnContent
        id={tagList[8]}
        link={Card?.[8]?.link}
        title={Card?.[8]?.title}
        caption={Card?.[8]?.info}
        image={Card?.[8]?.image?.data?.attributes?.url}
        points={Card?.[8]?.lists?.map(({ list }) => list)}
      />
      <ThreeColumnContent
        id={tagList[9]}
        link={Card?.[9]?.link}
        title={Card?.[9]?.title}
        caption={Card?.[9]?.info}
        image1={Card?.[9]?.image?.data?.attributes?.url}
        points={Card?.[9]?.lists?.map(({ list }) => list)}
        image2={Card?.[9]?.Secound_Image?.data?.attributes?.url || "/images/ship-supply/stationary-two.png"}
      />
      <OneColumnContent
        id={tagList[10]}
        link={Card?.[10]?.link}
        title={Card?.[10]?.title}
        caption={Card?.[10]?.info}
        image={Card?.[10]?.image?.data?.attributes?.url}
        points={Card?.[10]?.lists?.map(({ list }) => list)}
      />
      <div className="hidden md:block" id={tagList[12]}>
        <GridContent
          id={tagList[11]}
          data={[
            {
              bgGray: true,
              link: Card?.[11]?.link,
              title: Card?.[11]?.title,
              caption: Card?.[11]?.info,
              points: Card?.[11]?.lists?.map(({ list }) => list),
            },
            {
              link: Card?.[12]?.link,
              title: Card?.[12]?.title,
              caption: Card?.[12]?.info,
              points: Card?.[12]?.lists?.map(({ list }) => list),
            }
          ]}
          images={[Card?.[11]?.image?.data?.attributes?.url, Card?.[12]?.image?.data?.attributes?.url]}
        />
      </div>
      <div className="block md:hidden">
        <TwoColumnContent
          bgGray
          id={tagList[11]}
          link={Card?.[11]?.link}
          title={Card?.[11]?.title}
          caption={Card?.[11]?.info}
          image={Card?.[11]?.image?.data?.attributes?.url}
          points={Card?.[11]?.lists?.map(({ list }) => list)}
        />
        <TwoColumnContent
          id={tagList[12]}
          link={Card?.[12]?.link}
          title={Card?.[12]?.title}
          caption={Card?.[12]?.info}
          image={Card?.[12]?.image?.data?.attributes?.url}
          points={Card?.[12]?.lists?.map(({ list }) => list)}
        />
      </div>
      <TwoColumnContent
        bgGray
        id={tagList[13]}
        isCustomBasis
        bgColor={"#E0E2FB"}
        link={Card?.[13]?.link}
        title={Card?.[13]?.title}
        caption={Card?.[13]?.info}
        image={Card?.[13]?.image?.data?.attributes?.url}
        points={Card?.[13]?.lists?.map(({ list }) => list)}
      />
      <ChooseAdamallys />
      <OtherServices {...otherServicesData} />
    </>
  )
}

export default TechnicalMarineStoresTemplate