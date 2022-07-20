import React from "react";
import { Link } from "react-router-dom";

const NavLinks = [
  {
    url: "#",
    text: "Home",
  },
  {
    url: "#blogs",
    text: "Blog",
  },
  {
    url: "#about",
    text: "About",
  },
];

const Header = () => {
  return (
    <div className="bg-LightGray1 shadow-sm p-3 sticky top-0">
      <div className=" container mx-auto flex justify-between items-center  ">
        <div>
          <Link to="/">
            <h1 className="lg:text-4xl text-xl font-bold tracking-wide">
              Zarmani<span className="text-primary text-xl ">.Dev</span>{" "}
            </h1>
          </Link>
        </div>
        <div className="md:flex items-center gap-32 hidden">
          <div className="flex gap-12">
            {NavLinks.map((nav) => (
              <li className="list-none text-2xl font-bold hover:text-gray-600" key={nav.text}>
                <a href={nav.url}>{nav.text}</a>
              </li>
            ))}
          </div>
          <button
            aria-label="contact us"
            className="bg-primary p-2 px-4 rounded text-white text-2xl font-semibold hover:bg-blue-900"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
