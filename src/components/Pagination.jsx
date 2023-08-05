import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pagesArray = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-2 rounded-l-md ${currentPage === 1 ? 'cursor-not-allowed' : ' hover:bg-green-600  cursor-pointer'}`}
      >
        &lt;
      </button>
      {pagesArray.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`px-2 ${currentPage === page ? 'bg-lime-600 text-white' : ' text-gray-600 hover:bg-lime-600 hover:text-white'} cursor-pointer`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-2  rounded-r-md ${currentPage === totalPages ? '' : 'hover:bg-green-600  cursor-pointer'}`}
      >
        &gt;
      </button>
    </div>
  );
}

export default Pagination;
