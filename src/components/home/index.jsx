import CarouselSection from "./carousel-section";
import Category from "./category";
import SideNav from "./sidenav";

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
