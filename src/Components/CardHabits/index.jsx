import { useModal } from "../../Providers/ControlModal";
import { useHabits } from "../../Providers/Habitos";
import {
  DivDone,
  DivButton,
  DivCategory,
  DivContainer,
  DivFrequency,
  DivInfo,
  DivLevel,
  TitleCategory,
} from "./indexStyle";

const CardHabits = ({ habits }) => {
  const { deleteHabitToList } = useHabits();
  const { controlModalHabitEdit } = useModal();

  return (
    <DivContainer>
      <DivInfo>
        <DivLevel tag={habits.difficulty}>
          <div></div>
          <h3>{habits.difficulty}</h3>
        </DivLevel>
        <DivCategory>
          <DivButton>
            <button onClick={() => controlModalHabitEdit(habits.id)}>
              Editar
            </button>
            |
            <button onClick={() => deleteHabitToList(habits.id)}>
              Deletar
            </button>
          </DivButton>
          <TitleCategory>
            <h3>{habits.category}</h3>
          </TitleCategory>
        </DivCategory>
      </DivInfo>
      <h4>{habits.title}</h4>
      <DivFrequency>
        <DivDone done={habits.achieved}>
          {habits.achieved ? "Concluido" : "Não Concuido"}
        </DivDone>

        <span>{habits.frequency}</span>
      </DivFrequency>
    </DivContainer>
  );
};

export default CardHabits;
