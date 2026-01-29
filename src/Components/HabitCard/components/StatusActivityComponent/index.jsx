import { StatusWrapper, Line } from "./indexStyle";
import concludedIcon from "../../../../images/concluded-icon.png";

export const statusActivityEnum = {
  SUCCESS: "success",
  WARNING: "warning",
  DANGER: "danger",
};

export const STATUS_MAP = {
  success: {
    color: "#4CAF50",
    label: "Meta concluída",
  },
  warning: {
    color: "#F4B400",
    label: "termina 3 dias",
  },
  danger: {
    color: "#E54B73",
    label: "termina 15 dias",
  },
};

const StatusActivityComponent = ({ status = "warning" }) => {
  const currentStatus = STATUS_MAP[status];

  return (
    <StatusWrapper color={currentStatus.color}>
      {status == statusActivityEnum.SUCCESS ? (
        <div>
          <img src={concludedIcon} alt="icone de conclusao" />
          <p>
            <span>{currentStatus.label}</span>
          </p>
        </div>
      ) : (
        <p>
          Em andamento: <span>{currentStatus.label}</span>
        </p>
      )}
      <Line color={currentStatus.color} />
    </StatusWrapper>
  );
};

export default StatusActivityComponent;
