import React, { useState } from "react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

const App = () => {
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = (query) => {
    setLoading(true);
    // Backend Hit API
    // fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    fetch(`http://localhost:8000/search?query=${query}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResults(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  const fetchAllData = async () => {
    try {
      const response = await fetch("http://localhost:8000/search/all");
      const data = await response.json();
      setResults(data.results);
    } catch (error) {
      console.error("Error fetching all data:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Search App</h1>
      <SearchForm
        onSearch={handleSearch}
        fetchAllData={fetchAllData}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
      />
      {loading ? (
        <p className="text-2xl">Loading...</p>
      ) : (
        <SearchResults results={results} searchQuery={searchQuery} />
      )}
    </div>
  );
};

export default App;
