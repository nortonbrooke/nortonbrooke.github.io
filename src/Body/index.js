import React, { useEffect, useRef } from "react";
import "./Body.css";

function Body(props) {
  const node = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      // Expand body
      node.current.style.height = node.current.scrollHeight + 'px';
    }, props.animationDelay);
  });

  return (
    <div className="body" ref={node}>
      {props.children}
    </div>
  );
}

Body.defaultProps = {
  animationDelay: 0,
};

export default Body;
