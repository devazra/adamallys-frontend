import qs from "qs"
import { Axios } from "@/config/Axios";

async function getDistributorsAndStockists() {
  const params = qs.stringify({
    populate: [
      'Image', "Cards.Icon", "Banner.Image"
    ],
  })
  const responce = await Axios(`/distributors-and-stockists-page?${params}`);
  return responce.data?.attributes
}

async function getMilestones() {
  const params = qs.stringify({
    populate: [
      'Background_Image', "Milestones.Icon"
    ],
  })
  const milestoneResponce = await Axios(`/milestone-section?${params}`);
  return milestoneResponce.data?.attributes
}

async function getHomePage() {
  const params = qs.stringify({
    populate: [
      'Hero.video', "CertificationsMemberships.Icon", "ServiceCard.Image",
      "Icons.Icon", "ContentCard.Image", "news_and_events.Image", "Hero.NextButtonImage"
    ],
  })
  const responce = await Axios(`/home-page?${params}`);
  return responce.data?.attributes
}

async function getCertificationsAndMemberships() {
  const params = qs.stringify({
    populate: [
      'Certifications', 'Certifications.Image', "Memberships.Image"
    ],
  })
  const responce = await Axios(`/certifications-and-memberships-page?${params}`);
  return responce.data?.attributes
}

async function getAboutUs() {
  const params = qs.stringify({
    populate: [
      'Image', "AboutCards.Icon", "Images", "ExpertiseCards",
      "HistoryList.Image", "PresentDayImage", "ExpertiseMedia"
    ],
  })
  const responce = await Axios(`/about-page?${params}`);
  return responce.data?.attributes
}


async function getNewsAndEvents() {
  const params = qs.stringify({
    populate: [
      'Image'
    ],
  })
  const responce = await Axios(`/news-and-events?${params}`);
  return responce.data
}


async function getSingleNewsAndEvents(slug) {
  const params = qs.stringify({
    populate: [
      'Image', "Banner_Image"
    ],
    filters: {
      Slug: { $eq: slug }
    }
  })
  const responce = await Axios(`/news-and-events?${params}`);
  return responce.data
}

async function getFooter() {
  const params = qs.stringify({
    populate: [
      'Logo', "Adamallys_Group", "AdamallysGroup2", "AdamallysLLC", "AdamallysMarineShipChandlingServices",
      "Buttons", "Socials.Icon", "Side_Sticky_Links.Icon"
    ],
  })
  const responce = await Axios(`/footer?${params}`);
  return responce.data?.attributes
}

async function getContactUs() {
  const params = qs.stringify({
    populate: [
      'Buttons.Buttons',
    ],
  })
  const response = await Axios(`/contact-page?${params}`);
  return response.data?.attributes
}

async function getDigitalizationAndTechnologyAtAdamallys() {
  const params = qs.stringify({
    populate: [
      'Banner_Image', "Content_Cards.Image", 'Cards.image', 'Cards.lists'
    ],
  })
  const responce = await Axios(`/digitalization-and-technology-at-adamallys-page?${params}`);
  return responce.data?.attributes
}

async function getDryDockingService() {
  const params = qs.stringify({
    populate: [
      'cards.Icon', "Why_Choose_Image", "banner_background_image", 'OtherServices.Image', 'OtherServices.Services'
    ],
  })
  const responce = await Axios(`/dry-docking-service-page?${params}`);
  return responce.data?.attributes
}

async function getHeader() {
  const params = qs.stringify({
    populate: [
      'Logo', "NavLinks", "Button", "Secound_Header_Nav"
    ],
  })
  const responce = await Axios(`/header?${params}`);
  return responce.data?.attributes
}

async function getIndustrialEnergy() {
  const params = qs.stringify({
    populate: [
      'Video', 'KeyProducts', 'KeyProducts.List', 'OtherServices.Image', 'OtherServices.Services'
    ],
  })
  const responce = await Axios(`/industrial-and-energy-sector-supplies-page?${params}`);
  return responce.data?.attributes
}

async function getMarineLogisticsWarehousing() {
  const params = qs.stringify({
    populate: [
      'video', "Warehousing_videos", "list", 'Cards', 'OtherServices.Image', 'OtherServices.Services'
    ],
  })
  const responce = await Axios(`/marine-logistics-and-warehousing-page?${params}`);
  return responce.data?.attributes
}

async function getMarineRopesAndMooringRopes() {
  const params = qs.stringify({
    populate: [
      'banner_backeground_image', "Card.Images", "Card.list", 'OtherServices.Image', 'OtherServices.Services'
    ],
  })
  const responce = await Axios(`/marine-ropes-and-mooring-ropes-page?${params}`);
  return responce.data?.attributes
}

async function getOtherService() {
  const params = qs.stringify({
    populate: [
      'OtherServices', "Image"
    ],
  })
  const responce = await Axios(`/other-service?${params}`);
  return responce.data?.attributes
}

async function getProvisionsBondedStores() {
  const params = qs.stringify({
    populate: [
      'banner_background_image', "Cards.Image", "Cards.List", "Cards.List.lists", 'OtherServices.Image', 'OtherServices.Services'
    ],
  })
  const responce = await Axios(`/provisions-and-bonded-stores-page?${params}`);
  return responce.data?.attributes
}

async function getShipSpareParts() {
  const params = qs.stringify({
    populate: [
      'banner_background_image', "Why_Choose_Image", "Cards.image", "Cards.lists", 'OtherServices.Image', 'OtherServices.Services'
    ],
  })
  const responce = await Axios(`/ship-spare-parts-page?${params}`);
  return responce.data?.attributes
}


async function getShipSupply() {
  const params = qs.stringify({
    populate: [
      'Product_and_service.Image', 'OtherServices.Image', 'OtherServices.Services', 'Buttons.Buttons'
    ],
  })
  const responce = await Axios(`/ship-supply-page?${params}`);
  return responce.data?.attributes
}

async function getSustainabilityAtAdamallys() {
  const params = qs.stringify({
    populate: [
      'BannerImage', "Vision_Image", "Commitment_Image", "CSR_Image", "Cards.lists", "Cards.image"
    ],
  })
  const responce = await Axios(`/sustainability-at-adamallys-page?${params}`);
  return responce.data?.attributes
}

async function getTechnicalMarineStores() {
  const params = qs.stringify({
    populate: [
      'banner_background_image', "Card.image", "Tags", "Card", "Card.lists", "Card.Secound_Image", 'OtherServices.Image', 'OtherServices.Services'
    ],
  })
  const responce = await Axios(`/technical-marine-stores-page?${params}`);
  return responce.data?.attributes
}

async function getPorts() {
  const params = qs.stringify({
    populate: [
      'UAE_Ports.Image', "Oman.Image"
    ],
  })
  const res = await fetch(`${process.env.BACKEND_PUBLIC_BASE_URL}/api/port?${params}`)
  const ports = await res.json()
  return { ports: ports.data }
}

async function getWhyChoose() {
  const params = qs.stringify({
    populate: [
      'Image', "WhyChoose"
    ],
  })
  const responce = await Axios(`/why-choose-adamally?${params}`);
  return responce.data?.attributes
}

async function getSecondaryCategories() {
  const params = qs.stringify({
    populate: [
      'products', "base_category", "general_category"
    ],
  })
  const responce = await Axios(`/secondary-categories?${params}`);
  return responce?.data || [];
}

async function getPrivacyPolicy() {
  const responce = await Axios(`/privacy-policy-page?populate=*`);
  return responce.data?.attributes
}


export {
  getDistributorsAndStockists,
  getMilestones,
  getHomePage,
  getCertificationsAndMemberships,
  getAboutUs,
  getNewsAndEvents,
  getFooter,
  getContactUs,
  getDigitalizationAndTechnologyAtAdamallys,
  getDryDockingService,
  getHeader,
  getIndustrialEnergy,
  getMarineLogisticsWarehousing,
  getMarineRopesAndMooringRopes,
  getOtherService,
  getProvisionsBondedStores,
  getShipSpareParts,
  getShipSupply,
  getSustainabilityAtAdamallys,
  getTechnicalMarineStores,
  getWhyChoose,
  getPrivacyPolicy,
  getPorts,
  getSingleNewsAndEvents,
  getSecondaryCategories
}