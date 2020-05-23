import React, { useEffect, useRef } from "react";
import { EmailIcon, GitHubIcon, InstagramIcon, LinkedInIcon } from "../assets";
import Link from "../Link";
import "./Menu.css";

const MENU_TOP_OFFSET = 50;
const MENU_BACKGROUND_ANIMATION_DURATION = 500;
const MENU_ITEM_ANIMATION_DELAY = 60;

function Menu(props) {
  const node = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      // Animate background
      const backgroundNode = node.current.querySelector(".background");
      backgroundNode.style.height = "100%";
      // Animate menu items
      setTimeout(() => {
        const linkNodes = node.current.querySelectorAll(".link");
        for (let i = linkNodes.length - 1, k = 0; i >= 0; i--, k++) {
          let menuItemNode = linkNodes[i];
          setTimeout(() => {
            menuItemNode.style.top =
              i * menuItemNode.offsetHeight + MENU_TOP_OFFSET + "px";
          }, k * MENU_ITEM_ANIMATION_DELAY);
        }
      }, MENU_BACKGROUND_ANIMATION_DURATION);
    }, props.animationDelay);
  });

  return (
    <div className="menu" ref={node}>
      <div className="background"></div>
      {props.data.email && (
        <Link url={props.data.email.url}>
          <EmailIcon />
        </Link>
      )}
      {props.data.linkedIn && (
        <Link url={props.data.linkedIn.url}>
          <LinkedInIcon />
        </Link>
      )}
      {props.data.github && (
        <Link url={props.data.github.url}>
          <GitHubIcon />
        </Link>
      )}
      {props.data.instagram && (
        <Link url={props.data.instagram.url}>
          <InstagramIcon />
        </Link>
      )}
    </div>
  );
}

Menu.defaultProps = {
  animationDelay: 0,
  data: {},
};

export default Menu;
