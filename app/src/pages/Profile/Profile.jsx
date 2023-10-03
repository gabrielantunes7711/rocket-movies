import React, { useState } from "react";
import { Container, Avatar } from "./styles";
import { Grid } from "../../styles/Grid";
import { Link } from "react-router-dom";
import { BiArrowBack, BiUser } from "react-icons/bi";
import { LuLock } from "react-icons/lu";
import { AiOutlineCamera } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { Input } from "../../components/form/Input/Input";
import { Button } from "../../components/form/Button/Button";
import profilePlaceholder from "../../assets/avatar_placeholder.svg";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

export const Profile = () => {
  const { user, updateProfile } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : profilePlaceholder;

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  function handleUpdateProfile() {
    const updatedData = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword,
    };

    const userUpdated = Object.assign(user, updatedData);
    updateProfile({ user: userUpdated, avatarFile });
  }

  function handleChangeAvatar(e) {
    const file = e.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <div>
        <Grid>
          <Link to={-1}>
            <BiArrowBack />
            Voltar
          </Link>
        </Grid>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdateProfile();
        }}
      >
        <Avatar>
          <img src={avatar} alt="" />

          <label htmlFor="profilePic">
            <AiOutlineCamera size={20} />
            <input type="file" id="profilePic" onChange={handleChangeAvatar} />
          </label>
        </Avatar>

        <Input
          icon={BiUser}
          placeholder="Nome"
          id="name"
          value={name}
          setValue={setName}
        />

        <Input
          type="email"
          icon={MdOutlineEmail}
          placeholder="E-mail"
          id="email"
          value={email}
          setValue={setEmail}
        />

        <Input
          type="password"
          icon={LuLock}
          placeholder="Senha Atual"
          id="oldPassword"
          setValue={setOldPassword}
        />

        <Input
          type="password"
          icon={LuLock}
          placeholder="Nova Senha"
          id="newPassword"
          setValue={setNewPassword}
        />

        <Button type="submit">Salvar</Button>
      </form>
    </Container>
  );
};
