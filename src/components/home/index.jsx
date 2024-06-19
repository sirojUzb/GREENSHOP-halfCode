import CarouselSection from "../home/carousel";
import SideNav from "../home/sideNav";
import Category from "../home/category";

const Home = () => {
  return (
    <div>
      <CarouselSection />
      <div className="flex w-[80%] m-auto mt-[46px] gap-8">
        <SideNav />
        <Category />
      </div>
    </div>
  );
};

export default Home;
// 11-minut
