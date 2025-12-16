import React from "react";
import "remixicon/fonts/remixicon.css";
import RightCard from "./RightCard";

export const RightContent = (props) => {
  return (
    <div
      id="right"
      className="h-full flex flex-nowrap rounded-4xl overflow-auto gap-6 p-6 w-2/3"
    >
      {props.users.map(function (elem, idx) {
        return (
          <RightCard
            key={idx}
            id={idx}
            img={elem.img}
            tag={elem.tag}
            color={elem.color}
            // intro={elem.intro}
          />
        );
      })}
    </div>
  );
};
export default RightContent;
