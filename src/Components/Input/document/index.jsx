import Input from "..";
import StringMasks from "../../../utils/StringMasks";
import { AiOutlineUser } from "react-icons/ai";

const InputDocument = (props) => {
  const registerField = props.register(props.name);
  return (
    <Input icon={AiOutlineUser} {...props}>
      <input
        label="CPF"
        {...registerField}
        {...props}
        minLength={14}
        maxLength={14}
        placeholder={props.placeholder || "CPF de Login"}
        onChange={(e) => {
          e.target.value = StringMasks.formataCPF(e.target.value);
          registerField.onChange(e);
        }}
      />
    </Input>
  );
};

export default InputDocument;
