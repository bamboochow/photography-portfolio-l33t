import React from 'react'
import { Container } from './Container'

const Featured = () => {
  return (
    <div className="mt-16 grid gap-4 md:mt-20">
      <div>
        <video className="rounded-lg" controls autoPlay muted>
          <source
            src="https://res.cloudinary.com/dxt5dbdan/video/upload/v1712042431/Mountain_Lin_Train_wvhr3b.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

    </div>
  )
}

export default Featured
