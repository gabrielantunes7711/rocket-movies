import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root{
    font-size: 62.5%;
  }
  
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  body{
    background-color: ${({ theme }) => theme.colors.bodyBg};
    color: ${({ theme }) => theme.colors.primaryTextColor};
    font-family: ${({ theme }) => theme.fonts.primaryFont};
    font-size:16px;
    -webkit-font-smoothing: antialiased;
  }

  input,
  button,
  textarea{
    font: inherit;
    color: inherit;
    outline: none;
    background-color: transparent;
    border: none;
  }

  ::placeholder{
    font: inherit;
  }

  a{
    text-decoration:none;
    color:inherit;
  }

  button,
  a{
    cursor:pointer;
    transition: filter 200ms;
    background-color:transparent;
    border: none;
  }

  button:hover,
  a:hover{
    filter:brightness(0.9)
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6{
    color: #FF859B;
    font-family: ${({ theme }) => theme.fonts.titleFont};
  }

  h1{
    font-size: 4.8rem
  }

  h2{
    font-size: 3.2rem
  }

  h3{
    font-size: 2.4rem
  }

  h4{
    font-size: 1.8rem;
  }

  h5{
    font-size: 1.6rem;
  }

  h6{
    font-size: 1.4rem;
  }

  .sr-only{
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  ::-webkit-scrollbar {
    width: 0.8rem;
    height: 0.8rem;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primaryColor};;
    border-radius: 10rem;

  }
  
  ::-moz-scrollbar {
    width: 0.8rem;
    height: 0.8rem;
  }
  
  ::-moz-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primaryColor};
    border-radius: 10rem;
  }

  .swal2-popup{
    font-size: 1.6rem;
  }

  .swal2-confirm{
    background-color: ${({ theme }) => theme.colors.primaryColor} !important;
    color: ${({ theme }) => theme.colors.secondaryBgColor} !important;

    &:focus{
      box-shadow: 0 0 0 3px rgba(255, 133, 155, 0.5) !important;
    }
  }

`;
