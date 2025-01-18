// import { Axios } from '@/config/Axios';
// import { getSecondaryCategories } from '@/services';
import ProductsTemplate from '@/templates/products'
// import qs from "qs"

// async function getProducts(searchParams) {
//   const generalCheckedValues = searchParams?.type === "general" ? searchParams?.categories.split(',') : []
//   const specificCheckedValues = searchParams?.type === "specific" ? searchParams?.categories.split(',') : []

//   const params = qs.stringify({
//     populate: [
//       'Image', "general_category", "specific_category"
//     ],
//     filters: {
//       specific_category: {
//         Slug: {
//           $in: specificCheckedValues,
//         },
//       },
//       general_category: {
//         Slug: {
//           $in: generalCheckedValues
//         },
//       },
//     },
//     pagination: {
//       page: searchParams?.page ? searchParams?.page : 1,
//       pageSize: 20
//     }
//   });

//   const GCparams = qs.stringify({
//     populate: ['general_categories', 'specific_categories'],
//     filters: {
//       Slug: { $eq: searchParams?.baseCategory }
//     }
//   }, { encodeValuesOnly: true });

//   const baseCategorriesRes = await Axios(`/base-categories`);
//   const baseCategory = await Axios(`/base-categories?${GCparams}`);
//   const responce = await Axios(`/products?${params}`);
//   const getProductLengthRes = await Axios(`/products`);
//   const categories = baseCategory?.data[0]?.attributes?.general_categories?.data
//   const specificCategorries = baseCategory?.data[0]?.attributes?.specific_categories?.data
//   const baseCategorries = baseCategorriesRes.data?.map((item) => ({
//     Name: item.attributes.Name,
//     Slug: item.attributes.Slug
//   }));

//   return {
//     allProducts: responce,
//     categories,
//     specificCategorries,
//     baseCategorries,
//     productLength: getProductLengthRes?.data?.meta?.pagination?.total
//   }
// }

const Products = ({ searchParams }) => {
  // const { allProducts, categories, specificCategorries, baseCategorries, productLength } = await getProducts(searchParams);
  // const secondaryCategory = await getSecondaryCategories();

  return (
    <ProductsTemplate
      // data={allProducts}
      // categories={categories}
      searchParams={searchParams}
    // baseCategorries={baseCategorries}
    // secondaryCategory={secondaryCategory}
    // specificCategorries={specificCategorries}
    />
  )
}

export default Products