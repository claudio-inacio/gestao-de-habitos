import HomeTitle from "./components/HomeTitle";
import HomeInfor from "./components/HomeInfor";
import HomeGroups from "./components/HomeGroups";
import CardHabitsHome from "./components/CardHabitsHome";
import ListCardAboutUs from "./components/ListCardAboutUs";

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
