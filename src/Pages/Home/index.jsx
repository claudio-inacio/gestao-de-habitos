import HomeTitle from "../../Components/HomeTitle";
import HomeInfor from "../../Components/HomeInfor";
import HomeGroups from "../../Components/HomeGroups";
import CardHabitsHome from "../../Components/CardHabitsHome";
import CardAboutUs from "../../Components/CardAboutUs";
import ListCardAboutUs from "../../Components/ListCardAboutUs";

const Home = () => {
  return (
    <div>
      <HomeTitle />
      <HomeInfor />
      <CardHabitsHome />
      <HomeGroups />
      <ListCardAboutUs />
    </div>
  );
};

export default Home;
