import React from "react";

const SearchForm = ({
  onSearch,
  setSearchQuery,
  searchQuery,
  fetchAllData,
}) => {
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSearch} className="mb-4">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2 w-full"
        placeholder="Enter search query"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mt-2 mr-2"
      >
        Search
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mt-2"
        onClick={fetchAllData}
      >
        Get All Data
      </button>
    </form>
  );
};

export default SearchForm;
