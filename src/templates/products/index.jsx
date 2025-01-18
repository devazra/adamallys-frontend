'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import qs from "qs"
import Image from 'next/image';
import { Axios } from '@/config/Axios';
import Select from '@/components/Select';
import { useRouter } from 'next/navigation';
import Pagination from '@/components/Pagination';
import ProductListing from '../../components/ProductListing';

const itemsPerPage = 50;

const getProducts = async (searchParams) => {

  let filters = {};

  if (searchParams?.baseCategory)
    filters.base_category = {
      Slug: { $in: [searchParams?.baseCategories] },
    };

  if (searchParams?.secondaryCategory)
    filters.secondary_category = {
      Slug: { $in: [searchParams?.secondaryCategory] },
    };

  if (searchParams?.generalCategory)
    filters.general_category = {
      Slug: { $in: [searchParams?.generalCategory] },
    };

  if (searchParams?.searchQuery) {
    filters.$or = [
      { Title: { $containsi: searchParams?.searchQuery } },
      { SKU: { $containsi: searchParams?.searchQuery } },
    ];
  }

  const params = qs.stringify({
    populate: [
      "general_category", "specific_category", "base_categories"
    ],
    filters,
    pagination: {
      page: searchParams?.page ? searchParams?.page : 1,
      pageSize: itemsPerPage
    }
  });

  const response = await Axios(`/products?${params}`);
  return response
}

const ProductsTemplate = ({ searchParams }) => {
  const router = useRouter();
  const isInitialLoading = useRef(true);

  const [filterOptions, setFilterOptions] = useState({
    categories: [],
    baseCategories: [],
    secondaryCategory: [],
  })

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState('');

  const [pagination, setPagination] = useState({
    totalItems: 0,
    currentPage: 1,
    itemsPerPage: itemsPerPage,
  });

  const handleUpdateParams = (params) => {
    const objToQuery = Object.keys(params)
      .filter(key => params[key])
      .map((key) => `${key}=${params[key]}`)
      .join('&');

    router.push(`?${objToQuery}`);
  }

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    handleFilter(e);
  };

  // fetch products method
  const fetchProducts = useCallback(
    async (params = searchParams) => {
      setIsLoading(true);
      setSearchQuery(params?.searchQuery || '')
      const res = await getProducts(params);
      setProducts(res?.data || []);
      setPagination({
        itemsPerPage: itemsPerPage,
        totalItems: res?.meta?.pagination?.total || 0,
        currentPage: res?.meta?.pagination?.page || 1,
      });
      setIsLoading(false);
    },
    [searchParams]
  );

  // fetch updated filters options

  const fetchFilterOptions = useCallback(
    async (params = searchParams) => {
      const GCparams = qs.stringify({
        populate: ['general_categories', 'specific_categories'],
        filters: {
          Slug: { $eq: params?.baseCategory }
        }
      }, { encodeValuesOnly: true });

      const baseCategoriesRes = await Axios(`/base-categories`);
      const baseCategory = await Axios(`/base-categories?${GCparams}`);

      const categories = baseCategory?.data[0]?.attributes?.general_categories?.data
      const specificCategories = baseCategory?.data[0]?.attributes?.specific_categories?.data

      const baseCategories = baseCategoriesRes.data?.map((item) => ({
        Name: item.attributes.Name,
        Slug: item.attributes.Slug
      }));

      setFilterOptions(prev => ({
        ...prev,
        categories,
        specificCategories,
        baseCategories,
      }))
    }, [searchParams])

  const handlePagination = (page) => {
    handleFilter({ target: { name: 'page', value: page } })
  }

  // filters
  const handleFilter = (e) => {
    const { name, value } = e?.target;
    const params = { page: 1, ...searchParams, [name]: value };
    // fetch products by updated filters
    fetchProducts(params)
    fetchFilterOptions(params)
    // update the searchparams
    handleUpdateParams(params)
  }

  const handleClearFilter = (e) => {
    const { name } = e?.target;
    let params = { page: 1, ...searchParams, [name]: "" };

    delete params?.[name];
    // fetch products by updated filters
    fetchProducts(params)
    fetchFilterOptions(params)

    // update the searchparams
    handleUpdateParams(params)
  };

  // load data initially
  useEffect(() => {
    if (isInitialLoading.current) {
      //get filter options
      fetchFilterOptions();
      // load products
      fetchProducts();
      isInitialLoading.current = false
    }
  }, []);

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
                name='searchQuery'
                value={searchQuery}
                placeholder="Search"
                onChange={handleSearch}
                className="w-full lg:w-[414px] h-[55px] p-2 px-6 text-lg border border-theme-main focus:outline-none text-theme-main focus:text-theme-main"
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
                name="baseCategory"
                onChange={handleFilter}
                onClear={handleClearFilter}
                placeholder='Base Category'
                value={searchParams?.baseCategory}
                options={filterOptions?.baseCategories?.map((item) =>
                  ({ value: item?.Slug, label: item?.Name })
                )}
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
                  name="baseCategory"
                  onChange={handleFilter}
                  onClear={handleClearFilter}
                  placeholder='Base Category'
                  value={searchParams?.baseCategory}
                  options={filterOptions?.baseCategories?.map((item) =>
                  ({ value: item?.Slug, label: item?.Name }
                  ))}
                />
              </div>
              <div className="flex-1 min-w-[220px] lg:w-[297px]">
                <Select
                  isSearchAble
                  onChange={handleFilter}
                  onClear={handleClearFilter}
                  name="secondaryCategory"
                  placeholder='Secondary Category'
                  value={searchParams?.secondaryCategory}
                  options={filterOptions?.secondaryCategory?.map((item) =>
                  ({
                    value: item?.attributes?.Slug,
                    label: item?.attributes?.Name
                  }
                  ))}
                />
              </div>
              <div className="flex-1 min-w-[220px] lg:min-w-[297px]">
                <Select
                  isSearchAble
                  name="generalCategory"
                  onChange={handleFilter}
                  onClear={handleClearFilter}
                  placeholder='General Category'
                  value={searchParams?.generalCategory}
                  options={filterOptions?.categories?.map((item) =>
                  ({
                    value: item?.attributes?.Slug,
                    label: item?.attributes?.Name
                  }
                  ))}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='hidden md:block w-full h-[0.5px] bg-theme-main' />
        <ProductListing
          isLoading={isLoading}
          products={products} searchParams={searchParams}
        />
        <div className="my-[38px]">
          <Pagination
            {...pagination}
            onPageChange={handlePagination}
          />
        </div>
      </div>
    </main>
  )
}

export default ProductsTemplate