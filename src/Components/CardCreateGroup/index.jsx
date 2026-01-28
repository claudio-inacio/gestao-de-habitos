import Input from "../Input";
import { Form, Container,FormHeader, IconFormHeader,CenterButton } from "./indexStyle";
import * as yup from "yup";
import Button from '../Button';
import{useForm} from 'react-hook-form';
import{HiUserGroup} from "react-icons/hi";
import { yupResolver } from "@hookform/resolvers/yup";
import {useGroup} from "../../Providers/Grupos";

const CreateGroup = () =>{
    const formShema = yup.object().shape({
        name: yup.string().required("Campo obrigatório"),
        description: yup.string().required("Campo obrigatório"),
        category: yup.string().required("Campo obrigatório"),
    });
   
    const {functionCreateGroup} = useGroup();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(formShema),
      });
    
    return (
          <Container>
          
          <Form onSubmit={handleSubmit(functionCreateGroup)}>
               <FormHeader>
                <p>Criar Grupo</p>
                <IconFormHeader>
                  <HiUserGroup size={15} color="black" />
                </IconFormHeader>
               </FormHeader>
              <Input
              name="name"
              type="text"
              placeholder="Nome do Grupo"
              register={register}
              error={errors.name?.message}
            />
             <Input
              name="description"
              type="text"
              placeholder="Descrição do Grupo"
              register={register}
              error={errors.description?.message}
            />
             <Input
              name="category"
              type="text"
              placeholder="Categoria do Grupo"
              register={register}
              error={errors.category?.message}
            />
            <CenterButton>
            <Button type="submit">Criar Grupo <HiUserGroup color="white" /> </Button>
            </CenterButton>
          </Form>
          </Container>
    )
}

export default CreateGroup;