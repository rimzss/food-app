import AdCards from "@/components/adCards/AdCards";
import FoodCard from "@/components/card/foodCard";
import BasketItem from "@/components/checkout/BasketItem";
import Checkout from "@/components/checkout/Checkout";

export default function Home() {
  return (
    <main className="flex flex-wrap">
      <AdCards />
      <FoodCard isDiscounted={false} />
      <FoodCard isDiscounted={true} />
      <Checkout />
      <BasketItem />
    </main>
  );
}
