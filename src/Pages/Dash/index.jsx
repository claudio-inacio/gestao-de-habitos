import {
  ContainerCreateHbits,
  ContainerFomr,
  ContainerPageHabits,
  DivButton,
  InformationsHabits,
} from "./indexStyle";

import imagem from "../../svg/imageDashboard.svg";
import Button from "../../Components/Button";
import { useContext, useState } from "react";
import ModalCustomizer from "../../Components/Modal";
import Input from "../../Components/Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginContext } from "../../Providers/Login";
import api from "../../Services";
import { toast } from "react-toastify";
import ListHabits from "../../Components/ListHabits";
import HandleHabits from "../../Components/HandleHabits";

const Dashboard = () => {
  const [showElement, setShowElement] = useState(false);
  const showOrHide = () => setShowElement(!showElement);

  const { userId, token } = useContext(LoginContext);

  const schema = yup.object().shape({
    title: yup.string().required("Campo Obrigatório"),
    category: yup.string().required("Campo Obrigatório"),
    difficulty: yup.string().required("Selecione uma opção"),
    frequency: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = (data) => {
    console.log(data, userId);
    api
      .post(
        "/habits/",
        {
          title: data.title,
          category: data.category,
          difficulty: data.difficulty,
          frequency: data.frequency,
          achieved: false,
          how_much_achieved: 0,
          user: userId,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((_) => {
        reset();
        toast.success("Sucesso ao criar o habito");
      })
      .catch((err) => toast.error("Erro ao criar Habito"));
  };

  return (
    <ContainerPageHabits>
      <ContainerCreateHbits>
        <InformationsHabits>
          <h1>Organize e desenvolva seus habitos</h1>
          <p>
            Habitos são ações que tomamos com frequência na rotina, tornando
            essa ação natural depois de muito tempo de repetição, porém
            desenolver um habito é algo dificil e muitas vezes não conseguimos
            ou por não ter uma certa gestão sobre esse habito ou até porque
            esquecemos. Aqui você pode criar os habitos que você deseja
            desenvolver e ter essa gestão
          </p>
          <img src={imagem} alt="" />
        </InformationsHabits>
        <ContainerFomr>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <Input
              placeholder={"Nome do Habito"}
              error={errors.title?.message}
              label="Title"
              name="title"
              register={register}
            />

            <select name="nível" {...register("difficulty")}>
              <option value="Facíl">Facíl</option>
              <option value="Médio">Médio</option>
              <option value="Dificíl">Dificíl</option>
            </select>
            <Input
              placeholder={"Categoria"}
              error={errors.category?.message}
              label="Categoria"
              name="category"
              register={register}
            />
            <Input
              placeholder={"Frequencia"}
              error={errors.frequency?.message}
              label="Frequencia"
              name="frequency"
              register={register}
            />
            <Button type="submit">Criar</Button>
          </form>
        </ContainerFomr>
      </ContainerCreateHbits>

      {showElement ? (
        <ModalCustomizer
          title="Cadastre seus Habits"
          isOpen={showOrHide}
          fn={showOrHide}
        >
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <Input
              placeholder={"Nome do Habito"}
              error={errors.title?.message}
              label="Title"
              name="title"
              register={register}
            />

            <select name="nível" {...register("difficulty")}>
              <option value="Facíl">Facíl</option>
              <option value="Médio">Médio</option>
              <option value="Dificíl">Dificíl</option>
            </select>
            <Input
              placeholder={"Categoria"}
              error={errors.category?.message}
              label="Categoria"
              name="category"
              register={register}
            />
            <Input
              placeholder={"Frequencia"}
              error={errors.frequency?.message}
              label="Frequencia"
              name="frequency"
              register={register}
            />
            <Button type="submit">Criar</Button>
          </form>
        </ModalCustomizer>
      ) : null}
      <DivButton>
        <Button onClick={showOrHide}>Adicionar habito +</Button>
      </DivButton>

      <ListHabits />
      <HandleHabits />
    </ContainerPageHabits>
  );
};
export default Dashboard;
