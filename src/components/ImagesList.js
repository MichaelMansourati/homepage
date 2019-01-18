import React from 'react'
import Img from 'gatsby-image'

const ImagesList = ({ imgArr }) => {
  return (
    <div style={{'maxWidth': '100%'}}>
      {imgArr.map(
        img =>
          img.node.image && (
            <Img
              key={img.node.image.id}
              style={{ width: 800, marginBottom: 8, maxWidth: '100%' }}
              sizes={img.node.image.sizes}
              className="photo"
            />
          )
      )}
    </div>
  )
}

export default ImagesList