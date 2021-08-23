import React from "react";

export default function Service({ title, icon, text, link }) {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p>{text}</p>
        <a className="read-more no-line" href={link}>
          Learn more <span className="fas fa-long-arrow-alt-right"></span>
        </a>
      </div>
    </div>
  );
}
