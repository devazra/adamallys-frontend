import Image from "next/image";

const Pagination = (props) => {
  const { totalItems, itemsPerPage, currentPage, onPageChange } = props;

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return; // Prevent going out of bounds
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 3) {
      // If total pages are 3 or less, show all pages
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Show first 2 pages always
      pageNumbers.push(1);
      if (totalPages > 1) {
        pageNumbers.push(2);
      }

      // Add "..." if currentPage > 4
      if (currentPage > 4) {
        pageNumbers.push("...");
      }

      // Add previous two pages and current page
      const startPage = Math.max(3, currentPage - 2);
      const endPage = Math.min(totalPages - 4, currentPage);
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      // Add "..." if there are pages before the last 4 items
      if (currentPage < totalPages - 4) {
        pageNumbers.push("...");
      }

      // Add the last 4 pages
      const lastPagesStart = Math.max(totalPages - 3, 3);
      for (let i = lastPagesStart; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers;
  };

  const pageNumbers = renderPageNumbers();

  return (
    <div className="flex flex-wrap justify-center">
      <button
        className={`w-[30px] h-[29px] md:w-[57px] md:h-[55px] flex items-center justify-center ${
          currentPage === 1
            ? "bg-gray-300 text-gray-500"
            : "border border-theme-main hover:bg-blue-100"
        }`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <Image src="/svg/arrow_back.svg" alt="" width={14} height={14} />
      </button>

      {pageNumbers.map((page, index) => (
        <button
          key={index}
          className={`w-[30px] h-[29px] md:w-[57px] md:h-[55px] flex items-center justify-center ${
            page === currentPage
              ? "bg-theme-main text-white"
              : page === "..."
              ? "text-gray-500"
              : "bg-white text-theme-main border border-theme-main hover:bg-blue-100"
          }`}
          onClick={() => typeof page === "number" && handlePageChange(page)}
          disabled={page === "..."}
        >
          {page}
        </button>
      ))}

      <button
        className={`w-[30px] h-[29px] md:w-[57px] md:h-[55px] flex items-center justify-center ${
          currentPage === totalPages
            ? "bg-gray-300 text-gray-500"
            : "border border-theme-main hover:bg-blue-100"
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <Image src="/svg/arrow_next.svg" alt="" width={14} height={14} />
      </button>
    </div>
  );
};

export default Pagination;
