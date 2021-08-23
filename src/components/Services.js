import React from "react";
import Service from "./Cards/Service";

let services = [
  {
    title: "Evaluate opportunities",
    icon: '<span className="far fa-clipboard"></span>',
    text: "Vulputate nibh feugiat. Morbi pellent diam nec libero lacinia, sed ultrices velit scelerisque. Nunc placerat justo sem",
    link: "#",
  },
  {
    title: "Evaluate opportunities",
    icon: '<span className="far fa-clipboard"></span>',
    text: "Vulputate nibh feugiat. Morbi pellent diam nec libero lacinia, sed ultrices velit scelerisque. Nunc placerat justo sem",
    link: "#",
  },
  {
    title: "Evaluate opportunities",
    icon: '<span className="far fa-clipboard"></span>',
    text: "Vulputate nibh feugiat. Morbi pellent diam nec libero lacinia, sed ultrices velit scelerisque. Nunc placerat justo sem",
    link: "#",
  },
];

export default function Services() {
  return (
    <div id="services" className="cards-1 bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>Explore our services</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            {services.map((s) => (
              <Service
                key={s.title}
                title={s.title}
                icon={s.icon}
                text={s.text}
                link={s.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
