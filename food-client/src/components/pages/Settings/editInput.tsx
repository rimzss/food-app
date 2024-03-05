import React from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";
import DoneIcon from "@mui/icons-material/Done";
type Props = {
  label: string;
  value: string;
  icon: string;
  buttonFunction?: () => void;
};

export const EditInput = ({
  label,
  value = "Your name",
  icon,
  buttonFunction,
}: Props) => {
  return (
    <div className="bg-[#EEEFF2] rounded-sm px-3 py-5 flex justify-between items-center w-80">
      <div className="flex gap-3">
        <div className="bg-white rounded-full p-3 border-[0.5px]">
          {icon === "name" && <PersonOutlineOutlinedIcon />}
          {icon === "email" && <ForwardToInboxOutlinedIcon />}
        </div>

        <div>
          <p className="text-sm text-[#888A99]">{label}</p>
          <input type="text" value={value} />
        </div>
      </div>
      <button onClick={buttonFunction}>
        <DoneIcon fontSize="large" color="primary" />
      </button>
    </div>
  );
};
