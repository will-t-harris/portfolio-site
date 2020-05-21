import React from "react"
import PropTypes from "prop-types"

import Img from "gatsby-image"

const ProjectImage = ({ data, border }) => (
  <Img fixed={data.fixed} className={`border-2 ${border} mx-auto lg:mx-0`} />
)

export default ProjectImage

ProjectImage.propTypes = {
  border: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
}
