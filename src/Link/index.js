import React from "react";
import "./Link.css";

function Link(props) {
  if (props.url) {
    return (
      <a
        href={props.url}
        className="link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.children}
      </a>
    );
  }
  return <div>{props.children}</div>;
}

Link.defaultProps = {
  url: "",
};

export default Link;
