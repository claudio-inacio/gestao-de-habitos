import { useForm } from "react-hook-form";
import Button from "../../Components/Button";
import HandleActivities from "../../Components/HandleActivities";
import HandleGoal from "../../Components/HandleGoal";
import Input from "../../Components/Input";
import ListActivities from "../../Components/ListActivities";
import ListGoals from "../../Components/ListGoals";

import ModalCustomizer from "../../Components/Modal";
import { useModal } from "../../Providers/ControlModal";

import { useGroup } from "../../Providers/Grupos";
import { useGoals } from "../../Providers/Metas";
import { useActivities } from "../../Providers/Atividades";
import { ContainerInfor, ContainerLists } from "./indexStyle";

const GroupInformation = () => {
  const { member, targetGroup, getInOnGroup, getOutOnGroup } = useGroup();
  const { createGoalToGroup } = useGoals();
  const { createActivitiesToGroup } = useActivities();
  const {
    modalGoalsAdd,
    controlModalGoalsAdd,
    modalActivitiesAdd,
    controlModalActivitiesAdd,
  } = useModal();

  const { register, handleSubmit } = useForm();
  return (
    <>
      <ContainerInfor member={member}>
        <h1>{targetGroup.name}</h1>
        <div>
          <div>
            <p>
              <strong>Descrição:</strong> {targetGroup.description}
            </p>
            <p>
              <strong>Categoria:</strong> {targetGroup.category}
            </p>
          </div>
          <Button
            onClick={() => {
              member ? getOutOnGroup() : getInOnGroup();
            }}
          >
            {member ? "Sair" : "Entrar"}
          </Button>
        </div>
      </ContainerInfor>
      <ContainerLists></ContainerLists>

      <ModalCustomizer
        isOpen={modalGoalsAdd}
        title="Adicionar uma meta"
        fn={controlModalGoalsAdd}
      >
        <form
          onSubmit={handleSubmit((callback) =>
            createGoalToGroup(callback, targetGroup.id)
          )}
        >
          <Input
            register={register}
            name="title"
            placeholder="nome da meta"
            type="text"
          />
          <select {...register("difficulty")}>
            <option value="Fácil">Fácil</option>
            <option value="Medio">Medio</option>
            <option value="Dificil">Dificil</option>
          </select>
          <Button type="submit">Adicionar Meta</Button>
        </form>
      </ModalCustomizer>

      <ModalCustomizer
        isOpen={modalActivitiesAdd}
        title="Adicionar uma atividade"
        fn={controlModalActivitiesAdd}
      >
        <form
          onSubmit={handleSubmit((callback) =>
            createActivitiesToGroup(callback, targetGroup.id)
          )}
        >
          <Input
            register={register}
            name="title"
            placeholder="nome da atividade"
            type="text"
          />
          <Input
            register={register}
            name="realization_time"
            type="datetime-local"
          />
          <Button type="submit">Adicionar Atividade</Button>
        </form>
      </ModalCustomizer>
      <HandleGoal />
      <HandleActivities />
      <ContainerLists>
        <ListGoals />
        <ListActivities />
      </ContainerLists>
    </>
  );
};

export default GroupInformation;
