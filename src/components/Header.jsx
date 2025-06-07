import { useEffect, useState } from "react";
import { LOGO_IMG } from "../constants/constants";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <a href="/">
            <img src={LOGO_IMG} alt="logo" className="h-50 w-auto" />
          </a>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-white font-medium ml-60">
          {[
            { label: "LET’S TALK AI", href: "#lets-talk-ai" },
            { label: "About", href: "#about" },
            { label: "Services", href: "#services" },
            { label: "Industries", href: "#industries" },
            { label: "Portfolio", href: "#portfolio" },
            { label: "Resources", href: "#resources" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative group transition text-white"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Contact Us Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-10 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition font-bold cursor-pointer"
          >
            CONTACT US
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button className="text-white text-xl">&#9776;</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
