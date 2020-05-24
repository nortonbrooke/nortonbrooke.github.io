import React, { useEffect, useState } from "react";
import Body from "./Body";
import Header from "./Header";
import Menu from "./Menu";
import Separator from "./Separator";
import { Portfolio, Education, Experience, Likes } from "./sections";

import "./App.css";

const HEADER_ANIMATION_DURATION = 1080;
const BODY_ANIMATION_DURATION = 1600;

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const getData = async function () {
    setLoading(true);
    const response = await fetch("data.json");
    const data = await response.json();
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    if (data === null) {
      getData();
    }
  });

  if (loading) {
    return null;
  }

  const {
    name,
    city,
    state,
    contact,
    portfolio,
    education,
    experience,
    likes,
  } = data;

  return (
    <div className="app">
      <Menu
        data={contact}
        animationDelay={HEADER_ANIMATION_DURATION + BODY_ANIMATION_DURATION}
      />
      <Header data={{ name, city, state }} />
      <Separator animationDelay={HEADER_ANIMATION_DURATION} />
      <Body animationDelay={HEADER_ANIMATION_DURATION}>
        <Portfolio data={portfolio} />
        <Education data={education} />
        <Experience data={experience} />
        <Likes data={likes} />
      </Body>
      <Separator
        animationDelay={HEADER_ANIMATION_DURATION}
        hideAnimationDelay={BODY_ANIMATION_DURATION}
      />
    </div>
  );
}

export default App;
