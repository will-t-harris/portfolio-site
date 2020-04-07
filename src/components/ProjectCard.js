import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ProjectCard = props => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "writer.jpg" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <>
      <div className="flex flex-row">
        <Img
          fixed={data.file.childImageSharp.fixed}
          className="border-2 border-accent mr-6"
        />
        <a
          href="https://rebeccawaldron.net"
          className="font-body font-normal self-center"
        >
          rebeccawaldron.net
        </a>
      </div>
    </>
  )
}

export default ProjectCard
