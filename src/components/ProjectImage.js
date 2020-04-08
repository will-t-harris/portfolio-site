import React from "react"

import Img from "gatsby-image"

const ProjectImage = ({ data, title }) => (
  <>
    <div className="flex pb-8">
      <Img
        fixed={data.childImageSharp.fixed}
        className="border-2 border-accent mx-auto lg:ml-64"
      />
    </div>
  </>
)

export default ProjectImage
