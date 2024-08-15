import { Carousel } from "antd";
import Slide from "./slide";

const CarouselSection = () => {
  return (
    <div className="w-[80%] h-[450px] m-auto bg-[#f5f5f5] mt-[12px]">
      <Carousel>
        {carouel_mock.map((item)=>{
          <Slide key={item.id} {...item} />
        })>}
      </Carousel>
    </div>
  );
};

export default CarouselSection;
