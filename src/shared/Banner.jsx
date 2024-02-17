import { Link } from "react-scroll";

const Banner = ({ heading, subheading}) => {
  return (
    <div>
      <div className="bg-[#CDC9C3] rounded-br-[80px] md:p-9 px-4 py-9">
        <div className="flex flex-col justify-center items-center text-center space-y-8">
          <h2 className="text-5xl md:text-7xl font-bold text-secondary">
            {heading}
          </h2>
          <p className="text-md md:text-2xl text-secondary">
            {subheading}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="transition duration-300 ease-in-out bg-secondary text-white font-semibold py-4 px-6 rounded hover:bg-secondary transform hover:scale-105">
              <Link to="services" activeClass="active" spy={true} smooth={true} offset={-100}>
                Servicios
              </Link>
            </button>
            <button className="text-secondary transition duration-300 ease-in-out bg-transparent border-2 border-gray-800 font-semibold py-4 px-6 rounded hover:bg-secondary hover:text-white transform hover:scale-105">
              <Link to="contact" activeClass="active" spy={true} smooth={true} offset={-100}>
                Contáctanos
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
