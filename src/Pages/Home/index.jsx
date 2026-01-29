import HomeTitle from "./components/HomeTitle";
import HomeInfo from "./components/HomeInfo";
import HomeGroups from "./components/HomeGroups";
import CardHabitsHome from "./components/CardHabitsHome";
import ListCardAboutUs from "./components/ListCardAboutUs";

const Home = () => {
  return (
    <div>
      <HomeTitle />
      <HomeInfo />
      <CardHabitsHome />
      <HomeGroups />
      <ListCardAboutUs />
    </div>
  );
};

export default Home;
