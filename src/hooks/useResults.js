import { useState, useEffect } from "react";
import wikipedia from "../api/wikipedia";

const useResults = (wikiTerm) => {
  // Declare state
  const [results, setResults] = useState([]);
  // Use param value as state array in React Hook to avoid bugs

  useEffect(() => {
    searchWikipedia(wikiTerm);
  }, [wikiTerm]);

  const searchWikipedia = async (searchTerm) => {
    const { data } = await wikipedia.get("", {
      params: {
        action: "query",
        list: "search",
        origin: "*",
        format: "json",
        srsearch: searchTerm,
      },
    });
    console.log(data.query.search);
    setResults(data.query.search);
  };

  return [results];
};

export default useResults;