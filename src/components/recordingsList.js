import React from 'react'

const RecordingsList = props => {
  const listRecordings = props.recordings.map(rec => {
    if (rec.type === 'youtube') {
      return (
        <iframe
          width="560"
          height="315"
          className="youtubeIframe"
          src={rec.src}
          frameborder="0"
          allowfullscreen
        />
      )
    } else if (rec.type === 'soundcloud') {
      return (
        <iframe
          className="soundCloud"
          height="166"
          scrolling="no"
          frameborder="no"
          src={rec.src}
        />
      )
    } else if (rec.type === 'vimeo') {
      return (
        <iframe
          className="vimeoIframe"
          src={rec.src}
          width="640"
          height="360"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        />
      )
    }
  })
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {listRecordings}
    </div>
  )
}

export default RecordingsList
