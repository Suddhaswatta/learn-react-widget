import React from "react";

const WikiItem = ({ item, index, currentIndex, show }) => {

  /** This component deals with accordion styling and data rendering . It changes current index state of it's parent component.
   * Check out the onclick event it uses callback prop to pass data
   * It receives the show class from its parent component and appends it accordion-collapse show 
   */
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
