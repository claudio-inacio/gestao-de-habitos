import { Container } from "./indexStyle";

import devs from "../../../../utils/data";
import CardAboutUs from "../../../../Components/CardAboutUs";

const ListCardAboutUs = () => {
  return (
    <Container id="AboutUs">
      <h2>Sobre Mim</h2>
      <div>
        {devs.map(({ id, name, description, office, profile, social }) => (
          <CardAboutUs
            key={id}
            name={name}
            description={description}
            office={office}
            profile={profile}
            social={social}
          />
        ))}
      </div>
    </Container>
  );
};

export default ListCardAboutUs;
