
const Banner = ({Image1,heading,subheading,btn1,btn2}) => {
  return (
    <div>
      <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
          {/* Banner Image */}
          <div>
            <img src={Image1} alt="" className="lg:h-[420px]" />
          </div>
          {/* Banner Home */}
          <div className="md:w-3/5">
            <h2 className="md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed">
              {heading}
            </h2>
            <p className="text-[#EBEBEB] text-2xl mb-6">
                {subheading}
            </p>
            <div className="space-x-5 space-y-5">
              <button className="btnHome">{btn1}</button>
              <button className="btnHome">{btn2}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
