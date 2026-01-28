import { useForm } from "react-hook-form";
import { useActivities } from "../../Providers/Atividades";
import { useModal } from "../../Providers/ControlModal";
import Button from "../Button";
import Input from "../Input";
import ModalCustomizer from "../Modal";

const HandleActivities = () => {
  const { register, handleSubmit } = useForm();
  const { closeModalActivitiesEdit, modalActivitiesEdit } = useModal();
  const { updatedActivitiesToGroup, targetActivities } = useActivities();
  return (
    <ModalCustomizer
      isOpen={modalActivitiesEdit}
      title="Editar Atividade"
      fn={closeModalActivitiesEdit}
    >
      <form
        onSubmit={handleSubmit((callback) =>
          updatedActivitiesToGroup(callback, targetActivities.id)
        )}
      >
        <Input
          register={register}
          name="title"
          placeholder="Atividade"
          type="text"
        />

        <Button type="submit">Atualizar</Button>
      </form>
    </ModalCustomizer>
  );
};

export default HandleActivities;
