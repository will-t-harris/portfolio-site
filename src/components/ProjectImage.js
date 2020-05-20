import React from "react"
import PropTypes from "prop-types"

import Img from "gatsby-image"

const ProjectImage = ({ data, border }) => (
  <div className="flex flex-col mt-10">
    <Img
      fixed={data.fixed}
      className={`self-center border-2 ${border} mx-auto lg:ml-64`}
    />
  </div>
)

export default ProjectImage

ProjectImage.propTypes = {
  border: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
}
