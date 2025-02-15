import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import Menu from "./Menu";
import { motion } from "motion/react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((menu) => !menu);
  };
  return (
    <nav className="sticky top-0 z-10 bg-[#f6f6f6] shadow-lg">
      <div className="mx-auto flex h-20 max-w-7xl flex-row items-center justify-between px-5 md:h-[100px]">
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3, delay: 0.7, type: "spring" }}
        >
          <img src="/logo.svg" alt="blue marvel logo" />
        </motion.div>
        <ul className="hidden flex-row justify-between gap-x-10 md:flex">
          <li className="cursor-pointer border-darkBlue pb-1 capitalize text-darkBlue transition-all duration-100 hover:border-b-2 hover:text-opacity-75">
            <a href="#tech-stack">Tech Stack</a>
          </li>
          <li className="cursor-pointer border-darkBlue pb-1 capitalize text-darkBlue transition-all duration-100 hover:border-b-2 hover:text-opacity-75">
            <a href="#partners">Partners</a>
          </li>
          <li className="cursor-pointer border-darkBlue pb-1 capitalize text-darkBlue transition-all duration-100 hover:border-b-2 hover:text-opacity-75">
            <a href="#services">Services</a>
          </li>
        </ul>
        <button className="hidden rounded-full border border-primary bg-primary px-6 py-2 text-white transition duration-300 hover:bg-transparent hover:text-primary md:block">
          <a href="#contact-us">Contact us</a>
        </button>
        <div
          className="font-bold text-primary md:hidden"
          onClick={handleToggleMenu}
        >
          {!isMenuOpen ? <RxHamburgerMenu /> : <IoClose />}
        </div>

        {isMenuOpen && <Menu handleToggleMenu={handleToggleMenu} />}
      </div>
    </nav>
  );
};

export default Header;
