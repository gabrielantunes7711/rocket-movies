import styled from "styled-components";
import { Container as Input } from "../../components/form/Input/styles";

export const Container = styled.div`
  & > div {
    padding-block: 6.3rem;
    background-color: ${({ theme }) => theme.colors.primaryBgColor};

    a {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      color: ${({ theme }) => theme.colors.primaryColor};
    }
  }

  form {
    position: relative;
    top: -9.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    width: 100%;
    max-width: 34rem;
    margin: 0 auto;
  }

  ${Input} {
    &:nth-of-type(3),
    &:nth-of-type(5) {
      margin-bottom: 1.6rem;
    }
  }
`;
export const Avatar = styled.div`
  position: relative;
  margin-bottom: 6.4rem;

  img {
    width: 18.6rem;
    height: 18.6rem;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
  }

  label {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5rem;
    height: 5rem;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.tertiaryBgColor};
    cursor: pointer;
    transition: all ease 300ms;

    &:hover {
      filter: brightness(0.9);
    }
  }

  input {
    display: none;
  }
`;
