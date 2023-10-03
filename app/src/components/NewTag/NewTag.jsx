import React from "react";
import { Container } from "./styles";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";

export const NewTag = ({ value, isNew, setValue, onClick }) => {
  return (
    <Container $isNew={isNew}>
      {isNew ? (
        <>
          <input
            value={value}
            placeholder="Nova Tag"
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="button" onClick={onClick}>
            <AiOutlinePlus size={20} />
          </button>
        </>
      ) : (
        <>
          <span>{value}</span>
          <button type="button" onClick={onClick}>
            <AiOutlineClose size={20} />
          </button>
        </>
      )}
    </Container>
  );
};
