import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const Header = () => {
  const [brandName, setBrandName] = useState("Muhammad Hashir Shaikh");
  const [menuLinks, setMenuLinks] = useState([
    { title: "Home", link: "header", id: 1 },
    { title: "Menu", link: "banner", id: 2 },
    { title: "About", link: "about", id: 3 },
    { title: "Services", link: "services", id: 4 },
    { title: "Expertise", link: "expertice", id: 5 },
    { title: "Contact", link: "footer", id: 6 },
  ]);
  const [actionButton, setActionButton] = useState({
    title: "Hire Me",
    link: "#",
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Duration in milliseconds
  }, []);

  return (
    <div id="header" data-aos="fade-up">
      {/* Animation attribute added */}
      <div className="h-20 border main flex justify-between items-center px-4 sm:px-8 md:px-16 bg-gray-200">
        <div>
          <h1 className="text-2xl font-bold" data-aos="fade-right">
            {brandName}
          </h1>
        </div>

        <div className="hidden md:flex space-x-6">
          {menuLinks.map((link) => (
            <Link
              key={link.id}
              to={link.link}
              smooth={true}
              duration={500}
              className="hover:underline hover:text-orange-600 cursor-pointer"
              data-aos="fade-down" // Animation added
            >
              {link.title}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button
            className="text-2xl focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-aos="fade-left"
          >
            ☰
          </button>
        </div>

        <div className="hidden md:block" data-aos="zoom-in">
          <a
            href={actionButton.link}
            className="px-4 py-2 rounded bg-orange-500 text-black shadow text-lg cursor-pointer"
          >
            {actionButton.title}
          </a>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden">
            <a
              href={actionButton.link}
              className="block w-full text-center px-4 py-2 mt-2 rounded bg-orange-600 text-black shadow text-lg cursor-pointer"
            >
              {actionButton.title}
            </a>
          </div>
        )}
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-200">
          {menuLinks.map((link) => (
            <Link
              key={link.id}
              to={link.link}
              smooth={true}
              duration={500}
              className="block px-4 py-2 hover:underline hover:text-orange-600"
              onClick={() => setIsMobileMenuOpen(false)}
              data-aos="fade-up" // Animation for mobile menu
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
