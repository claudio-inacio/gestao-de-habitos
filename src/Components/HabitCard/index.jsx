
import concludedIcon from "../../images/concluded-icon.png";
import mediunIcon from "../../images/hour-icon.png";
import hardIcon from "../../images/timing-icon.png";
import {
  Container,
  HeadContainer,
  SubHeadContainer,  
} from "./indexStyle";
import StatusActivityComponent, {
  statusActivityEnum,
} from "./components/StatusActivityComponent";
import { Square } from "../../Pages/Home/components/CardHabitsHome/indexStyle";

export const CardDificultEnum = {
  EASY: {
    id: 1,
    name: "Fácil",
    color: "#71CB75",
    image: concludedIcon,
    isConcluded: statusActivityEnum.SUCCESS,
    daysToConcluded: 0,
  },
  MEDIUM: {
    id: 2,
    name: "Médio",
    color: "#FACB32",
    image: mediunIcon,
    isConcluded: statusActivityEnum.WARNING,
    daysToConcluded: 10,
  },
  HARD: {
    id: 2,
    name: "Difícil",
    color: "#E54B73",
    image: hardIcon,
    isConcluded: statusActivityEnum.DANGER,
    daysToConcluded: 15,
  },
};

const HabitCardComponent = ({ cardDificult, description }) => {
  return (
    <Container>
      <HeadContainer>
        <SubHeadContainer>
          <Square color={cardDificult?.color} />
          <p>{cardDificult?.name}</p>
        </SubHeadContainer>
        <img
          src={cardDificult.image}
          alt="icone que referencia a dificuldade do card"
        />
      </HeadContainer>
      <span>{description}</span>

      <StatusActivityComponent status={cardDificult.isConcluded} />
    </Container>
  );
};

export default HabitCardComponent;
