import { getNewsAndEvents } from "@/services";
import Main from "@/components/news-events/main";
import Card from "@/components/news-events/card";

export default async function News() {
  const data = await getNewsAndEvents();

  const newsData = data?.map(({ attributes }) => ({
    slug: attributes?.Slug,
    title: attributes?.title,
    date: attributes?.Date,
    excerpt: attributes?.Excerpt,
    image: attributes?.Image?.data?.attributes?.url,
  })) || [];

  const sortedNewsData = newsData?.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <Main news={sortedNewsData.slice(0, 3)} />
      <div className="container mx-auto flex flex-wrap gap-[23px] mt-[23px] px-[18px] mb-6">
        {sortedNewsData?.slice(3)?.map((news, index) =>
          <div key={news?.title + index} className="basis-full sm:basis-[40%] flex-1 lg:basis-[30%]">
            <Card {...news} />
          </div>
        )}
      </div>
      {(newsData?.length > 3) &&
        <div className="flex justify-center items-center mt-6 lg:my-[64px]">
          <div className="w-[157px] text-[#2E368F] flex justify-center items-center border py-2 md:px-5 md:py-3 border-[#2E368F]">
            <button className="text-[14px] md:text-[16px] ">
              Load More
            </button>
          </div>
        </div>
      }
    </>
  );
}
