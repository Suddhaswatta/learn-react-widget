import React from "react";

const WikiItem = ({ item, index, currentIndex, show }) => {
  /** This component deals with accordion styling and data rendering . It changes current index state of it's parent component.
   * Check out the onclick event it uses callback prop to pass data
   * It receives the show class from its parent component and appends it accordion-collapse show
   * Demonstrate dangerouslySetInnerHTML for Cross site Scripting attack.
   * Added Anchor tag for to go actual page
   */
  return (
    <React.Fragment key={item.pageid}>
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
          <div className="accordion-body">
            <span dangerouslySetInnerHTML={{ __html: item.snippet }}></span>
            <span>
              <a
                href={`https://en.wikipedia.org?curid=${item.pageid}`}
                target="_blank"
                rel="noreferrer noreferrer"
              >
                <button
                  type="button"
                  className="btn btn-secondary"
                  style={{ marginLeft: "10px", marginTop: "5px" }}
                >
                  Go to Page
                </button>
              </a>
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default WikiItem;
