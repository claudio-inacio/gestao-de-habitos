import * as yup from "yup";
import StringMasks from "../../../utils/StringMasks";

export const schema = yup.object().shape({
   username: yup
    .string()
    .required('Esse campo é obrigatório.')
    .test('cpf', 'CPF inválido', (val) => StringMasks.cpfIsValid(val))
    .min(14, 'Informe o CPF completo')
    .max(14, 'Informe o CPF completo'),
  password: yup
    .string()
    .min(6, "minimo de 6 digitos")
    .required("campo Obrigatório"),
});


export const defaultValues = {
  username: ''
}
