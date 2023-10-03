import React from "react";
import { Container, FormWrapper } from "./styles";
import { Input } from "../../components/form/Input/Input";
import { MdOutlineEmail } from "react-icons/md";
import { BiUser, BiArrowBack } from "react-icons/bi";
import { LuLock } from "react-icons/lu";
import { Button } from "../../components/form/Button/Button";
import { Link } from "react-router-dom";
import signInBg from "../../assets/siginBg.jpg";

export const SignUp = () => {
  return (
    <Container>
      <FormWrapper>
        <div>
          <h1>RocketMovies</h1>
          <span>Aplicação para acompanhar tudo que assistir.</span>

          <h2>Crie sua conta</h2>

          <form>
            <Input icon={BiUser} placeholder="Nome" id="name" />

            <Input
              type="email"
              icon={MdOutlineEmail}
              placeholder="E-mail"
              id="email"
            />

            <Input
              type="password"
              icon={LuLock}
              placeholder="Senha"
              id="password"
            />

            <Input
              type="password"
              icon={LuLock}
              placeholder="Confirme a Senha"
              id="passwordConfirmation"
            />

            <Button type="submit">Cadastrar</Button>
          </form>

          <Link to="/">
            <BiArrowBack />
            Voltar para o login
          </Link>
        </div>
      </FormWrapper>

      <img src={signInBg} alt="" />
    </Container>
  );
};
