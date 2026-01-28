import { Modal } from "@mui/material";
import { useContext } from "react";

import { FiX } from "react-icons/fi";
import { DashboardContext } from "../../Providers/Habitos";
import { Container } from "./indexStyle";

const ModalCustomizer = ({ children, title, isOpen, fn }) => {
  return (
    <Modal open={isOpen}>
      <Container>
        <div>
          <h3>{title}</h3>
          <FiX size="20" color="var(--color-primary-light)" onClick={fn} />
        </div>
        {children}
      </Container>
    </Modal>
  );
};

export default ModalCustomizer;
