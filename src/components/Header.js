import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import classnames from "classnames"

import HamburgerMenu from "../icons/HamburgerMenu"

const Header = ({ siteTitle, resume }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  let menuButtonClass = classnames({
    hidden: !isOpen,
  })

  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap bg-navbarBackground p-6 fixed w-full z-10 top-0 navbar-linear-gradient">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link
            className="text-white no-underline hover:text-white hover:no-underline"
            to="/"
          >
            <span className="font-body font-bold font-semibold text-2xl pl-2">
              willharris.dev
            </span>
          </Link>
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
          className={`w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block pt-6 lg:pt-0 ${menuButtonClass}`}
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
              <a
                className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                href={resume}
                download
              >
                Resume
              </a>
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
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
