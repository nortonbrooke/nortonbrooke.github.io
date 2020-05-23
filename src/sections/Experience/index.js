import React from "react";
import { formatDate, getDuration } from "../../util";

function Experience(props) {
  return (
    <section className="experience">
      <h3>Experience</h3>
      {props.data.map((item) => (
        <div key={item.company}>
          <b>{item.title}</b>
          <div>{item.company}</div>
          <div>
            {formatDate(item.startDate)} - {formatDate(item.endDate)} ·{" "}
            {getDuration(item.startDate, item.endDate)}
          </div>
          <div>
            {item.city}, {item.state}
          </div>
        </div>
      ))}
    </section>
  );
}

Experience.defaultProps = {
  data: [],
};

export default Experience;
