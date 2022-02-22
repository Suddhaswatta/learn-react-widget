import React, { useState, useEffect } from "react";
import WikiApi from "../../api/WikiApi";
import SearchWiki from "./SearchWiki";

import "./Wiki.css";
import WikiItem from "./WikiItem";
const WikiList = () => {
  const [items, setItems] = useState([]);
  const [debouncedTerm, setDebouncedTerm] = useState("programming"); // State Array for Search Term data is received through callback
  const [show, setShow] = useState(0); // State Array for index of selected accordion

  useEffect(() => {

    /**Search on initial render  */
    const search = async () => {
      const { data } = await WikiApi.get("/", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm,
        },
      });
      console.log(data.query.search);
      setItems(data.query.search);
    };

    const timerId = setTimeout(() => {
      if (debouncedTerm) {
        search();
      }
    }, 1000);

    /**Use effect clean up func */
    return () => {
      console.log("Clean up");
      clearTimeout(timerId);
    };
  }, [debouncedTerm]); /** Use effect gets called after debounced term gets updated */ 

  const wikiItems = items.map((item, idx) => {
    const active = show === idx ? "show" : "collapse";
    return (
      <WikiItem
        item={item} // Item contains data passed down child
        key={idx}
        index={idx}
        currentIndex={setShow} // Callback prop to get current index
        show={active} // Passes down show var which appended to accordion
      />
    );
  });

  return (
    <React.Fragment>
      <div className="container" id="wiki">
        <div className="row align-items-center">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <SearchWiki
              setSearchTerm={setDebouncedTerm}
              searchTerm={debouncedTerm}
            />
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
