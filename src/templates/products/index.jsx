'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Select from '@/components/Select';
import Pagination from '@/components/Pagination';
import FullPageLoader from '@/components/FullPageLoader';
import { useRouter, useSearchParams } from 'next/navigation';
import ProductListing from '../../components/ProductListing';

const itemsPerPage = 50;

const ProductsTemplate = ({ data, categories, specificCategorries, baseCategorries, searchParams }) => {

  const params = useSearchParams()
  const pageNo = params.get('page')

  const [currentPage, setCurrentPage] = useState(searchParams?.page ? searchParams?.page : 1);
  const [products, setProducts] = useState(data);
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('');

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
    const q = pageNo ?
      `?baseCategory=${e.target.value}&page=1` :
      `?baseCategory=${e.target.value}`
    router.push(q);
    setIsLoading(true);
  }

  useEffect(() => {
    setProducts(data);
    setIsLoading(false);
  }, [data]);

  return (
    <main className='mt-[4rem] md:mt-[6rem] container mx-auto'>
      <div className='md:pt-[20px] md:pb-[60px] px-[18px] xl:px-0'>
        <h1 className='font_calibri capitalize text-[25px] md:text-[60px] leading-[60px] text-center font-bold text-theme-main'>Products</h1>
        <div className='w-[49px] h-[2px] bg-[#8B8B8B] md:hidden mx-auto' />
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center gap-[12px] mt-3 md:mt-[42px]">
          <p className='font_calibri max-w-[276px] md:max-w-full text-center md:text-left text-[12px] md:text-lg leading-[18px] md:leading-[26px] text-theme-main md:mr-[40px]'>
            Please use the search to filter the products.
          </p>
          <div className="flex gap-3 justify-end flex-1 md:flex-auto">
            <div className="w-full max-w-[414px] lg:w-[414px] relative bg-[red] flex items-center lg:flex-auto min-w-[220px]">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => handleSearch(e)}
                className="w-full lg:w-[414px] h-[55px] p-2 border border-theme-main focus:outline-none text-theme-main focus:text-theme-main"
              />
              <Image
                width={24}
                height={24}
                alt='search-icon'
                src='/svg/search.svg'
                className='absolute right-2'
              />
            </div>
            <div className="hidden md:block relative flex items-center lg:flex-auto min-w-[220px] max-w-[297px] lg:w-[297px]">
              <Select
                value={searchParams?.baseCategory}
                placeholder='Base Category'
                onChange={(e) => handleSelectCategory(e)}
                options={baseCategorries?.map((item) => ({ value: item?.Slug, label: item?.Name }))}
              />
            </div>
          </div>
        </div>

        <div className='hidden md:block w-full h-[1px] bg-theme-main mt-[30px]' />

        <div className="flex flex-col md:flex-row gap-[20px] md:items-center justify-between mt-2 mb:7 md:my-[26px]">
          <p className='hidden sm:block font_calibri text-theme-main text-bold text-[24px] md:text-[40px] leading-[40px] font-bold capitalize'>
            {searchParams?.baseCategory ? searchParams?.baseCategory.replace(/-/g, " ") : "All Products"}
          </p>

          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-[24px]">
            <div className="flex gap-2 flex-wrap ">
              <div className="md:hidden relative flex items-center flex-1 lg:flex-auto min-w-[220px]">
                <Select
                  value={searchParams?.baseCategory}
                  placeholder='Secondary Category'
                  onChange={(e) => handleSelectCategory(e)}
                  options={baseCategorries?.map((item) => ({ value: item?.Slug, label: item?.Name }))}
                />
              </div>
              <div className="flex-1 min-w-[220px] lg:w-[297px]">
                <Select
                  value={searchParams?.baseCategory}
                  placeholder='Secondary Category'
                  onChange={(e) => handleSelectCategory(e)}
                  options={baseCategorries?.map((item) => ({ value: item?.Slug, label: item?.Name }))}
                />
              </div>
              <div className="flex-1 min-w-[220px] lg:min-w-[297px]">
                <Select
                  value={searchParams?.baseCategory}
                  placeholder='General Category'
                  onChange={(e) => handleSelectCategory(e)}
                  options={baseCategorries?.map((item) => ({ value: item?.Slug, label: item?.Name }))}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='hidden md:block w-full h-[0.5px] bg-theme-main' />
        <ProductListing products={products} />
        <div className="my-[38px]">
          <Pagination
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalItems={data?.meta?.pagination?.total}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
      {
        isLoading &&
        <FullPageLoader />
      }
    </main>
  )
}

export default ProductsTemplate