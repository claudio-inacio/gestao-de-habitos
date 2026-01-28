import { LoginContext } from "../Login";
import { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../Services";
import { toast } from 'react-toastify';

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const { token, userId } = useContext(LoginContext);
  const [targetGroup, setNewGroup] = useState(JSON.parse(localStorage.getItem("@GestãoHabitos/Group")) || false);
  const [member, setMember] = useState(localStorage.getItem("@GestãoHabitos/GroupMember") || false);

  const history = useHistory();

  useEffect(() => {
    if (!!targetGroup) {
      const idMemberGroup = targetGroup.users_on_group.map((user) => user.id)

      setMember(idMemberGroup.includes(userId))
      localStorage.setItem("@GestãoHabitos/GroupMember", idMemberGroup.includes(userId))
    }



  }, [targetGroup])

  const getSpecificGroup = (group) => {

    history.push(`/group/${group.id}`);
    api.get(`/groups/${group.id}/`)
      .then((response) => {
        setNewGroup(response.data);
        localStorage.setItem("@GestãoHabitos/Group", JSON.stringify(response.data))

      })
      .catch((err) => console.log(err))
  };

  const functionCreateGroup = (data) => {
    api.post("/groups/", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((_) => {
      toast.success("Sucesso ao criar Grupo");
    }).catch((_) => {
      toast.error("Erro ao criar Grupo");
    });

  }

  const getInOnGroup = (param) => {
    api.post(`/groups/${targetGroup.id}/subscribe/`, param, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((_) => {
        toast.success("Você se inscreveu no grupo")
        setMember(true)
        localStorage.setItem("@GestãoHabitos/GroupMember", true)
      })
      .catch((err) => console.log(err))
  }

  const getOutOnGroup = () => {
    api.delete(`/groups/${targetGroup.id}/unsubscribe/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((_) => {
      toast.success("Você saiu do grupo")
      setMember(false)
      localStorage.setItem("@GestãoHabitos/GroupMember", false)
      history.push("/explorerGroups")
    })
      .catch((err) => console.log(err))
  }


  return (
    <GroupsContext.Provider value={{ functionCreateGroup, getSpecificGroup, member, setMember, targetGroup, getInOnGroup, getOutOnGroup }}>
      {children}
    </GroupsContext.Provider>

  )
}

export const useGroup = () => useContext(GroupsContext);
