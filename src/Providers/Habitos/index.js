import { createContext, useContext, useEffect, useState } from "react";
import { LoginContext } from "../Login";

import api from "../../Services";
import { toast } from "react-toastify";

const habitsContext = createContext([]);

export const HabitsProvider = ({ children }) => {

    const [habits, setHabits] = useState([]);
    const [targetHabit, setTargetHabit] = useState({})
    const { token } = useContext(LoginContext);

    const loadHabits = () => {
        api
            .get("/habits/personal/", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                setHabits(response.data);
            });
    }

    useEffect(() => {
        if (!!token) {
            loadHabits()
        }
    }, [token, habits])


    const deleteHabitToList = (id) => {
        api.delete(`/habits/${id}/`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((_) => loadHabits())
    }

    const updatedHabitToList = (data, id) => {
        console.log(data)
        api.patch(`/habits/${id}/`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((_) => {
            loadHabits()
        }).catch((err) => toast.error(err.response.data.how_much_achieved[0]))
    }


    return (
        <habitsContext.Provider value={{ habits, deleteHabitToList, updatedHabitToList, setTargetHabit, targetHabit }}>
            {children}
        </habitsContext.Provider>
    )
}

export const useHabits = () => useContext(habitsContext)
