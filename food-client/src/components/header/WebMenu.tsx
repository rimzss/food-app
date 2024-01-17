import React from "react";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";

type Props = {};

const WebMenu = (props: Props) => {
  return (
    <div className="hidden md:flex justify-between w-screen font-bold">
      <section className="flex gap-10 ml-10">
        <Link href="">
          <p>Нүүр</p>
        </Link>
        <Link href="">
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
        <div className="flex items-center gap-2">
          <MdOutlineShoppingBasket size="25px" />
          Сагс
        </div>
        <div className="flex items-center gap-2">
          <FaRegUser size="20px" />
          Нэвтрэх
        </div>
      </section>
    </div>
  );
};

export default WebMenu;
