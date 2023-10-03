import React, { useEffect, useState } from "react";
import {
  Container,
  ContentWrapper,
  TagsWrapper,
  ButtonsWrapper,
} from "./styles";
import { Header } from "../../components/Header/Header";
import { Grid } from "../../styles/Grid";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { Input } from "../../components/form/Input/Input";
import { Textarea } from "../../components/form/TextArea/Textarea";
import { NewTag } from "../../components/NewTag/NewTag";
import { Button } from "../../components/form/Button/Button";
import { api } from "../../services/api";
import Swal from "sweetalert2";

export const New = () => {
  const params = useParams();
  const navigate = useNavigate();
  const noteId = params.id;

  const [movieNote, setMovieNote] = useState(null);
  const [tags, setTags] = useState([]);
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [newTag, setNewTag] = useState("");

  async function getMovieNote() {
    const response = await api.get(`movie_notes/${noteId}`);

    setMovieNote(response.data);
  }

  async function validateSubmission() {
    if (!title) {
      Swal.fire({
        title: "Não foi possível cadastrar!",
        text: "Por favor, insira um título.",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return true;
    }

    if (!rating) {
      Swal.fire({
        title: "Não foi possível cadastrar!",
        text: "Por favor, insira uma nota para o filme.",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return true;
    }

    if (!description) {
      Swal.fire({
        title: "Não foi possível cadastrar!",
        text: "Por favor, insira uma descrição para o filme.",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return true;
    }

    if (newTag) {
      const result = await Swal.fire({
        title: "Existem tags não salvas!",
        text: "Tem certeza que deseja continuar?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sim",
        cancelButtonText: "Não",
      });

      if (!result.isConfirmed) return true;
    }

    return false;
  }

  function cleanStates() {
    setTags([]);
    setTitle("");
    setRating("");
    setDescription("");
    setNewTag("");
  }

  function handleAddTag() {
    if (!newTag) return;

    setTags([...tags, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(value) {
    setTags(tags.filter((tag) => tag !== value));
  }

  async function handleSaveMovieNote() {
    const submissionIsInvalid = await validateSubmission();

    if (submissionIsInvalid) return;

    api
      .post("/movie_notes", { tags, title, rating, description })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Filme cadastrado com sucesso!",
        });
        cleanStates();
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  }

  async function handleUpdateMovieNote() {
    if (!validateSubmission()) return;

    api
      .put(`/movie_notes/${noteId}`, { tags, title, rating, description })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Filme atualizado com sucesso!",
        });

        navigate(`/details/${noteId}`);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  }

  async function handleDeleteMovieNote() {
    api
      .delete(`/movie_notes/${noteId}`)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Filme deletado com sucesso!",
        });
        navigate("/");
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  }

  useEffect(() => {
    if (!noteId) return;
    getMovieNote();
  }, []);

  useEffect(() => {
    if (!movieNote) return;

    if (movieNote.tags) {
      setTags(movieNote.tags.split(","));
    }

    setTitle(movieNote.title);
    setRating(movieNote.rating);
    setDescription(movieNote.description);
  }, [movieNote]);

  return (
    <Container>
      <Header />

      <ContentWrapper>
        <Grid>
          <Link to={-1}>
            <BiArrowBack /> Voltar
          </Link>

          <h2>{!noteId ? "Novo file" : "Atualizar filme"}</h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();

              if (noteId) {
                handleUpdateMovieNote();
              } else {
                handleSaveMovieNote();
              }
            }}
          >
            <div>
              <Input
                id="title"
                placeholder="Título"
                setValue={setTitle}
                value={title}
              />
              <Input
                type="number"
                min="0"
                max="5"
                id="rating"
                placeholder="Sua nota (de 0 a 5)"
                setValue={setRating}
                value={rating}
              />

              <Textarea
                id="description"
                placeholder="Descrição"
                setValue={setDescription}
                value={description}
              />
            </div>

            <span>Tags</span>

            <TagsWrapper>
              <NewTag
                isNew
                setValue={setNewTag}
                onClick={handleAddTag}
                value={newTag}
              />

              {tags.map((tag, i) => (
                <NewTag
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                  key={i}
                />
              ))}
            </TagsWrapper>

            <ButtonsWrapper>
              {noteId && (
                <Button type="button" $alt onClick={handleDeleteMovieNote}>
                  Excluir filme
                </Button>
              )}
              <Button type="submit">Salvar alterações</Button>
            </ButtonsWrapper>
          </form>
        </Grid>
      </ContentWrapper>
    </Container>
  );
};
