import React from 'react'
import Img from 'gatsby-image'

const ImagesList = props => {
  const imgList = props.imgArr.map(
    img =>
      img.node.childImageSharp && (
        <Img
          key={img.node.childImageSharp.internal.contentDigest}
          style={{ width: 800, marginBottom: 8 }}
          sizes={img.node.childImageSharp.sizes}
          className="photo"
        />
      )
  )
  return <div>{imgList}</div>
}

export default ImagesList