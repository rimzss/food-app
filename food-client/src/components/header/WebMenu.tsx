import React, { useContext } from "react";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";
import { authContext } from "@/context/authProvider";
import UserMenu from "./userMenu";
import Badge from "@mui/material/Badge";
import { basketContext } from "@/context/basketProvider";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

type Props = {
  setOpenDrawer: (arg0: boolean) => void;
  openDrawer: boolean;
};

const WebMenu = ({ setOpenDrawer, openDrawer }: Props) => {
  const router = useRouter();
  const { logout, user } = useContext(authContext);
  const { getUserBasketFoods } = useContext(basketContext);
  const openBasket = () => {
    console.log("OPEN DRAWER");
    if (user) {
      setOpenDrawer(true);
    } else {
      router.push("/login");
    }
  };
  return (
    <div className="hidden md:flex justify-between w-screen font-bold">
      <section className="flex gap-10 ml-10">
        <Link href="/">
          <p>Нүүр</p>
        </Link>
        <Link href="/foodmenu">
          <p>Хоолны цэс</p>
        </Link>
        <Link href="">
          <p>Хүргэлтийн бүс</p>
        </Link>
      </section>
      <section className="flex gap-5 items-center">
        <div className="relative">
          <IoIosSearch size="25px" className="absolute top-2 left-4 z-10" />
          <input
            type="text"
            placeholder="Хайх"
            className="w-full py-2 relative z-0 px-10 border-[1px] border-black rounded-lg"
          />
        </div>
        <button
          onClick={() => {
            openBasket();
            getUserBasketFoods();
          }}
          className="flex items-center gap-2"
        >
          <Badge badgeContent={0} color="primary">
            <MdOutlineShoppingBasket size="25px" />
          </Badge>
          Сагс
        </button>
        {user ? (
          <UserMenu />
        ) : (
          <Link href="/login">
            <div className="flex items-center gap-2">
              <FaRegUser size="20px" />
              Нэвтрэх
            </div>
          </Link>
        )}
      </section>
    </div>
  );
};

export default WebMenu;
