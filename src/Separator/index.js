import React, { useEffect, useRef } from "react";
import "./Separator.css";

function Separator(props) {
  const node = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      // Show separator
      node.current.style.opacity = 1;
      node.current.style.height = "2px";
      // Hide separator
      if (props.hideAnimationDelay) {
        setTimeout(() => {
          node.current.style.opacity = 0;
          node.current.style.height = 0;
        }, props.hideAnimationDelay);
      }
    }, props.animationDelay);
  });

  return <hr className="separator" ref={node}></hr>;
}

Separator.defaultProps = {
  animationDelay: 0,
  hideAnimationDelay: null,
  isTemporary: false,
};

export default Separator;
