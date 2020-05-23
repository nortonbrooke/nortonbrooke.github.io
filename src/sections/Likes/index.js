import React from "react";

function Likes(props) {
  return (
    <section className="likes">
      <h3>Things I Enjoy</h3>
      <div className="data-item">
        {props.data.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </section>
  );
}

Likes.defaultProps = {
  data: [],
};

export default Likes;
