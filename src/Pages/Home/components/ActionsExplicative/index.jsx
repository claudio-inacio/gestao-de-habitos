
import { Container, ExplicativeSection, TittleContainer } from "./indexStyle";

const ActionsExplicative = ({
  title,
  description,
  iconImage,
  sectionImage,
}) => {
  return (
    <Container>
      <ExplicativeSection>
        <img src={iconImage} alt="icon ilustrativo da sessão" />
        <TittleContainer>

        <h3>{title}</h3>
        <span>{description}</span>
        </TittleContainer>
      </ExplicativeSection>
      <img src={sectionImage} alt="imagem ilustrativa da sessão" />
    </Container>
  );
};

export default ActionsExplicative;
