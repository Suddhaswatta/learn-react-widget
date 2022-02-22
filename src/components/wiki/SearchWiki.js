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
      <form className="form-inline" onSubmit={(e) => onSubmit(e)}>
        <label className="sr-only" htmlFor="searchWikipedia">
          Search Wikipedia
        </label>
        <div className="input-group mb-2 mr-sm-2">
          <input
            name="search"
            type="text"
            className="form-control"
            id="searchWikipedia"
            value={searchTerm}
            onChange={(e) => onChange(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default SearchWiki;
