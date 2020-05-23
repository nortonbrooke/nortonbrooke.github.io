import React from "react";
import { formatDate, getDuration } from "../../util";
import Link from "../../Link";

function Portfolio(props) {
  return (
    <section className="portfolio">
      <h3>Portfolio</h3>
      {props.data.map((item) => (
        <div key={item.name}>
          {item.url ? (
            <Link url={item.url}>
              <b>{item.name}</b> ↗️
            </Link>
          ) : (
            <b>{item.name}</b>
          )}
          <div>{item.description}</div>
          <div>
            {formatDate(item.startDate)} - {formatDate(item.endDate)} ·{" "}
            {getDuration(item.startDate, item.endDate)}
          </div>
        </div>
      ))}
    </section>
  );
}

Portfolio.defaultProps = {
  data: [],
};

export default Portfolio;
