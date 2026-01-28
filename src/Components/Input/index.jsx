import { Container, InputContainer } from "./indexStyle";
import { Spinner } from "./spinner/indexStyle";

const Input = ({
  label,
  children = null,
  icon: Icon,
  register,
  exibeLoader = null,
  name,
  error,
  ...rest
}) => {
  const registerField = register(name);

  return (
    <Container>
      <InputContainer disabled={rest.disabled}>
        {Icon && <Icon size={20} />}
        {children || <input autoComplete="off" {...registerField} {...rest} />}

        {rest.isLoading && exibeLoader && <Spinner />}
      </InputContainer>
      {!!error && <span>{error}</span>}
    </Container>
  );
};

export default Input;
