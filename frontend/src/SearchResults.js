import React from "react";

const SearchResults = ({ results, searchQuery }) => {
  return (
    <ul>
      {results.length ? (
        results.map((result, i) => (
          <li key={i} className="mb-4">
            <h3 className="text-xl font-bold mb-1">{result.name}</h3>
            <p className="text-gray-600 mb-1">{result.author}</p>
            <p className="text-gray-600 mb-1">{result.date}</p>
            <p
              className="text-gray-800"
              dangerouslySetInnerHTML={{
                __html: result.text.replace(
                  new RegExp(searchQuery, "gi"),
                  `<mark class="bg-yellow-200">${searchQuery}</mark>`
                ),
              }}
            ></p>
          </li>
        ))
      ) : (
        <li className="text-2xl">No data found matching the text</li>
      )}
    </ul>
  );
};

export default SearchResults;
