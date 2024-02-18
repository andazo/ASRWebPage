import { useState, useEffect, useRef } from "react";
import logo from "../assets/LogoASR.png";
import { GrLanguage, GrDown, GrUp } from "react-icons/gr";
import { FiMenu } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref para el contenedor del dropdown

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguageDropdown = (e) => {
    e.preventDefault();
    setIsLanguageDropdownOpen((prevState) => !prevState);
  };

  // Cierra el dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { link: "Inicio", path: "home" },
    { link: "Servicios", path: "services" },
    { link: "Planes", path: "planes" },
    { link: "Contacto", path: "contact" },
    //{ link: "Quienes somos", path: "about" },
  ];

  return (
    <>
      <nav className="bg-[#faf7f1] md:px-14 p-1 max-w-screen-3xl border-b mx-auto text-secondary fixed top-0 right-0 left-0 z-50">
        <div className="text-lg container mx-auto flex justify-between items-center font-medium">
          <div className="flex space-x-14 items-center">
            <a href="/" className="text=2xl font-semibold flex items-center space-x-3">
              <img src={logo} alt="Logo" className="w-32 inline-block" />
            </a>
            <ul className="md:flex space-x-12 hidden">
              {navItems.map(({ link, path }) => (
                <Link activeClass="active" spy={true} smooth={true} offset={-100} key={link} to={path} className="block hover:text-[#887e7e] cursor-pointer hover:scale-105 duration-500">
                  {link}
                </Link>
              ))}
            </ul>
          </div>

          <div className="space-x-12 hidden md:flex items-center">
            {/* Dropdown e ícono de idioma */}
            <div className="relative" ref={dropdownRef}>
              <div onClick={toggleLanguageDropdown} className="flex items-center cursor-pointer hover:text-terniaryBlue">
                <GrLanguage className="mr-2" />
                <span>Idioma</span>
                {isLanguageDropdownOpen ? <GrUp className="ml-1" /> : <GrDown className="ml-1" />}
              </div>

              {isLanguageDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 py-2 w-40 shadow-md bg-white rounded text-black z-10">
                  <ul>
                    <li className="hover:bg-[#d6d3d3] p-2 text-center">Español</li>
                  </ul>
                </div>
              )}
            </div>

            <button className="bg-[#555555] text-white py-2 px-4 transition-all duration-300 rounded hover:bg-[#726a6a]">
              Registrarme
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none focus:text-gray-300">
              {isMenuOpen ? <FaXmark className="w-6 h-6 text-secondary" /> : <FiMenu className="w-6 h-6 text-secondary" />}
            </button>
          </div>
        </div>
      </nav>

      <div className={`space-y-4 px-4 pt-36 pb-5 bg-terniaryBlue text-xl shadow-xl rounded-md ${isMenuOpen ? "menu-enter-active" : "menu-exit-active"} fixed top-0 right-0 left-0 z-40`}>
        {navItems.map(({ link, path }) => (
          <Link activeClass="active" spy={true} smooth={true} offset={-80} key={link} to={path} className="block text-white hover:text-gray-300" onClick={toggleMenu}>
            {link}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
