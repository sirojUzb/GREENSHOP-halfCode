const Slide1 = () => {
  return (
    <div className="w-full h-full flex">
      <div className="w-[60%]">
        <h5>WELCOME TO GREENSHOP</h5>
        <h1>LET{"'"}S MAKE A BETTER PLANET</h1>
        <p>
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use our plants to create an unique Jungle. Order your favorite
          plants
        </p>
        <button
          type="button"
          className="w-[100px] h-[35px] gap-2 flex items-center justify-center text-white rounded-[6px] bg-[#46A358] cursor-pointer"
        >
          SHOP NOW
        </button>
      </div>
      <div className="w-[40%]"></div>
    </div>
  );
};

export default Slide1;
