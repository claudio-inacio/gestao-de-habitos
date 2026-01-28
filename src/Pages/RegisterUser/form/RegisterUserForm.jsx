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
import { defaultValues, schema } from "./RegisterUserFormConfig";
import InputDocument from "../../../Components/Input/document";
import InputPassword from "../../../Components/Input/password";
import { AiOutlineUser } from "react-icons/ai";


import InputText from "../../../Components/Input/text";

const RegisterUserForm = ({ loading, handleFunction = () => {} }) => {
  const { register, handleSubmit, reset, formState } = useForm({
    mode: "onChange",
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, errors } = formState;

  return (
    <StyledForm onSubmit={handleSubmit(handleFunction)}>
      <InputText
        name="name"   
        icon={AiOutlineUser }
        // label='Nome de Usuário' 
        placeholder='Nome de Usuário'    
        minlength={3}
        disabled={loading}
        isLoading={loading}
        register={register}
        error={errors.name?.message}
      />
      <InputDocument
        name="document"        
        disabled={loading}
        isLoading={loading}
        register={register}
        error={errors.document?.message}
      />

      <InputPassword
        name="password"
        disabled={loading}
        isLoading={loading}
        register={register}
        error={errors.password?.message}
      />
      <ActionsContainer>
        <Button disabled={!isValid || !!loading} isLoading={!!loading}>{loading ? "Cadastrando Usuário" : "Cadastrar"}</Button>

        <RgisterText>
          Ja possui conta?{" "}
          <Link to="/register">
            <span>Login </span>
          </Link>
        </RgisterText>
      </ActionsContainer>
    </StyledForm>
  );
};

export default RegisterUserForm;
