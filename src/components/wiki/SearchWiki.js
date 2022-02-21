import React from "react";

const SearchWiki = ({ setSearchTerm, searchTerm }) => {
  const onChange = (term) => {
    setSearchTerm(term); // Passes Search term to parent component
  };
  return (
    <React.Fragment>
      <form>
        <input
          name="search"
          type="text"
          value={searchTerm}
          onChange={(e) => onChange(e.target.value)}
        />
      </form>
    </React.Fragment>
  );
};

export default SearchWiki;
