import Input from "..";
import StringMasks from "../../../utils/StringMasks";


const InputPhone = (props) => {
  const registerField = props.register(props.name);

  return (
    <Input {...props}>
      <input
        {...registerField}
        {...props.rest}
        placeholder="teste"
        onChange={(e) => {
          e.target.value = StringMasks.formatPhone(e.target.value);
          registerField.onChange(e);
        }}
      />
    </Input>
  );
};

export default InputPhone;
