import { useGroup } from "../../Providers/Grupos";
import iconUserColor from "../../images/user-icon-color.png";
import iconUserIncolor from "../../images/user-icon-incolor.png";
import {
  CardContent,
  Container,
  GroupMembersContainer,
  LineBox,
} from "./indexStyle";

const CardGroup = ({ groups }) => {
  const { getSpecificGroup } = useGroup();
  return (
    <Container onClick={() => getSpecificGroup(groups)}>
      <LineBox></LineBox>
      <CardContent>
        <h3>{groups.name}</h3>
        <h5>descrição:</h5>
        <p>{groups.description}</p>
        <GroupMembersContainer>
          <h5>Membros</h5>
          <div>
            <img src={iconUserColor} alt="membericon" />
            <img src={iconUserIncolor} alt="membericon" />
            <img src={iconUserColor} alt="membericon" />
            <img src={iconUserIncolor} alt="membericon" />
          </div>
          <p>Categoria: {groups.category} </p>
        </GroupMembersContainer>
      </CardContent>
    </Container>
  );
};
export default CardGroup;
