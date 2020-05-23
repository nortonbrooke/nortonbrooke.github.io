import React, { useEffect, useRef } from "react";
import "./Body.css";

const BODY_ANIMATION_DURATION = 1600;

function Body(props) {
  const node = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      // Expand body
      node.current.style.flex = 1;
      // Remove transition and show overflow
      setTimeout(() => {
        node.current.style.transition = "none";
        node.current.style.overflow = "visible";
      }, BODY_ANIMATION_DURATION);
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
