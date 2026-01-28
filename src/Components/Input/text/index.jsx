import Input from "..";



const InputText = (props) => {
  const registerField = props.register(props.name);
  return (
    <Input icon={props.icon } {...props}>
      <input
        {...registerField}
        {...props}        
        label={props.label}
        placeholder={props.placeholder}
      />
    </Input>
  );
};

export default InputText;
