import React, { useEffect, useRef } from "react";
import "./Header.css";

const HEADER_ANIMATION_INTERVAL = 30;

function Header(props) {
  const node = useRef(null);

  /*
   * Helper variable to animate nodes sequentially
   */
  let nodeAnimationDelay = 0;

  /*
   * Helper function to animate an element's
   * inner text to resemble typing.
   */
  const animateText = function (node) {
    let i = 0;
    let html = node.innerHTML;
    node.innerHTML = "";
    setTimeout(() => {
      let interval = setInterval(() => {
        if (i < html.length) {
          node.innerHTML = node.innerHTML += html[i];
          i++;
        }
        if (i === html.length) {
          clearInterval(interval);
        }
      }, HEADER_ANIMATION_INTERVAL);
    }, nodeAnimationDelay);

    nodeAnimationDelay += html.length * HEADER_ANIMATION_INTERVAL;
  };

  useEffect(() => {
    for (let i = 0; i < node.current.children.length; i++) {
      animateText(node.current.children[i]);
    }
  });

  return (
    <header className="header" ref={node}>
      <h1>{props.data.name}</h1>
      <p>
        🌎 {props.data.city}, {props.data.state}
      </p>
    </header>
  );
}

Header.defaultProps = {
  data: {
    name: "",
    city: "",
    state: "",
  },
};

export default Header;
