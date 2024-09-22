import { useState } from "react";

const Header = () => {
  const [brandName, setBrandName] = useState("Muhammad Hashir Shaikh");
  const [menuLinks, setMenuLinks] = useState([
    {
      title: "Home",
      link: "./home",
      id: 1,
    },
    {
      title: "About",
      link: "./about",
      id: 2,
    },
    {
      title: "Skills",
      link: "./skills",
      id: 3,
    },
    {
      title: "Portfolio",
      link: "./portfolio",
      id: 4,
    },
    {
      title: "Contact",
      link: "./contact",
      id: 5,
    },
  ]);
  const [actionButton, setActionButton] = useState({
    title: "Hire Me",
    linl: "./hire-me",
  });

  return (
    <div className="h-20 border main flex justify-between items-center px-16 bg-gray-200">
      <div>
        {/*brand logo*/}
        <h1 className="text-2xl font-bold">{brandName}</h1>
      </div>

      <div className="space-x-6">
        {/*menu links*/}

        {menuLinks.map((link) => (
          <a key={link.id} href={link.link} className="hover:text-orange-600">
            {link.title}
          </a>
        ))}
      </div>

      <div>
        {/*brand button*/}
        <a
          href={actionButton.linl}
          className="px-4 py-2 rounded-full bg-orange-600 text-black shadow text-1xl"
        >
          {actionButton.title}
        </a>
      </div>
    </div>
  );
};

export default Header;
