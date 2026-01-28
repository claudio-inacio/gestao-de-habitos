import Button from "../../../Components/Button";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  ActionsContainer,
  RemermberText,
  RgisterText,
  StyledForm,
} from "./loginFormStyle";
import { defaultValues, schema } from "./LoginFormConfig";
import InputDocument from "../../../Components/Input/document";
import InputPassword from "../../../Components/Input/password";

const LoginForm = ({ loading, handleFunction = () => {} }) => {
  const { register, handleSubmit, reset, formState } = useForm({
    mode: "onChange",
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, errors } = formState;

  return (
    <StyledForm onSubmit={handleSubmit(handleFunction)}>
      <InputDocument
        name="username"        
        disabled={loading}
        isLoading={loading}
        register={register}
        error={errors.username?.message}
      />

      <InputPassword
        name="password"
        disabled={loading}
        isLoading={loading}
        register={register}
        error={errors.password?.message}
      />
      <RemermberText>
        <Link to="/register">
          <span>Equeceu sua senha s? </span>
        </Link>
      </RemermberText>

      <ActionsContainer>
        <Button disabled={!isValid || !!loading} isLoading={!!loading}>{loading ? "Realizando Login" : "Entrar"}</Button>

        <RgisterText>
          Não tem conta?{" "}
          <Link to="/register">
            <span>Faça seu cadastro </span>
          </Link>
        </RgisterText>
      </ActionsContainer>
    </StyledForm>
  );
};

export default LoginForm;
