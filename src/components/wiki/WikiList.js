import React, { useState, useEffect } from "react";

import useResults from "../../hooks/useResults";
import SearchWiki from "./SearchWiki";
import "./Wiki.css";
import WikiItem from "./WikiItem";

const WikiList = () => {
  const [searchTerm, setSearchTerm] = useState("programming"); // State Array for Search Term data is received through callback
  const [show, setShow] = useState(0); // State Array for index of selected accordion
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

  const [results] = useResults(debouncedTerm); // Custom Hooks to fetch Wikipedia search results reducing boilerplate in Component

  const debounceTime = 1000;
  useEffect(() => {
    /**Search on initial render  */
    const timerId = setTimeout(() => {
      if (searchTerm) setDebouncedTerm(searchTerm); // Debouncing
    }, debounceTime);

    /**Use effect clean up func */
    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]); /** Use effect gets called after search term gets updated */

  const wikiItems = results.map((item, idx) => {
    const active = show === idx ? "show" : "collapse";
    return (
      <WikiItem
        item={item} // Item contains data passed down child
        key={idx}
        index={idx}
        currentIndex={setShow} // Callback prop to get current index
        show={active} // Passes down show var which appended to accordion class
      />
    );
  });

  return (
    <React.Fragment>
      <div className="container" id="wiki">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <SearchWiki setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
          </div>
        </div>
        <p></p>
        <div className="row">
          <div className="col-md-12 col-lg-12 col-sm-12">{wikiItems}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WikiList;
