import CertificationsAndMemberships from "@/components/certifications-and-memberships/CertificationsAndMemberships";
import Main from "@/components/hero/main";
import OurCompany from "@/components/our-company/our-company";
import Services from "@/components/Services/Services";
import Milestones from "@/components/milestones/Milestones"
import OurBrands from "@/components/our-brands/our-brands";
import Cards from "@/components/Cards/Cards";
import News from "@/components/news/News"
import { getFooter, getHomePage, getMilestones } from "@/services"


export default async function Home() {
  const milestones = await getMilestones()
  const page = await getHomePage()
  const { Side_Sticky_Links } = await getFooter()
  
  const {
    BrandContent,
    CertificationsMemberships,
    ContentCard,
    Hero,
    Icons,
    Our_Company_Content,
    ServiceCard,
    news_and_events,
  } = page

  return (
    <>
      <Main data={Hero} Side_Sticky_Links={Side_Sticky_Links}/>
      <CertificationsAndMemberships data={CertificationsMemberships}/>
      <OurCompany data={Our_Company_Content}/>
      <Services data={ServiceCard}/>
      <Milestones data={milestones} />
      <OurBrands data={Icons} content={BrandContent}/>
      <Cards data={ContentCard}/>
      <News data={news_and_events}/>
    </>
  );
}
