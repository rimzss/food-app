import React from "react";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
type Props = {
  value: string;
  icon: string;
  buttonFunction?: () => void;
};

export const SecondaryButton = ({ value, icon, buttonFunction }: Props) => {
  return (
    <div
      onClick={buttonFunction}
      className="rounded-sm px-3 py-5 flex justify-between items-center cursor-pointer"
    >
      <div className="flex gap-3 items-center">
        <div className="bg-white rounded-full p-3 border-[0.5px]">
          {icon === "history" && <RestoreOutlinedIcon />}
          {icon === "logout" && <LogoutOutlinedIcon />}
        </div>

        <div>
          <h2 className="font-medium">{value}</h2>
        </div>
      </div>
    </div>
  );
};
