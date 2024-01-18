import FoodCard from "@/components/card/foodCard";
import BasketItem from "@/components/checkout/BasketItem";
import Checkout from "@/components/checkout/Checkout";

export default function Home() {
  return (
    <main className="">
      <FoodCard />
      <FoodCard isDiscounted={true} />
      <Checkout/>
      <BasketItem/>
    </main>
  );
}
