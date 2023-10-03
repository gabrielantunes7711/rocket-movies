import React from "react";
import { Container } from "./style";
import { ImStarEmpty, ImStarHalf, ImStarFull } from "react-icons/im";

export const StarsRating = ({ rating = 0, size }) => {
  const stars = [];

  for (let i = 0; i < Math.floor(rating); i++) {
    stars.push(<ImStarFull key={i} size={size} />);
  }

  if (rating % 1 !== 0) {
    stars.push(<ImStarHalf size={size} />);
  }

  for (let i = 0; i < 5 - Math.ceil(rating); i++) {
    stars.push(<ImStarEmpty key={i + 10} size={size} />);
  }

  return <Container>{stars}</Container>;
};
