import Button from "../../../../Components/Button";
import { AiOutlineUser } from "react-icons/ai";
import imageExplicative from "../../../../images/gesta-habitos-explicative.png";
import { FaUserEdit } from "react-icons/fa";
import {
  BoxButton,
  SectionContainer,
  DivImage,
  HomeTitleContainer,
  BoxLoginButton,
} from "./indexStyle";
import { useHistory } from "react-router-dom";

const HomeTitle = () => {
  const history = useHistory();
  return (
    <HomeTitleContainer>
      <SectionContainer>
        <h2>Gerencie seus hábitos e melhore sua rotina </h2>
        <span>
          Planeje os hábitos que você deseja adotar e organize sua rotina de
          forma mais eficiente.
        </span>
        <BoxButton>
          <Button onClick={() => history.push("/register")}>
            Cadastre-se
            <FaUserEdit size="15" color="var(--color-second-light)" />
          </Button>
          <Button onClick={() => history.push("/login")}>
            Login
            <AiOutlineUser size="15" color="var(--color-second-light)" />
          </Button>
        </BoxButton>
      </SectionContainer>
      <DivImage>
             <img
          src={imageExplicative}
          alt="imagem de um celular do undraw com um usuario ao lado"
        />
      </DivImage>
    </HomeTitleContainer>
  );
};

export default HomeTitle;
