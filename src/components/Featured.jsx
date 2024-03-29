import React from 'react'
import { Container } from './Container'

const Featured = () => {
  return (
    <div className="mt-16 grid gap-4 md:mt-20">
      <div>
        <video className="rounded-lg" controls autoPlay muted>
          <source
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* <div className="grid grid-cols-5 gap-4">
        <div>
          <a href="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" target="_blank" rel="noopener noreferrer">
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
          </a>
        </div>
        <div>
          <a href="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" target="_blank" rel="noopener noreferrer">
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="" />
          </a>
        </div>
        <div>
          <a href="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" target="_blank" rel="noopener noreferrer">
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="" />
          </a>
        </div>
        <div>
          <a href="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" target="_blank" rel="noopener noreferrer">
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="" />
          </a>
        </div>
        <div>
          <a href="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" target="_blank" rel="noopener noreferrer">
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="" />
          </a>
        </div>
      </div> */}
    </div>
  )
}

export default Featured
