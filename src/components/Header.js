import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

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
          <svg
            width="22"
            height="19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M.786 3.375h20.428c.434 0 .786-.336.786-.75V.75c0-.414-.352-.75-.786-.75H.786C.352 0 0 .336 0 .75v1.875c0 .414.352.75.786.75zm0 7.5h20.428c.434 0 .786-.336.786-.75V8.25c0-.414-.352-.75-.786-.75H.786C.352 7.5 0 7.836 0 8.25v1.875c0 .414.352.75.786.75zm0 7.5h20.428c.434 0 .786-.336.786-.75V15.75c0-.414-.352-.75-.786-.75H.786c-.434 0-.786.336-.786.75v1.875c0 .414.352.75.786.75z"
              fill="#fff"
            />
          </svg>
        </button>
      </div>

      <div
        className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0"
        id="nav-content"
      >
        <ul className="list-reset lg:flex justify-end flex-1 items-center">
          <li className="mr-3">
            <a
              className="inline-block py-2 px-4 text-white no-underline"
              href="#"
            >
              Active
            </a>
          </li>
          <li className="mr-3">
            <a
              className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
              href="#"
            >
              link
            </a>
          </li>
          <li className="mr-3">
            <a
              className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
              href="#"
            >
              link
            </a>
          </li>
          <li className="mr-3">
            <a
              className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
              href="#"
            >
              link
            </a>
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
