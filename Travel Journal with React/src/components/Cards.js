import React from "react";

export default function Card(props) {
  return (
    <div className="contact-card">
      <img className="image" src={`${props.coverImg}`} alt="" />
      <div className="card-info">
        <div className="locationimg">
          <img className="location-image" src="locationn.webp" alt="" />
          <p>{props.location}</p>
        </div>
        <h3 className="name">{props.name}</h3>
        <p className="info">{props.info}</p>
      </div>
    </div>
  );
}
