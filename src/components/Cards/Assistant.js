import React from "react";

export default function Assistant({ name, picture }) {
  return (
    <div class="card bg-transparent border-0 shadow-none">
      <img
        class="card-image rounded-circle card-sub-image"
        src={picture}
        alt={name}
      />
      <div class="card-body p-2">
        <p class="testimonial-author">{name}</p>
      </div>
    </div>
  );
}
