import React from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";
type Props = {
  label: string;
  value: string;
  icon: string;
  buttonFunction?: () => void;
};

export const DefaultUserEdit = ({
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
          <h2 className="font-medium">{value}</h2>
        </div>
      </div>
      <button onClick={buttonFunction}>
        <CreateOutlinedIcon fontSize="large" color="primary" />
      </button>
    </div>
  );
};
