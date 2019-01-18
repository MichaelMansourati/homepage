import React from 'react'

export default ({ recordings }) => {
  const listRecordings = recordings.map(recording => {
    const { type, url: {url}, title, id } = recording.node
    if (type === 'youtube') {
      return (
        <iframe
          key={id}
          title={title}
          width="560"
          height="315"
          className="youtubeIframe"
          src={url}
          frameBorder="0"
          allowFullScreen
        />
      )
    } else if (type === 'soundcloud') {
      return (
        <iframe
          key={id}
          title={title}
          className="soundCloud"
          height="166"
          scrolling="no"
          frameBorder="no"
          src={url}
        />
      )
    } else if (type === 'vimeo') {
      return (
        <iframe
          key={id}
          title={title}
          className="vimeoIframe"
          src={url}
          width="640"
          height="360"
          frameBorder="0"
          allowFullScreen
        />
      )
    }
    return ''
  })
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column-reverse',
        alignItems: 'center',
      }}
    >
      {listRecordings}
    </div>
  )
}