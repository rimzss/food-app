import FoodCard from "@/components/card/foodCard";

export default function Home() {
  return (
    <main className="">
      <FoodCard />
      <FoodCard isDiscounted={true} />
    </main>
  );
}
