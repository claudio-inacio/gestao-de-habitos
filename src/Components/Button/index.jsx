import { Spinner } from "../Input/spinner/indexStyle";
import { ButtonComponent } from "./indexStyle";

const Button = ({ children, disabled= false, isLoading  = false, ...rest }) => {
  return (
    <ButtonComponent {...rest} isLoading disabled={disabled || isLoading}>
      {children}
      {isLoading && <Spinner />}
    </ButtonComponent>
  );
};

export default Button;
