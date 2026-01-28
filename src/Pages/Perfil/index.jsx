import Input from "../../Components/Input";
import Button from "../../Components/Button";

import { useForm } from "react-hook-form";
import { useProfile } from "../../Providers/Perfil";
import { Container, Undraw } from "./indexStyle";

import { FiUser, FiAtSign } from "react-icons/fi";
import UndrawProfile from "../../svg/undraw_profile.svg";

const Profile = () => {
  const { register, handleSubmit } = useForm();
  const { updatedCount } = useProfile();
  return (
    <Container>
      <div>
        <h2>Perfil</h2>
        <form onSubmit={handleSubmit(updatedCount)}>
          <Input
            register={register}
            name="username"
            placeholder="novo nome"
            type="text"
            icon={FiUser}
          />

          <Input
            register={register}
            name="email"
            placeholder="novo email"
            type="text"
            icon={FiAtSign}
          />

          <Button type="submit">Atualizar Perfil</Button>
        </form>
      </div>
      <Undraw>
        <img src={UndrawProfile} alt="foto undram de um perfil de um usuario" />
      </Undraw>
    </Container>
  );
};

export default Profile;
