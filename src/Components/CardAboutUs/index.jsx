import { FaLinkedinIn, FaInstagram } from "react-icons/fa"; 
import { BsGithub } from "react-icons/bs";
import {
  Circle,
  Container,
  ContainerCircles,
  Description,
  Header,
  Info,
  Picture,

} from "./indexStyle";

const CardAboutUs = ({ name, office, description, social, profile }) => {
  return (
    <Container>
      <Header>
        <Picture src={profile} alt={`Foto de ${name}`} />

        <Info>
          <h3>{name}</h3>
          <span>{office}</span>
        </Info>
      </Header>

      <Description>
        <p>{description}</p>
      </Description>

      <ContainerCircles>
        <Circle color="#1361F9">
          <a href={social.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedinIn size={18} />
          </a>
        </Circle>

        <Circle color="#E54B73">
          <a href={social.instagram} target="_blank" rel="noreferrer">
            <FaInstagram size={18} />
          </a>
        </Circle>

        <Circle color="#24292F">
          <a href={social.github} target="_blank" rel="noreferrer">
            <BsGithub size={18} />
          </a>
        </Circle>
      </ContainerCircles>
    </Container>
  );
};

export default CardAboutUs;
