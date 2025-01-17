const ProductListing = ({ products = [], searchParams }) => {
    return (
        <div>
            <div className="flex mt-4">
                <p className="pt-4 pb-5 pl-4 md:pl-[50px] border-r border-white text-white font-bold bg-theme-main md:text-lg leading-[26px] basis-[40%]">CATEGORY</p>
                <p className="pt-4 pb-5 pl-4 md:pl-[50px] text-white font-bold bg-theme-main md:text-lg leading-[26px] basis-[60%]">PRODUCT DESCRIPTION</p>
            </div>
            {products?.map((product) =>
                <div className="flex">
                    <p className="py-[21px] pl-4 md:pl-[50px] border-r border-theme-main text-theme-main border-b md:text-lg leading-[26px] basis-[40%]">
                        {searchParams?.generalCategory ?
                            product?.attributes?.general_categories?.data?.attributes?.Name :
                            searchParams?.secondaryCategory ?
                                product?.attributes?.secondary_categories?.data?.attributes?.Name :
                                (product?.attributes?.base_categories?.data?.attributes?.Name ||
                                    'N/A')
                        }
                    </p>
                    <p className="py-[21px] pl-4 md:pl-[50px] text-theme-main border-b border-theme-main md:text-lg leading-[26px] basis-[60%]">{product?.attributes?.Title}</p>
                </div>
            )}
        </div>
    )
}

export default ProductListing