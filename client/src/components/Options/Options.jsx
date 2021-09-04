import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "Track My Order",
      handler: props.actionProvider.handleTrackOrder,
      id: 1,
    },
    { text: "Quote Order Delivery", handler: () => {}, id: 2 },
    { text: "J&T Location Near Me", handler: () => {}, id: 3 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
