import React from "react";

export default function Member({ name, picture, roles, links }) {
  return (
    <div class="card card-center bg-transparent border-0 shadow-none">
      <img
        class="card-image rounded-circle card-main-image"
        src={picture}
        alt={name}
      />
      <div class="card-body p-2">
        <p class="testimonial-author">{name}</p>
        <p class="testimonial-text">
          {roles[0]}
          <br />
          {roles[1] ? roles[1] : ""}
        </p>
        <span class="fa-stack">
          <a href={links.website}>
            <i class="fas fa-circle fa-stack-2x"></i>
            <i class="fas fa-globe fa-stack-1x"></i>
          </a>
        </span>
        <span class="fa-stack">
          <a href={links.linkedin}>
            <i class="fas fa-circle fa-stack-2x"></i>
            <i class="fab fa-linkedin fa-stack-1x"></i>
          </a>
        </span>
        <span class="fa-stack">
          <a href={links.twitter}>
            <i class="fas fa-circle fa-stack-2x"></i>
            <i class="fab fa-twitter fa-stack-1x"></i>
          </a>
        </span>
      </div>
    </div>
  );
}
