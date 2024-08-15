import { Slider } from "antd";
import { useState } from "react";

const PriceRange = () => {
  const [range, setRange] = useState(0, 1500);

  return (
    <div className="mt-[38px]">
      <h3 className="font-bold">Price Range</h3>
      <div className="pl-[12px] w-full">
        <Slider range value={range} min={0} max={1500} onChange={setRange} />
        <div>
          Price:{" "}
          <span className="text-[#46a358] font-bold">
            ${range[0]} - ${range[1]}
          </span>
        </div>
        <button
          type="button"
          className="mt-2 w-[100px] h-[35px] bg-[#46a358] rounded-[6px] flex gap-2 justify-center items-center text-white cursor-pointer"
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default PriceRange;
