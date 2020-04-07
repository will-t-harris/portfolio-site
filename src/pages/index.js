import React from "react"
import { Link } from "gatsby"

import SEO from "../components/SEO"

const IndexPage = () => (
  <>
    <SEO title="Home" />

    <div className="col-start-4 row-start-1">
      <svg width="40" height="40">
        <path
          d="M4.861 9.105c.94-.657 2.357-.531 3.201.166l-.968-1.407c-.779-1.111-.5-2.313.612-3.093 1.112-.777 4.263 1.312 4.263 1.312-.786-1.122-.639-2.544.483-3.331a2.483 2.483 0 013.456.611l10.42 14.72L25 30.958l-11.083-4.042L4.25 12.583a2.495 2.495 0 01.611-3.478z"
          fill="#EF9645"
        />
        <path
          d="M2.695 17.294s-1.132-1.65.519-2.781c1.649-1.131 2.78.518 2.78.518l5.251 7.658c.181-.302.379-.6.6-.894L4.557 11.168s-1.131-1.649.519-2.78c1.649-1.131 2.78.518 2.78.518l6.855 9.997c.255-.208.516-.417.785-.622L7.549 6.69s-1.131-1.649.519-2.78c1.649-1.131 2.78.518 2.78.518l7.947 11.589c.292-.179.581-.334.871-.498L12.238 4.687s-1.131-1.649.518-2.78c1.649-1.131 2.78.518 2.78.518l7.854 11.454 1.194 1.742c-4.948 3.394-5.419 9.779-2.592 13.902.565.825 1.39.26 1.39.26-3.393-4.949-2.357-10.51 2.592-13.903l-1.459-7.302s-.545-1.924 1.378-2.47c1.924-.545 2.47 1.379 2.47 1.379l1.685 5.004c.668 1.984 1.379 3.961 2.32 5.831 2.657 5.28 1.07 11.842-3.94 15.279-5.465 3.747-12.936 2.354-16.684-3.11L2.695 17.294z"
          fill="#FFDC5D"
        />
        <path
          d="M12 32c-4 0-8.042-4.042-8.042-8.042 0-.553-.405-1-.958-1-.553 0-1.042.447-1.042 1C1.958 29.958 6 34 12 34c.553 0 1-.489 1-1.042S12.553 32 12 32z"
          fill="#5DADEC"
        />
        <path
          d="M7 33.958c-3 0-5-2-5-5a1 1 0 10-2 0c0 4 3 7 7 7a1 1 0 100-2zm17-32a1 1 0 000 2c4 0 8 3.589 8 8a1 1 0 002 0c0-5.514-4-10-10-10z"
          fill="#5DADEC"
        />
        <path
          d="M29 0c-.552 0-1 .406-1 .958C28 1.51 28.448 2 29 2c3 0 4.958 2.225 4.958 4.958 0 .552.489 1 1.042 1s.958-.448.958-1C35.958 3.121 33 0 29 0z"
          fill="#5DADEC"
        />
      </svg>
    </div>
    <p className="font-body row-start-3 col-start-4 col-end-9">
      Blurb about me blah blah blah Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Praesent vitae orci at.
    </p>

    <div className="row-start-5 col-start-4 col-end-5 text-center">
      <h2 className="font-body text-2xl font-semibold border-b-8 border-primaryGreen w-32">
        Projects
      </h2>
    </div>

    <div className="col-start-4 row-start-7 row-end-8">
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </>
)

export default IndexPage
