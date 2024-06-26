import { useSearchParams } from "react-router-dom";
import { Select } from "antd";

const Header = () => {
  const { setParams, getParams } = useSearchParams();
  const activeSelection =
    "text-[#46a358] font-bold border-b-2 border-[#46a358]";
  const type = getParams("type");

  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex gap-8">
        <h3 
            onClick={()= setParams({ type: "all-plants" })} 
            className={`cursor-pointer ${
                type === "all-plants" && activeSelection
            }`}
        >
            All Plants
        </h3>
        <h3 
            onClick={()= setParams({ type: "new-arrivals" })} 
            className={`cursor-pointer ${
                type === "new-arrivals" && activeSelection
            }`}
        >
            New Arrivals
        </h3><h3 
            onClick={()= setParams({ type: "sale" })} 
            className={`cursor-pointer ${
                type === "sale" && activeSelection
            }`}
        >
           Sale
        </h3>
      </div>
      <div><Select labelInValue defaultInValue={{value:"",label:""}}/></div>
    </div>
  );
};

export default Header;
