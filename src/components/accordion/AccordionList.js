import { useState } from "react";
import AccordionItem from "./AccordionItem";

const AccordionList = () => {
  const items = [
    {
      title: "A",
      content: "B",
    },
    {
      title: "A",
      content: "B",
    },
  ];

  const [show, setShow] = useState(null);

  const currentIndex = (index) => {
    console.log(`Current Index ${index}`);
    setShow(index);
  };

  const accordions = items.map((item, idx) => {
    const active = show===idx?"show":"";
    console.log(idx,show,active);
    return (
      <AccordionItem
        item={item}
        key={idx}
        index={idx}
        currentIndex={currentIndex}
        show={active}
      />
    );
  });

  return accordions;
};

export default AccordionList;
