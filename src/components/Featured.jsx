import React from 'react'
import { Container } from './Container'

const Featured = () => {
  return (
    <div className="grid gap-4">
      <div>
        <video className="rounded-lg" controls autoPlay muted playsInline poster="https://res.cloudinary.com/dxt5dbdan/image/upload/v1712047955/Header/VS--YouTube--0_01_1_sfvfmk.webp">
          <source
            src="https://res.cloudinary.com/dxt5dbdan/video/upload/v1712042431/Header/Mountain_Lin_Train_wvhr3b.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default Featured
