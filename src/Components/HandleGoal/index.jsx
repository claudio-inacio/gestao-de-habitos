import { useForm } from "react-hook-form";
import { useModal } from "../../Providers/ControlModal";
import { useGoals } from "../../Providers/Metas";
import Button from "../Button";
import Input from "../Input";
import ModalCustomizer from "../Modal";

const HandleGoal = () => {
  const { register, handleSubmit } = useForm();
  const { closeModalGoalEdit, modalGoalsEdit } = useModal();
  const { updatedGoalToGroup, targetGoal } = useGoals();
  return (
    <ModalCustomizer
      isOpen={modalGoalsEdit}
      title="Editar meta"
      fn={closeModalGoalEdit}
    >
      <form
        onSubmit={handleSubmit((callback) =>
          updatedGoalToGroup(callback, targetGoal.id)
        )}
      >
        <Input
          register={register}
          name="how_much_achieved"
          placeholder="Progresso"
          type="text"
        />

        <div>
          <label>Concluido</label>
          <input type="radio" {...register("achieved")} value="true" />
          <label>Não concluido</label>
          <input type="radio" {...register("achieved")} value="false" />
        </div>

        <Button type="submit">Adicionar Meta</Button>
      </form>
    </ModalCustomizer>
  );
};

export default HandleGoal;
