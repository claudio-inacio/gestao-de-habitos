import { createContext, useContext, useState } from "react";
import { useHabits } from "../Habitos";
import { LoginContext } from "../Login";

import api from "../../Services";
import { useGoals } from "../Metas";
import { useActivities } from "../Atividades";

const modalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modalHabitEdit, setModalHabitEdit] = useState(false);
  const [modalGoalsAdd, setModalGoalsAdd] = useState(false);
  const [modalGoalsEdit, setModalGoalsEdit] = useState(false);
  const [modalActivitiesAdd, setModalActivitiesAdd] = useState(false);
  const [modalActivitiesEdit, setModalActivitiesEdit] = useState(false);

  const { setTargetHabit } = useHabits();
  const { setTargetGoal } = useGoals();
  const { setTargetActivities } = useActivities();
  const { token } = useContext(LoginContext);

  const controlModalHabitEdit = (id) => {
    setModalHabitEdit(!modalHabitEdit);
    api
      .get("/habits/personal/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const { data } = response;
        const newTarget = data.find((value) => value.id === id);
        setTargetHabit(newTarget);
      });
  };

  const controlModalGoalEdit = (id) => {
    setModalGoalsEdit(!modalGoalsEdit);
    api.get(`/goals/${id}/`).then((response) => setTargetGoal(response.data));
  };
  const controlModalActivitiesEdit = (id) => {
    setModalActivitiesEdit(!modalActivitiesEdit);
    api
      .get(`/activities/${id}/`)
      .then((response) => setTargetActivities(response.data));
  };

  const controlModalGoalsAdd = () => {
    setModalGoalsAdd(!modalGoalsAdd);
  };
  const controlModalActivitiesAdd = () => {
    setModalActivitiesAdd(!modalActivitiesAdd);
  };

  const closeModalGoalEdit = () => {
    setModalGoalsEdit(!modalGoalsEdit);
  };
  const closeModalActivitiesEdit = () => {
    setModalActivitiesEdit(!modalActivitiesEdit);
  };

  return (
    <modalContext.Provider
      value={{
        controlModalHabitEdit,
        modalHabitEdit,
        controlModalGoalsAdd,
        modalGoalsAdd,
        controlModalGoalEdit,
        closeModalGoalEdit,
        modalGoalsEdit,
        modalActivitiesAdd,
        modalActivitiesEdit,
        setModalActivitiesAdd,
        controlModalActivitiesAdd,
        controlModalActivitiesEdit,
        closeModalActivitiesEdit,
      }}
    >
      {children}
    </modalContext.Provider>
  );
};

export const useModal = () => useContext(modalContext);
