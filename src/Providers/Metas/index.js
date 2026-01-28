import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/";
import { useGroup } from "../Grupos";
import { LoginContext } from "../Login";

const goalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  const [goals, setGoals] = useState([]);
  const [targetGoal, setTargetGoal] = useState({});
  const { targetGroup } = useGroup();
  const { token } = useContext(LoginContext);

  const loadGoals = () => {
    if (!!token) {
      api
        .get(`/goals/?group=${targetGroup.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => setGoals(response.data.results))
        .catch((err) => console.log(err));
    }
  };

  const createGoalToGroup = (data, id) => {
    api
      .post(
        "/goals/",
        {
          ...data,
          achieved: false,
          how_much_achieved: 0,
          group: id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setGoals([...goals, response.data]);
        loadGoals();
      })
      .catch((err) => console.log(err));
  };

  const deleteGoalToGroup = (id) => {
    api
      .delete(`/goals/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => loadGoals());
  };

  const updatedGoalToGroup = (data, id) => {
    console.log("editar");
    api.patch(`/goals/${id}/`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  useEffect(() => {
    loadGoals();
  }, [goals]);

  return (
    <goalsContext.Provider
      value={{
        goals,
        createGoalToGroup,
        deleteGoalToGroup,
        updatedGoalToGroup,
        targetGoal,
        setTargetGoal,
      }}
    >
      {children}
    </goalsContext.Provider>
  );
};

export const useGoals = () => useContext(goalsContext);
