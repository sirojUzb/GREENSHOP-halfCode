// import { useQuery } from "@tanstack/react-query";
// import { useAxios } from "../../../hooks/useAxios";
// import { Empty, Skeleton } from "antd";
// import Card from "./card";

// const Wishlist = () => {
//   const axios = useAxios();

//   const { data, isLoading, isError } = useQuery({
//     queryKey: ["wishlist"],
//     queryFn: async () => {
//       const { data } = await axios({
//         url: "user/wishlist",
//       });

//       return data.data.filter(Boolean);
//     },
//   });

//   if (isLoading || isError)
//     return (
//       <div className="w-full mt-[30px] gap-4 grid grid-cols-3 max-ms:grid-cols-2">
//         {Array.from({ length: 5 }).map((_, index) => (
//           <div key={index} className="h-[300px] flex flex-col">
//             <Skeleton.Image className="w-full main_card" active={true} />
//             <h3 className="font-normal cursor-pointer mt-[12px]">
//               <Skeleton.Input active={true} />
//             </h3>
//             <p className="font-bold text-[#46A358]">
//               <Skeleton.Input active={true} />
//             </p>
//           </div>
//         ))}
//       </div>
//     );

//   if (!data.length)
//     return (
//       <div className="w-full flex justify-center items-center">
//         <Empty
//           className="mt-[10px]"
//           description={
//             <div>
//               <h3 className="text-[18px] text-bold">No wishproducts yet...</h3>
//             </div>
//           }
//         />
//       </div>
//     );

//   return (
//     <div className="w-full mt-[30px] gap-4 grid grid-cols-3 max-ms:grid-cols-2">
//       {data.filter(Boolean).map((value) => (
//         <Card {...value} key={value._id} />
//       ))}
//     </div>
//   );
// };

// export default Wishlist;
import { Empty, Skeleton } from "antd";
import { useAxios } from "../../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Card from "./card";

const Wishlist = () => {
  const axios = useAxios();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["wishlist"],
    queryFn: async () => {
      const { data } = await axios({
        url: "/user/wishlist",
      });

      return data.data.filter(Boolean);
    },
  });
  if (isLoading || isError)
    return (
      <div className="mt-[30px] w-full grid grid-cols-3 gap-4 max-sm:grid-cols-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="h-[300px] flex flex-col">
            <Skeleton.Image className="w-full main_card" active={true} />
            <h3 className="font-normal cursor-pointer mt-[12px]">
              <Skeleton.Input active={true} />
            </h3>
            <p className="text-[#46A358] font-bold">
              <Skeleton.Input active={true} />
            </p>
          </div>
        ))}
      </div>
    );
  if (!data.length)
    return (
      <Empty
        className="mt-[10px]"
        description={
          <div className="text-[18px] text-bold">
            <h3>No wishproducts yet...</h3>
          </div>
        }
      />
    );
  return (
    <div className="mt-[30px] grid grid-cols-3 gap-4 max-sm:grid-cols-2">
      {data.map((value) => (
        <Card {...value} key={value._id} />
      ))}
    </div>
  );
};

export default Wishlist;
