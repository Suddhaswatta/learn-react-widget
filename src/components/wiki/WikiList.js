import React, { useState } from "react";
import SearchWiki from "./SearchWiki";

import './Wiki.css';
import WikiItem from "./WikiItem";
const WikiList = () => {
  const items = [
    {
      title: "Coffee",
      content:
        "Why make coffee when you can make tea . Well Coffee is much stronger than tea that's why !!!!",
    },
    {
      title: "Tea",
      content: "lorem ipsum dolores ist ",
    },
  ];

  const [term, setTerm] = useState('') // State Array for Search Term
  const [show, setShow] = useState(null); // State Array for index of selected accordion

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

  console.log(`Search Term ${term}`);
  return (
    <React.Fragment>
      <div className="container" id="wiki">
        <div className="row align-items-center">
          <div className="col-lg-12 col-md-12 col-sm-12"><SearchWiki term={setTerm}/></div>
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
