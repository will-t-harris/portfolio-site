import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import HamburgerMenu from "../icons/HamburgerMenu"

const toggleMenu = event => {
  document.getElementById("nav-content").classList.toggle("hidden")
}

const Header = ({ siteTitle }) => (
  <header>
    <nav className="flex items-center justify-between flex-wrap bg-navbarBackground p-6 fixed w-full z-10 top-0 navbar-linear-gradient">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <a
          className="text-white no-underline hover:text-white hover:no-underline"
          href="#"
        >
          <span className="font-body font-bold font-semibold text-2xl pl-2">
            willharris.dev
          </span>
        </a>
      </div>

      <div className="block lg:hidden">
        <button
          id="nav-toggle"
          className="flex items-center px-3 py-2 text-gray-500 border-gray-600 hover:text-white hover:border-white"
          onClick={toggleMenu}
        >
          <HamburgerMenu />
        </button>
      </div>

      <div
        className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0"
        id="nav-content"
      >
        <ul className="list-reset lg:flex justify-end flex-1 items-center">
          <li className="mr-3">
            <Link
              className="inline-block py-2 px-4 text-white no-underline"
              to="#"
            >
              Home
            </Link>
          </li>
          <li className="mr-3">
            <Link
              className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
              to="#"
            >
              Resume
            </Link>
          </li>
          <li className="mr-3">
            <Link
              className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
              to="#"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
