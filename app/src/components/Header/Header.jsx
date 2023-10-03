import React from "react";
import { Container, Profile } from "./styles";
import { Input } from "../../components/form/Input/Input";
import { Link } from "react-router-dom";
import profilePlaceholder from "../../assets/avatar_placeholder.svg";
import { Grid } from "../../styles/Grid";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

export const Header = () => {
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : profilePlaceholder;

  return (
    <Container>
      <Grid>
        <h1>RocketMovies</h1>

        <Input id="searchMovie" placeholder="Pesquisar pelo título" />

        <Profile>
          <div>
            <Link to="/profile">{user.name}</Link>
            <button onClick={signOut}>sair</button>
          </div>

          <Link to="/profile">
            <img src={avatarUrl} alt="Foto de usuário" />
          </Link>
        </Profile>
      </Grid>
    </Container>
  );
};
