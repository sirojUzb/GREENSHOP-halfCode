import { useEffect, useState } from "react";
import axios from "axios";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios({
        url: "http://localhost:8080/api/flower/category?access_token=64bebc1e2c6d3f056a8c85b7",
        method: "GET",
      });

      setCategories(data.data);
    })();
  }, []);

  return (
    <div>
      <h3 className="font-bold">Categories</h3>
      {categories.map((category) => (
        <div
          key={category._id}
          className="w-full flex items-center justify-between mt-[7px] hover:text-[£46a358] cursor-pointer"
        >
          <h3>{category.title}</h3>
          <h3>{category.count}</h3>
        </div>
      ))}
      <div className="pl-[12px] w-full">
        <div className="w-full mt-[7px] flex items-center justify-between hover:text-[#46a358] cursor-pointer">
          <h3>House Plants</h3>
          <h3>(12)</h3>
        </div>
        <div className="w-full mt-[7px] flex items-center justify-between hover:text-[#46a358] cursor-pointer">
          <h3>House Plants</h3>
          <h3>(12)</h3>
        </div>
        <div className="w-full mt-[7px] flex items-center justify-between hover:text-[#46a358] cursor-pointer">
          <h3>House Plants</h3>
          <h3>(12)</h3>
        </div>
        <div className="w-full mt-[7px] flex items-center justify-between hover:text-[#46a358] cursor-pointer">
          <h3>House Plants</h3>
          <h3>(12)</h3>
        </div>
        <div className="w-full mt-[7px] flex items-center justify-between hover:text-[#46a358] cursor-pointer">
          <h3>House Plants</h3>
          <h3>(12)</h3>
        </div>
        <div className="w-full mt-[7px] flex items-center justify-between hover:text-[#46a358] cursor-pointer">
          <h3>House Plants</h3>
          <h3>(12)</h3>
        </div>
        <div className="w-full mt-[7px] flex items-center justify-between hover:text-[#46a358] cursor-pointer">
          <h3>House Plants</h3>
          <h3>(12)</h3>
        </div>
      </div>
    </div>
  );
};

export default Categories;
