import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;

  & > img {
    flex: 1;
    object-fit: cover;
    object-position: center;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 63.7rem;
  padding: 2rem;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    max-width: 34.4rem;
  }

  span {
    color: ${({ theme }) => theme.colors.secondaryTextColor};
    font-size: 1.4rem;
    margin-bottom: 4.7rem;
  }

  h2 {
    margin: 0 0 4.7rem 0.7rem;
    color: ${({ theme }) => theme.colors.primaryTextColor};
    font-size: 2.4rem;
    font-weight: 500;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    width: 100%;
    margin-bottom: 4.3rem;

    button[type="submit"] {
      margin-top: 1.7rem;
    }
  }

  a {
    margin: 0 auto;
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`;
