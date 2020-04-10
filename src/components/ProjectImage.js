import React from "react"
import PropTypes from "prop-types"

import Img from "gatsby-image"

const ProjectImage = ({ data, url, border }) => (
  <div className="flex pb-8">
    <Img
      fixed={data.childImageSharp.fixed}
      className={`border-2 ${border} mx-auto lg:ml-64`}
    />
    <a
      href={`https://www.${url}`}
      className={`font-body font-bold self-center mr-12 lg:mr-auto border-b-2 ${border}`}
    >
      {url}
    </a>
  </div>
)

export default ProjectImage

ProjectImage.propTypes = {
  url: PropTypes.string.isRequired,
  border: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
}
