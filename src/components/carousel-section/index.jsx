import { Carousel } from "antd";
import Slide1 from "./items/slide-1";

const CarouselSection = () => {
  return (
    <div className="w-[80%] h-[450px] m-auto bg-[#f5f5f5] mt-[12px]">
      <Carousel>
        <Slide1 />
        <Slide1 />
        <Slide1 />
      </Carousel>
    </div>
  );
};

export default CarouselSection;
