import React, { useState } from "react";

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

  const [show, setShow] = useState(null);

  const wikiItems = items.map((item, idx) => {
    const active = show === idx ? "show" : "collapse";
    return (
      <WikiItem
        item={item}
        key={idx}
        index={idx}
        currentIndex={setShow}
        show={active}
      />
    );
  });

  return (
    <React.Fragment>
      <div className="container" id="wiki">
        <div className="row align-items-center">
          <div className="col-lg-12 col-md-12 col-sm-12">Search</div>
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
