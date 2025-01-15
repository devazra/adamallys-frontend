'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { CiCircleInfo } from "react-icons/ci";
import Pagination from '@/components/Pagination';
import RightDrawer from '@/components/RightDrawer';
import ProductCard from '@/components/ProductCard';
import { useRouter, useSearchParams } from 'next/navigation';

const itemsPerPage = 20;

const ProductsTemplate = ({ data, categories, specificCategorries, baseCategorries, grandTotal, currentPageIndex }) => {
  
  const params = useSearchParams()
  const pageNo = params.get('page')

  const [currentPage, setCurrentPage] = useState(currentPageIndex ? currentPageIndex : 1);
  const [products, setProducts] = useState(data)
  const [totalProducts, setTotalProducts] = useState(grandTotal)
  const [searchQuery, setSearchQuery] = useState('');
  const [selectBaseCategory, setSelectBaseCategory] = useState();

  const router = useRouter()

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (!value) {
      setProducts(data);
      return;
    }
    const searchedProducts = data?.filter((item) =>
      item.attributes.Title.toLowerCase().includes(value.toLowerCase())
  );
    setProducts(searchedProducts);
  };

  const handleSelectCategory = (e) => {
    setSelectBaseCategory(e.target.value)
    const q = pageNo ?
      `?baseCategory=${e.target.value}&page=1` :
      `?baseCategory=${e.target.value}`
    router.push(q)
  }

  useEffect(() => {
    setProducts(data);
  }, [data]);

  return (
    <main className='mt-[4rem] md:mt-[6rem] container mx-auto'>
      <div className='md:pt-[20px] md:pb-[60px] px-[18px] xl:px-0'>
        <h1 className='font_calibri capitalize text-[25px] md:text-[60px] leading-[60px] text-center font-bold text-theme-main'>Products</h1>
        <div className='w-[49px] h-[2px] bg-[#8B8B8B] md:hidden mx-auto' />
        <div className="flex flex-wrap lg:flex-nowrap items-center gap-[12px] mt-3 md:mt-[42px]">
          <p className='font_calibri mx-auto max-w-[276px] md:max-w-full text-center md:text-left text-[12px] capitalize md:text-lg leading-[18px] md:leading-[26px] text-theme-main md:mr-[40px]'>
            Please use the search to filter the products. Please be patient as it has {grandTotal} products listed.
          </p>
          <div className="relative flex items-center flex-1 lg:flex-auto min-w-[220px]">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => handleSearch(e)}
              className="w-full lg:max-w-[414px] h-[55px] p-2 border border-theme-main focus:outline-none text-theme-main focus:text-theme-main"
            />

            <Image
              width={24}
              height={24}
              alt='search-icon'
              src='/svg/search.svg'
              className='absolute right-2'
            />
          </div>
          <div className="hidden md:block relative flex items-center flex-1 lg:flex-auto min-w-[220px]">
            <select
              value={selectBaseCategory}
              onChange={(e) => handleSelectCategory(e)}
              className="w-full lg:max-w-[414px] h-[55px] px-2 py-2 border border-theme-main focus:outline-none text-theme-main focus:text-theme-main appearance-none"
              style={{
                background: 'url(/svg/arrow_drop_down.svg) no-repeat right 10px center',
                backgroundSize: '15px 7.5px',
              }}
            >
              <option value="" disabled selected>
                Select Category
              </option>
              {
                baseCategorries?.map((item, idx) => (
                  <option value={item?.Slug} key={idx}>{item?.Name}</option>
                ))
              }
            </select>
          </div>
        </div>

        <div className='hidden md:block w-full h-[1px] bg-theme-main mt-[30px]' />

        <div className="flex flex-col md:flex-row gap-[20px] md:items-center justify-between mt-2 mb:7 md:my-[26px]">
          <p className='hidden sm:block font_calibri text-theme-main text-bold text-[24px] md:text-[40px] leading-[40px] font-bold capitalize'>
            {selectBaseCategory ? selectBaseCategory.replace(/-/g, " ") : "All Products"}
          </p>

          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-[24px]">
            <p className='text-theme-main text-base md:text-lg md:leading-[26px] font_calibri'>{data?.meta?.pagination?.total} Results</p>
            <div className="flex gap-2">
              <div className="md:hidden relative flex items-center flex-1 lg:flex-auto min-w-[220px]">
                <select
                  value={selectBaseCategory}
                  onChange={(e) => handleSelectCategory(e)}
                  className="w-full lg:max-w-[414px] h-[55px] px-2 py-2 border border-theme-main focus:outline-none text-theme-main focus:text-theme-main appearance-none"
                  style={{
                    background: 'url(/svg/arrow_drop_down.svg) no-repeat right 10px center',
                    backgroundSize: '15px 7.5px',
                  }}
                >
                  <option value="" disabled selected>
                    Select Category
                  </option>
                  {
                    baseCategorries?.map((item, idx) => (
                      <option value={item?.Slug} key={idx}>{item?.Name}</option>
                    ))
                  }
                </select>
              </div>
              <RightDrawer
                categories={categories}
                specificCategorries={specificCategorries}
                setProducts={setProducts}
                currentPageIndex={currentPageIndex}
                setTotalProducts={setTotalProducts}
              />
            </div>
          </div>
        </div>

        <div className='hidden md:block w-full h-[0.5px] bg-theme-main' />
        <p className='flex items-center gap-2 text-[#2E368F] text-xs mt-[20px]'>
          <CiCircleInfo /> <span>Note: Images are for illustrative purposes only. Brands and trademarks shown may not be sold, distributed, or affiliated with Adamallys LLC.</span>
        </p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[9px]  mt-[30px]'>
          {products?.map((product, index) =>
            <ProductCard key={index} {...product.attributes} />
          )}
        </div>
        <div className="my-[38px]">
          {/* {(products?.data > 19) && */}
          <Pagination
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalItems={data?.meta?.pagination?.total}
            onPageChange={setCurrentPage}
          />
          {/* } */}
        </div>
      </div>
    </main>
  )
}

export default ProductsTemplate