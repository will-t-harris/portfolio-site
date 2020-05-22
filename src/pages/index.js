import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import SEO from "../components/SEO"
import ProjectImage from "../components/ProjectImage"
import WaveEmoji from "../icons/WaveEmoji"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      bikesAndBytes: file(
        sourceInstanceName: { eq: "images" }
        childImageSharp: {
          fixed: { originalName: { regex: "/bikes-and-bytes/" } }
        }
      ) {
        id
        childImageSharp {
          fixed(width: 350) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      moveWithMadeline: file(
        sourceInstanceName: { eq: "images" }
        childImageSharp: {
          fixed: { originalName: { regex: "/move-with-madeline/" } }
        }
      ) {
        id
        childImageSharp {
          fixed(width: 350) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      abqBikeTrails: file(
        sourceInstanceName: { eq: "images" }
        childImageSharp: {
          fixed: { originalName: { regex: "/abq-bike-trails/" } }
        }
      ) {
        id
        childImageSharp {
          fixed(width: 350) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return (
    <>
      <SEO title="Home" />

      <div className="mx-auto my-10">
        <WaveEmoji />
        <h1 className="font-body mx-8 text-5xl font-black">
          Hi there, I'm Will!
        </h1>
      </div>
      <p className="font-body font-bold mx-8 lg:mx-auto lg:w-1/2 mb-12 leading-8 opacity-75 lg:mb-20 lg:mx-auto">
        Blurb about me blah blah blah Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Praesent vitae orci at. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Fusce rhoncus mauris sit amet lobortis
        rutrum. Nulla non sagittis neque. Mauris eget risus sit amet justo porta
        vehicula. Morbi a magna volutpat, ullamcorper risus vel, egestas tortor.
        Morbi tristique, massa vel accumsan dictum, mauris velit tincidunt
        justo, non ullamcorper tortor neque quis leo. Integer nisl mauris,
        sollicitudin a imperdiet a, ornare id risus. Duis eleifend leo mauris,
        pellentesque lacinia nisl volutpat sed.
      </p>

      <div className="mx-auto mb-10 lg:grid lg:grid-cols-10 lg:grid-rows-1 lg:mb-10 lg:mx-0">
        <h2 className="text-center font-body text-2xl font-extrabold border-b-8 border-primary w-40 lg:grid lg:col-start-2">
          PROJECTS
        </h2>
      </div>

      <div className="flex flex-col my-10 lg:grid lg:grid-cols-10 lg:grid-rows-1 lg:mt-10">
        <a
          href="https://bikesandbytes.net"
          className="flex flex-col lg:col-start-2 lg:col-span-2"
        >
          <ProjectImage
            data={data.bikesAndBytes.childImageSharp}
            border="border-secondary"
          />
        </a>
        <a
          href="https://bikesandbytes.net"
          className="w-40 font-body font-semibold self-center text-center border-b-2 border-secondary mt-10 lg:mt-0 lg:mx-auto lg:col-start-5"
        >
          bikesandbytes.net
        </a>
        <p className="mx-8 mt-10 self-center leading-6 opacity-75 lg:my-0 lg:mx-0 lg:col-start-7 lg:col-span-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rhoncus
          mauris sit amet lobortis rutrum. Nulla non sagittis neque. Mauris eget
          risus sit amet justo porta vehicula. Morbi a magna volutpat,
          ullamcorper risus vel, egestas tortor. Morbi tristique, massa vel
          accumsan dictum, mauris velit tincidunt justo, non ullamcorper tortor
          neque quis leo. Integer nisl mauris, sollicitudin a imperdiet a,
          ornare id risus. Duis eleifend leo mauris, pellentesque lacinia nisl
          volutpat sed.
        </p>
      </div>

      <div className="flex flex-col my-10 lg:my-20 lg:grid lg:grid-cols-10 lg:grid-rows-1 ">
        <a
          href="https://movewithmadeline.com"
          className="flex flex-col lg:col-start-2 lg:col-span-2"
        >
          <ProjectImage
            data={data.moveWithMadeline.childImageSharp}
            border="border-accent"
          />
        </a>
        <a
          href="https://movewithmadeline.com"
          className="w-56 font-body font-semibold self-center text-center border-b-2 mt-10 border-accent lg:mt-0 lg:col-start-5 "
        >
          movewithmadeline.com
        </a>
        <p className="mx-8 mt-10 self-center leading-6 opacity-75 lg:my-0 lg:mx-0 lg:col-start-7 lg:col-span-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rhoncus
          mauris sit amet lobortis rutrum. Nulla non sagittis neque. Mauris eget
          risus sit amet justo porta vehicula. Morbi a magna volutpat,
          ullamcorper risus vel, egestas tortor. Morbi tristique, massa vel
          accumsan dictum, mauris velit tincidunt justo, non ullamcorper tortor
          neque quis leo. Integer nisl mauris, sollicitudin a imperdiet a,
          ornare id risus. Duis eleifend leo mauris, pellentesque lacinia nisl
          volutpat sed.
        </p>
      </div>

      <div className="flex flex-col mt-10 mb-32 lg:grid lg:grid-cols-10 lg:grid-rows-1 ">
        <a
          href="http://abqtrails.deepdivecoding.com/"
          className="flex flex-col lg:col-start-2 lg:col-span-2"
        >
          <ProjectImage
            data={data.abqBikeTrails.childImageSharp}
            border="border-primary"
          />
        </a>
        <a
          href="http://abqtrails.deepdivecoding.com/"
          className="w-64 font-body font-semibold self-center text-center border-b-2 mt-10 border-primary lg:mt-0 lg:col-start-5 lg:mx-auto"
        >
          abqtrails.deepdivecoding.com
        </a>
        <p className="mx-8 mt-10 self-center leading-6 opacity-75 lg:my-0 lg:mx-0 lg:col-start-7 lg:col-span-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rhoncus
          mauris sit amet lobortis rutrum. Nulla non sagittis neque. Mauris eget
          risus sit amet justo porta vehicula. Morbi a magna volutpat,
          ullamcorper risus vel, egestas tortor. Morbi tristique, massa vel
          accumsan dictum, mauris velit tincidunt justo, non ullamcorper tortor
          neque quis leo. Integer nisl mauris, sollicitudin a imperdiet a,
          ornare id risus. Duis eleifend leo mauris, pellentesque lacinia nisl
          volutpat sed.
        </p>
      </div>
    </>
  )
}

export default IndexPage
