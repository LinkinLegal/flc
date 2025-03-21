import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a
          href="https://flowbite.com"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            FLC
          </span>
        </a>
        <button
          data-collapse-toggle="mega-menu-full-cta"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mega-menu-full-cta"
          aria-expanded={isMenuOpen}
          onClick={handleMenuToggle}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          id="mega-menu-full-cta"
          className={`items-center justify-between ${isMenuOpen ? "flex" : "hidden"} w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Industry
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Tax
              </a>
            </li>
            <li>
              <button
                id="mega-menu-full-cta-dropdown-button"
                data-collapse-toggle="mega-menu-full-cta-dropdown"
                data-dropdown-placement="bottom"
                className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                onClick={handleDropdownToggle}
              >
                Business Setup
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </li>
            <li>
              <button
                id="mega-menu-full-cta-dropdown-button"
                data-collapse-toggle="mega-menu-full-cta-dropdown"
                data-dropdown-placement="bottom"
                className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                onClick={handleDropdownToggle}
              >
                Services
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </li>

            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Join Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`mt-1 bg-white border-gray-200 shadow-xs border-y dark:bg-gray-800 dark:border-gray-600 ${isDropdownOpen ? "block" : "hidden"}`}
      >
        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
          <ul
            className="space-y-4 sm:mb-4 md:mb-0"
            aria-labelledby="mega-menu-full-cta-button"
          >
            <li>
              <a
                href="#"
                className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                Online Stores
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                Segmentation
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                Marketing CRM
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                Online Stores
              </a>
            </li>
          </ul>
          <ul className="hidden mb-4 space-y-4 md:mb-0 sm:block">
            <li>
              <a
                href="#"
                className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                Our Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                License
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                Resources
              </a>
            </li>
          </ul>
          <div className="mt-4 md:mt-0">
            <h2 className="mb-2 font-semibold text-gray-900 dark:text-white">
              Our brands
            </h2>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              At Flowbite, we have a portfolio of brands that cater to a variety
              of preferences.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-700"
            >
              Explore our brands
              <span className="sr-only">Explore our brands </span>
              <svg
                className="w-3 h-3 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
