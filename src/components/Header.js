import React from "react"
import { Link } from "gatsby"

const Header = ({ resume }) => {
  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap bg-navbarBackground p-6 fixed w-full z-10 top-0 navbar-linear-gradient">
        <div className="flex text-white w-full lg:mr-6">
          <Link
            className="hidden lg:flex text-white no-underline hover:text-white hover:no-underline"
            to="/"
          >
            <span className="font-body font-bold font-semibold text-2xl pl-2">
              willharris.dev
            </span>
          </Link>

          <div className="flex mx-auto lg:mr-0">
            <ul className="flex">
              <li className="lg:mr-3">
                <a
                  className="inline-block text-gray-400 no-underline hover:text-gray-100 hover:underline py-2 px-4"
                  href={resume}
                  download
                >
                  RESUME
                </a>
              </li>
              <li className="lg:mr-3">
                <Link
                  className="inline-block text-gray-400 no-underline hover:text-gray-100 hover:underline py-2 px-4"
                  to="#contact"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
