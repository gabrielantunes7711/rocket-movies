import React, { useState } from "react";
import { Container } from "./styles";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export const Input = ({
  placeholder,
  id,
  icon: Icon,
  type = "text",
  setValue,
  ...rest
}) => {
  const [inputType, setInputType] = useState(type);
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const isPassword = type === "password";

  function handleShowPassword() {
    if (inputType === "password") {
      setInputType("text");
      setPasswordVisibility(!passwordVisibility);
    } else {
      setInputType("password");
      setPasswordVisibility(!passwordVisibility);
    }
  }

  return (
    <Container>
      {Icon && <Icon size="20" />}

      <label htmlFor={id} className="sr-only">
        {placeholder}
      </label>
      <input
        type={inputType}
        id={id}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        {...rest}
      />

      {isPassword && (
        <button type="button" onClick={handleShowPassword}>
          {passwordVisibility ? (
            <AiOutlineEyeInvisible size="25" />
          ) : (
            <AiOutlineEye size="25" />
          )}
        </button>
      )}
    </Container>
  );
};
