import {
  ButtonInfoContentEditEndDelet,
  Container,
  GroupCode,
  Title,
  WhenWillItBeDone,
} from "./indexStyle";
import { useModal } from "../../Providers/ControlModal";
import { useActivities } from "../../Providers/Atividades";

const CardActivities = ({ activities }) => {
  const { controlModalActivitiesEdit } = useModal();
  const { deleteActivitiesToGroup } = useActivities();
  return (
    <Container>
      <Title>{activities.title}</Title>
      <WhenWillItBeDone>{activities.realization_time}</WhenWillItBeDone>
      <GroupCode>{activities.group}</GroupCode>
      <ButtonInfoContentEditEndDelet>
        <button onClick={() => controlModalActivitiesEdit(activities.id)}>
          Editar
        </button>
        <button onClick={() => deleteActivitiesToGroup(activities.id)}>
          Deletar
        </button>
      </ButtonInfoContentEditEndDelet>
    </Container>
  );
};

export default CardActivities;
