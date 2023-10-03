import React from "react";
import { Container, TagsWrapper } from "./styles";
import { Tag } from "../Tag/Tag";
import { StarsRating } from "../StarsRating/StarsRating";
import { Link } from "react-router-dom";
import { BiSolidEdit } from "react-icons/bi";

export const MovieCard = ({ data }) => {
  const { title, description, tags, rating, id } = data;
  const tagsArray = tags ? tags.split(",") : null;

  const excerptedDescription =
    description.length >= 270
      ? `${description.substring(0, 270)}...`
      : description;

  return (
    <Container>
      <h3>
        <Link to={`details/${id}`}>{title}</Link>
      </h3>
      <StarsRating rating={rating} size={12} />

      <p>{excerptedDescription}</p>

      {tagsArray && (
        <TagsWrapper>
          {tagsArray.map((tag, i) => (
            <Tag title={tag} key={i} />
          ))}
        </TagsWrapper>
      )}
    </Container>
  );
};
