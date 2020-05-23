import React from "react";
import { formatDate } from "../../util";

function Education(props) {
  return (
    <section className="education">
      <h3>Education</h3>
      {props.data.map((item) => (
        <div key={item.certificate}>
          <b>{item.certificate}</b>
          <div>{item.school}</div>
          <div>
            {formatDate(item.startDate)} - {formatDate(item.endDate)}
          </div>
          <div>
            {item.city}, {item.state}
          </div>
        </div>
      ))}
    </section>
  );
}

Education.defaultProps = {
  data: [],
};

export default Education;
