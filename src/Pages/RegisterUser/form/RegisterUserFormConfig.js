import * as yup from "yup";
import StringMasks from "../../../utils/StringMasks";

export const schema = yup.object().shape({
  document: yup
    .string()
    .required("Esse campo é obrigatório.")
    .test("cpf", "CPF inválido", (val) => StringMasks.cpfIsValid(val))
    .min(14, "Informe o CPF completo")
    .max(14, "Informe o CPF completo"),
  name: yup
    .string()
    .min(3, "minimo de 3 digitos")
    .required("campo Obrigatório"),
  password: yup
    .string()
    .min(6, "minimo de 6 digitos")
    .required("campo Obrigatório"),
});

export const defaultValues = {
  name: "",
  document: "",
  password: "",
};
