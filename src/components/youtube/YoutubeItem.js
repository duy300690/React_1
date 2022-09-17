import React from "react";

const YoutubeItem = (props) => {
  return (
    <div className={`youtube-item ${props.newClass}`}>
      <div className="youtube-image">
        <img src={props.image} alt="" />
      </div>
      <div className="youtube-footer">
        <img src={props.avatar} alt="" className="youtube-avatar" />
        <div className="youtube-info">
          <h3 className="youtube-title">{props.title || "not title"}</h3>
          <h4 className="youtube-author">{props.author || "Not Author"}</h4>
        </div>
      </div>
    </div>
  );
};

export default YoutubeItem;
