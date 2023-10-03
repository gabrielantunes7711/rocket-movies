import React, { useState, useEffect } from "react";
import { CardsWrapper, Container, SectionHeader } from "./styles";
import { Header } from "../../components/Header/Header";
import { Button } from "../../components/form/Button/Button";
import { BsPlusLg } from "react-icons/bs";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { Grid } from "../../styles/Grid";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";

export const Home = () => {
  const navigate = useNavigate();
  const [movieNotes, setMovieNotes] = useState(null);

  async function getMovieNotes() {
    const response = await api.get("movie_notes");

    setMovieNotes(response.data);
  }

  useEffect(() => {
    getMovieNotes();
  }, []);

  console.log(movieNotes);

  if (movieNotes === null) return;

  return (
    <Container>
      <Header />

      <Grid>
        <SectionHeader>
          <h2>Meus filmes</h2>
          <Button onClick={() => navigate("/new")}>
            <BsPlusLg size="20" />
            Adicionar filme
          </Button>
        </SectionHeader>

        <CardsWrapper>
          <div>
            {movieNotes.map(({ description, tags, title, rating, id }) => {
              const data = {
                title,
                description,
                tags,
                rating,
                id,
              };

              return <MovieCard data={data} key={id} />;
            })}
          </div>
        </CardsWrapper>
      </Grid>
    </Container>
  );
};
