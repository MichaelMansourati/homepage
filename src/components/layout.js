import React from 'react'

export default ({ children }) => (
  <div
    style={{
      margin: 'auto',
      width: 800,
      maxWidth: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    {children}
  </div>
)
