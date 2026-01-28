import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/index";
import { useGroup } from "../Grupos";
import { LoginContext } from "../Login";

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);
  const [targetActivities, setTargetActivities] = useState({});
  const { targetGroup } = useGroup();
  const { token } = useContext(LoginContext);

  const loadActivities = () => {
    if (!!token) {
      api
        .get(`/activities/?group=${targetGroup.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((resp) => setActivities(resp.data.results))
        .catch((err) => console.log(err));
    }
  };

  const updatedActivitiesToGroup = (data, id) => {
    api
      .patch(`/activities/${id}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => loadActivities());
  };
  const createActivitiesToGroup = (data, id) => {
    api
      .post(
        "/activities/",
        {
          ...data,
          group: id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((resp) => {
        setActivities([...activities, resp.data]);
        loadActivities();
      })
      .catch((err) => console.log(err));
  };

  const deleteActivitiesToGroup = (id) => {
    api
      .delete(`/activities/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => loadActivities());
  };
  useEffect(() => {
    loadActivities();
  }, [targetGroup]);

  return (
    <ActivitiesContext.Provider
      value={{
        activities,
        targetActivities,
        setTargetActivities,
        updatedActivitiesToGroup,
        createActivitiesToGroup,
        deleteActivitiesToGroup,
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};

export const useActivities = () => useContext(ActivitiesContext);
