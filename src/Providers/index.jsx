import { ModalProvider } from "./ControlModal";
import { HabitsProvider } from "./Habitos";
import { LoginProvider } from "./Login";
import { RegisterProvider } from "./Register";
import { GroupsProvider } from "./Grupos";
import { GoalsProvider } from "./Metas";
import { ActivitiesProvider } from "./Atividades";
import { UserUpdateProvider } from "./Perfil";

const Providers = ({ children }) => {
  return (
    <>
      <RegisterProvider>
        <LoginProvider>
          <UserUpdateProvider>
            <GroupsProvider>
              <HabitsProvider>
                <GoalsProvider>
                  <ActivitiesProvider>
                    <ModalProvider>{children}</ModalProvider>
                  </ActivitiesProvider>
                </GoalsProvider>
              </HabitsProvider>
            </GroupsProvider>
          </UserUpdateProvider>
        </LoginProvider>
      </RegisterProvider>
    </>
  );
};

export default Providers;
