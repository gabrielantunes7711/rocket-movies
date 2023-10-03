import styled from "styled-components";
import { Grid } from "../../styles/Grid";

export const Container = styled.header`
  position: sticky;
  top: 0;
  padding: 2.6rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  background-color: ${({ theme }) => theme.colors.bodyBg};

  ${Grid} {
    display: flex;
    align-items: center;
    gap: 6.4rem;
  }

  h1 {
    font-size: 2.4rem;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  gap: 0.9rem;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  a {
    font-size: 1.4rem;
    font-weight: 700;
  }

  button {
    color: #948f99;
    font-size: 1.4rem;
  }

  img {
    width: 64px;
    height: 64px;
    object-fit: cover;
    object-position: center;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    border-radius: 50%;
    overflow: hidden;
  }
`;
