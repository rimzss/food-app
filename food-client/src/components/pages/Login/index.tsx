import { DefualtButton } from "@/components";
import DefaultInput from "@/components/core/DefaultInput";
import React from "react";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <div>
      <DefualtButton text="Нэвтрэх" />
      <DefualtButton text="Нэвтрэх" btnType="outlined" />
      <DefualtButton text="Нэвтрэх" disabled={true} />
      <DefaultInput label="Имэйл" placeholder="Имэйл хаягаа оруулна уу" />
    </div>
  );
};

export default LoginPage;
