import React from "react";
import { Link } from "react-router-dom";
import styleCard from "./Card.module.css";

export default function Card({ name, image, id }) {
  return (
    <Link to={`/cruises/${id}`} className={styleCard.container}>
     <h4>{name}</h4>
     <img src={image} alt="" />
    </Link>
  );
}
