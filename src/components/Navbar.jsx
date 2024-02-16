import { useState } from "react";
import logo from "../assets/LogoASR.png";
import { GrLanguage } from "react-icons/gr";
import { FiMenu } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { link: "Inicio", path: "home" },
    { link: "Servicios", path: "services" },
    { link: "Contacto", path: "contact" },
    { link: "Quienes somos", path: "contact" },
  ];

  return (
    <>
      <nav className="bg-[#FBF7F0] md:px-14 p-4 max-w-screen-3xl border-b mx-auto text-secondary fixed top-0 right-0 left-0">
        <div className="text-lg container mx-auto flex justify-between items-center font-medium">
          <div className="flex space-x-14 items-center">
            <a
              href="/"
              className="text=2xl font-semibold flex items-center space-x-3"
            >
              <img
                src={logo}
                alt=""
                className="w-32 inline-block items-center"
              />{" "}
              <span></span>
            </a>
            <ul className="md:flex space-x-12 hidden">
              {navItems.map(({ link, path }) => (
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  key={link}
                  to={path}
                  className="block hover:text-gray-300 cursor-pointer"
                >
                  {link}
                </Link>
              ))}
            </ul>
          </div>

          {/* Language and signup */}
          <div className="space-x-12 hidden md:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center hover:text-terniaryBlue"
            >
              <GrLanguage className="mr-2" />
              <span>Idioma</span>
            </a>
            <button className="bg-[#555555] text-white py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-[#726a6a]">
              Registrarme
            </button>
          </div>

          {/* Display mobile menu */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-gray-300"
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 text-secondary" />
              ) : (
                <FiMenu className="w-6 h-6 text-secondary" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`space-y-4 px-4 pt-36 pb-5 bg-terniaryBlue text-xl shadow-xl rounded-md ${
          isMenuOpen ? "menu-enter-active" : "menu-exit-active"
        } fixed top-0 right-0 left-0`}
      >
        {navItems.map(({ link, path }) => (
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-80}
            key={link}
            to={path}
            className="block text-white hover:text-gray-300"
            onClick={toggleMenu}
          >
            {link}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
