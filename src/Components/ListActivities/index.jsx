import { useModal } from "../../Providers/ControlModal";
import { useGroup } from "../../Providers/Grupos";
import { useActivities } from "../../Providers/Atividades";
import CardActivities from "../CardActivities";
import { Box, Container, LengthAtivities, List } from "./indexStyle";

const ListActivities = () => {
  const { member } = useGroup();
  const { controlModalActivitiesAdd } = useModal();
  const { activities } = useActivities();
  return (
    <Container>
      <Box>
        <h3>Atividades</h3>
        {member && (
          <button onClick={controlModalActivitiesAdd}>
            <span>+</span>
          </button>
        )}
      </Box>
      <LengthAtivities>
        <span>Numero de atividades: {activities.length} </span>
      </LengthAtivities>
      <List>
        {activities.map((value) => (
          <CardActivities key={value.id} activities={value} />
        ))}
      </List>
    </Container>
  );
};
export default ListActivities;
