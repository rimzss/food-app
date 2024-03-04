"use client";
import React, { useEffect, useState } from "react";
import FoodCard from "../card/foodCard";
import Star from "../core/Star";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type Props = {
  id: string;
  catName: string;
  foods: any;
};

const Menu = ({ id, catName, foods }: Props) => {
  const [catFoods, setCatFoods] = useState([]);

  useEffect(() => {
    setCatFoods(foods?.filter((food: any) => food.category._id == id));
  }, [foods]);
  return (
    <div className="">
      <div className="flex gap-2 items-center font-semibold text-2xl mb-10">
        <Star />
        {catName}
      </div>
      {/* <div className="flex gap-8"> */}
      <Swiper
        className="mySwiper"
        modules={[Pagination, Autoplay, Navigation]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {catFoods?.map((food: any) => {
          return (
            <SwiperSlide key={food._id}>
              <FoodCard
                food={food}
                name={food.name}
                price={food.price}
                image={food.image}
                isDiscounted={food.isSale}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* </div> */}
    </div>
  );
};

export default Menu;
