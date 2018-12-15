import React from 'react'
import Img from 'gatsby-image'

const ImagesList = ({ imgArr }) => {
  const imgList = imgArr.map(
    img =>
      img.node.childImageSharp && (
        <Img
          key={img.node.image.id}
          style={{ width: 800, marginBottom: 8 }}
          sizes={img.node.image.sizes}
          className="photo"
        />
      )
  )
  return (
    <div>
      {imgArr.map(
        img =>
          img.node.image && (
            <Img
              key={img.node.image.id}
              style={{ width: 800, marginBottom: 8 }}
              sizes={img.node.image.sizes}
              className="photo"
            />
          )
      )}
    </div>
  )
}

export default ImagesList