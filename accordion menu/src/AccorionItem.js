import React from "react";

const AccordionItem = (props) => {
  return (
    <div className="accordion-item">
      <div className="accordion-item--header" onClick={props.onClick}>
        {props.title}
      </div>
      <div className={`accordion-item--body ${props.open ? "open" : ""}`}>
        {props.children}
      </div>
    </div>
  );
};

export default AccordionItem;
