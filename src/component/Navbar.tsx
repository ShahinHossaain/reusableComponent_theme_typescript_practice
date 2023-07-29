import React, { useState } from "react";
import ActiveLInk from "../shared/ActiveLink";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="light bg-primary-400 text-white p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-white font-bold text-xl">Your Logo</div>
          </div>
          <div className="hidden md:flex space-x-4">
            <div className="relative group">
              <button className="text-white focus:outline-none">
                Dropdown
              </button>
              <ul className="absolute z-10 hidden group-hover:block bg-primary-400 text-white p-3  py-2 space-y-2">
                <li>
                  <ActiveLInk to="/hoc">HOC</ActiveLInk>
                </li>
                <li>
                  <ActiveLInk to="/renderProps">RenderProps</ActiveLInk>
                </li>
              </ul>
            </div>
            <ActiveLInk to="/theme">Theme</ActiveLInk>
            <ActiveLInk to="/button">Button</ActiveLInk>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="text-white focus:outline-none"
              onClick={toggleNavbar}
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.293 4.293L20.707 5.707L16.414 10H20C21.1046 10 22 10.8954 22 12C22 13.1046 21.1046 14 20 14H16.414L20.707 18.293L19.293 19.707L15 15.414V19C15 20.1046 14.1046 21 13 21C11.8954 21 11 20.1046 11 19V15.414L6.707 19.707L5.293 18.293L9.586 14H6C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10H9.586L5.293 5.707L6.707 4.293L11 8.586V5C11 3.89543 11.8954 3 13 3C14.1046 3 15 3.89543 15 5V8.586L19.293 4.293Z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5 3C3.89543 3 3 3.89543 3 5V7.99999C3 8.55228 3.44772 8.99999 4 8.99999C4.55228 8.99999 5 8.55228 5 7.99999V5C5 4.44771 5.44772 3.99999 6 3.99999C6.55228 3.99999 7 4.44771 7 5V7.99999C7 8.55228 7.44771 8.99999 8 8.99999C8.55229 8.99999 9 8.55228 9 7.99999V5C9 3.89543 8.10457 3 7 3C5.89543 3 5 3.89543 5 5ZM3 10C3 11.1046 3.89543 12 5 12H19C20.1046 12 21 11.1046 21 10C21 8.89543 20.1046 8 19 8H5C3.89543 8 3 8.89543 3 10ZM19 14C20.1046 14 21 14.8954 21 16C21 17.1046 20.1046 18 19 18H5C3.89543 18 3 17.1046 3 16C3 14.8954 3.89543 14 5 14H19Z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-2">
            <a href="#" className="block text-white py-2">
              About
            </a>
            <a href="#" className="block text-white py-2">
              Services
            </a>
            <a href="#" className="block text-white py-2">
              Contact
            </a>

            <div className="relative group">
              <button className="text-white focus:outline-none">
                Dropdown
              </button>
              <ul className=" z-10 hidden group-hover:block bg-blue-500 text-white py-2 space-y-2">
                <li>
                  <ActiveLInk to="/hoc">HOC</ActiveLInk>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
