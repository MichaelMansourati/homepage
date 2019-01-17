import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Layout from '../components/layout.js'
import { graphql } from 'gatsby'

import '../styles/index.css'
import '../styles/mainContainer.css'

const links = [
  { to: '/webdev/', name: 'web dev' },
  { to: '/music/', name: 'music' },
  { to: '/photo/', name: 'photo' },
  { href: 'mailto:mail@michaelmansourati.com', name: 'contact me' },
  { href: 'https://www.github.com/michaelmansourati', name: 'github' },
]

const HomeNav = props => {
  const mappedLinks = props.links.map(
    link =>
      link.to ? (
        <Link
          style={{ marginRight: 10, display: 'inline' }}
          key={link.name}
          to={link.to}
        >
          {link.name}
        </Link>
      ) : (
        <a
          href={link.href}
          style={{ float: 'right', marginLeft: 10 }}
          key={link.name}
        >
          {link.name}
        </a>
      )
  )
  return <div>{mappedLinks}</div>
}

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <Img
          className="top-image"
          id="index-top-image"
          sizes={data.allContentfulCoverImage.edges[0].node.image.sizes}
        />
        <div className="textContainer">
          <Link className="home-link" to="/">
            <h1 style={{ textDecoration: 'none' }}>Michael Mansourati</h1>
          </Link>
          <div style={{ display: 'inline' }}>
            <HomeNav links={links} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query IndexImageQuery {
    allContentfulCoverImage {
      edges {
        node {
          id
          image {
            sizes(maxWidth: 2000) {
              ...GatsbyContentfulSizes_noBase64
            }
          }
        }
      }
    }
  }
`

// export const query = graphql`
//   query IndexImageQuery {
//     allFile(filter: {
//       sourceInstanceName: { regex: "/indexImage/" },
//       extension: {regex: "/jpg/"}
//     }) {
//       edges {
//         node {
//           childImageSharp {
//             sizes(maxWidth: 2000) {
//               ...GatsbyImageSharpSizes_noBase64
//             }
//           }
//         }
//       }
//     }
//   }
// `
