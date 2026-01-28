import {
  Container,
  ContainerForm,
  ContainerLogin,
  DivImage,
  DivTitleMobile,
} from "./indexStyle";
import { Redirect } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../Providers/Login";
import LoginForm from "./form/LoginForm";

const Login = () => {
  const { onSubmitFunction, autenticacao, loadingLogin } = useContext(LoginContext);


  if (autenticacao) {
    return <Redirect to="/dashboard" />;
  }

  console.log({loadingLogin})

  return (
    <Container>
      <ContainerLogin>
        <DivTitleMobile>
          <h1>Bem Vindo(a)</h1>
          <p>Acompanhe seus hábitos e evolua todos os dias.</p>
        </DivTitleMobile>
        <ContainerForm>
          <h3>Login</h3>
          <LoginForm loading={loadingLogin} handleFunction={onSubmitFunction} />
        </ContainerForm>
      </ContainerLogin>
      <DivImage/>
      
    </Container>
  );
};

export default Login;
