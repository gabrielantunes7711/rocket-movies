import React, { useState } from "react";
import { Container, FormWrapper } from "./styles";
import { Input } from "../../components/form/Input/Input";
import { MdOutlineEmail } from "react-icons/md";
import { LuLock } from "react-icons/lu";
import { Button } from "../../components/form/Button/Button";
import { Link } from "react-router-dom";
import signInBg from "../../assets/siginBg.jpg";
import { useAuth } from "../../hooks/auth";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <FormWrapper
        onSubmit={(e) => {
          e.preventDefault();
          handleSignIn();
        }}
      >
        <div>
          <h1>RocketMovies</h1>
          <span>Aplicação para acompanhar tudo que assistir.</span>

          <h2>Faça seu login</h2>

          <form onSubmit={handleSignIn}>
            <Input
              type="email"
              icon={MdOutlineEmail}
              placeholder="E-mail"
              id="email"
              setValue={setEmail}
            />
            <Input
              type="password"
              icon={LuLock}
              placeholder="Senha"
              id="password"
              setValue={setPassword}
            />

            <Button type="submit">Entrar</Button>
          </form>

          <Link to="/register">Criar conta</Link>
        </div>
      </FormWrapper>

      <img src={signInBg} alt="" />
    </Container>
  );
};
