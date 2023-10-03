import React, { useState, useEffect } from "react";
import {
  Container,
  TitleWrapper,
  AuthorInfo,
  TagsWrapper,
  ContentWrapper,
} from "./styles";
import profilePlaceholder from "../../assets/avatar_placeholder.svg";
import { Header } from "../../components/Header/Header";
import { Link, useParams, useNavigate } from "react-router-dom";
import { BiArrowBack, BiSolidEdit } from "react-icons/bi";
import { CiClock2 } from "react-icons/ci";
import { StarsRating } from "../../components/StarsRating/StarsRating";
import { Tag } from "../../components/Tag/Tag";
import { Grid } from "../../styles/Grid";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import moment from "moment";
import { Button } from "../../components/form/Button/Button";

export const Details = () => {
  const { user } = useAuth();
  const [movieNote, setMovieNote] = useState(null);
  const navigate = useNavigate();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : profilePlaceholder;

  const params = useParams();

  async function getMovie() {
    const response = await api.get(`movie_notes/${params.id}`);

    setMovieNote(response.data);
  }

  useEffect(() => {
    getMovie();
  }, []);

  if (movieNote === null) return;

  return (
    <Container>
      <Header />

      <Grid>
        <Link to="/">
          <BiArrowBack /> Voltar
        </Link>

        <ContentWrapper>
          <div>
            <TitleWrapper>
              <h2>{movieNote.title}</h2>
              <StarsRating rating={movieNote.rating} />

              <Button onClick={() => navigate(`/update/${params.id}`)}>
                <BiSolidEdit size={20} />
                editar
              </Button>
            </TitleWrapper>

            <AuthorInfo>
              <div>
                <img src={avatarUrl} alt="Imagem do usuário" />
                <span>Por {user.name}</span>
              </div>
              <div>
                <CiClock2 />
                <span>
                  {moment(movieNote.created_at).format("DD/MM/YYYY [às] HH:mm")}
                </span>
              </div>
            </AuthorInfo>

            {movieNote.tags && (
              <TagsWrapper>
                {movieNote.tags.split(",").map((tag, i) => (
                  <Tag title={tag} key={i} />
                ))}
              </TagsWrapper>
            )}

            <p>{movieNote.description}</p>
          </div>
        </ContentWrapper>
      </Grid>
    </Container>
  );
};
