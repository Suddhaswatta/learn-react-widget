import React from "react";

const SearchWiki = ({ setSearchTerm, searchTerm }) => {
  const onChange = (term) => {
    setSearchTerm(term); // Passes Search term to parent component
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.search.value);
    setSearchTerm(e.target.search.value);
  };

  return (
    <React.Fragment>
      <form onSubmit={(e)=>onSubmit(e)}>
        <input
          name="search"
          type="text"
          value={searchTerm}
          onChange={(e) => onChange(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </React.Fragment>
  );
};

export default SearchWiki;
