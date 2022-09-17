import React from "react";
import { YoutubeData } from "../../data";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = (props) => {
  return (
    <div className="youtube-list">
      {props.children}

      {YoutubeData.map((item, index) => {
        const newClass = index === 1 ? "abc" : "";
        return (
          <div key={index}>
            <YoutubeItem
              key={item.id}
              image={item.image}
              avatar={item.avatar}
              title={item.title}
              author={item.author}
              newClass={newClass}
            ></YoutubeItem>
          </div>
        );
      })}
    </div>
  );
};

export default YoutubeList;
