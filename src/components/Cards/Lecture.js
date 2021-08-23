import React from "react";
import { Link } from "react-router-dom";

import { routex } from "../../constants/routes";

export default function Lecture({ title, subtitle, id, date, image }) {
  return (
    <Link to={`${routex.LECTURES.path}/${id}`}>
      <div className="card" style={{ minHeight: "11rem" }}>
        <img
          className="quotes rounded-circle shadow"
          src={image}
          alt="alternative"
        />
        <div className="card-body">
          <div className="testimonial-author">{title}</div>
          {date && <p className="testimonial-text">{date}</p>}
          <div className="occupation">{subtitle}</div>
          <div className="pt-4"></div>
        </div>
        <div className="gradient-floor"></div>
      </div>
    </Link>
  );
}
