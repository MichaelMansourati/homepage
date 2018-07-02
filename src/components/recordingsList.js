import React from 'react'

const RecordingsList = props => {
  const listRecordings = props.recordings.map(rec => {
    if (rec.type === 'youtube') {
      return (
        <iframe
          key={rec.src}
          width="560"
          height="315"
          className="youtubeIframe"
          src={rec.src}
          frameBorder="0"
          allowFullScreen
        />
      )
    } else if (rec.type === 'soundcloud') {
      return (
        <iframe
          key={rec.src}
          className="soundCloud"
          height="166"
          scrolling="no"
          frameBorder="no"
          src={rec.src}
        />
      )
    } else if (rec.type === 'vimeo') {
      return (
        <iframe
          key={rec.src}
          className="vimeoIframe"
          src={rec.src}
          width="640"
          height="360"
          frameBorder="0"
          webkitallowFullScreen
          mozallowFullScreen
          allowFullScreen
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
