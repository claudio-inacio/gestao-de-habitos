import Input from "..";
import { AiOutlineLock } from "react-icons/ai";

const InputPassword = (props) => {
  const registerField = props.register(props.name);
  return (
    <Input icon={AiOutlineLock} {...props}>
      <input
        autoComplete="off"
        {...registerField}
        {...props}
        type="password"
        minLength={6}
        label={props.label || "Senha"}
        placeholder={props.placeholder || "Senha de Acesso"}
      />
    </Input>
  );
};

export default InputPassword;
