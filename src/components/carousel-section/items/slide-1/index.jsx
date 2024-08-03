const Slide1 = () => {
  return (
    <div className="w-full h-[450px] flex">
      <div className="w-[60%] pl-[40px]">
        <h5 className="mt-[68px] mb-2 text-[14px]">WELCOME TO GREENSHOP</h5>
        <h1 className="text-[68px] font-black leading-[70px]">
          LET{"'"}S MAKE A BETTER <span className="text-[#46a358]">PLANET</span>
        </h1>
        <p className="mt-2 text-[14px] w-[90%]">
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use our plants to create an unique Jungle. Order your favorite
          plants
        </p>
        <button
          type="button"
          className="w-[100px] h-[35px] mt-[48px] gap-2 flex items-center justify-center text-white rounded-[6px] bg-[#46A358] cursor-pointer"
        >
          SHOP NOW
        </button>
      </div>
      <div className="relative w-[40%] flex items-center justify-center">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d"
          alt=""
        />
        <img
          className="absolute w-[150px] h-[150px] bottom-0 left-[50px]"
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d"
          alt=""
        />
      </div>
    </div>
  );
};

export default Slide1;
