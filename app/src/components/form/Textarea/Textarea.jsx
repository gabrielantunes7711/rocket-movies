import React from "react";
import { Container } from "./styles";

export const Textarea = ({ placeholder, id, setValue, ...rest }) => {
  return (
    <Container>
      <label htmlFor={id} className="sr-only">
        {placeholder}
      </label>
      <textarea
        id={id}
        rows="9"
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        {...rest}
      ></textarea>
    </Container>
  );
};
