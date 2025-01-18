import ProductLoader from "../ProductLoader"

const ProductListing = ({ products = [], searchParams, isLoading }) => {
  return (
    <div>
      <div className="flex mt-4">
        <p className="pt-4 pb-5 pl-4 md:pl-[50px] border-r border-white text-white font-bold bg-theme-main md:text-lg leading-[26px] basis-[40%]">
          CATEGORY
        </p>
        <p className="pt-4 pb-5 pl-4 md:pl-[50px] text-white font-bold bg-theme-main md:text-lg leading-[26px] basis-[60%]">
          PRODUCT DESCRIPTION
        </p>
      </div>
      {isLoading ?
        <ProductLoader /> :
        products?.length ?
          products?.map((product) =>
            <div className="flex">
              <p className="py-[21px] pl-4 md:pl-[50px] border-r border-theme-main text-theme-main border-b md:text-lg leading-[26px] basis-[40%]">
                {searchParams?.generalCategory ?
                  product?.attributes?.general_category?.data?.attributes?.Name :
                  searchParams?.secondaryCategory ?
                    product?.attributes?.secondary_category?.data?.attributes?.Name :
                    (product?.attributes?.base_categories?.data?.[0]?.attributes?.Name || 'N/A')
                }
              </p>
              <p className="py-[21px] pl-4 md:pl-[50px] text-theme-main border-b border-theme-main md:text-lg leading-[26px] basis-[60%]">{product?.attributes?.Title}</p>
            </div>
          ) :
          <div className=" mt-5 text-center px-6 py-2 text-gray-500">No results found</div>
      }
    </div>
  )
}

export default ProductListing