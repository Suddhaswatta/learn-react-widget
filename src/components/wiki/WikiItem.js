import React from "react";

const WikiItem = ({ item, index, currentIndex, show }) => {
  return (
    <React.Fragment key={index}>
      <div className="accordion-item">
        <h2 className="accordion-header" id={`heading${index}`}>
          <button
            className="accordion-button"
            type="button"
            onClick={() => currentIndex(index)}
          >
            {item.title}
          </button>
        </h2>
        <div id="collapseOne" className={`accordion-collapse ${show}`}>
          <div className="accordion-body">{item.content}</div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default WikiItem;
