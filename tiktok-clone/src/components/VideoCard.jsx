'use client'

import { useState, useRef, useEffect } from 'react'
import { Heart, MessageCircle, Share } from 'lucide-react'

export default function VideoCard({ video, isActive }) {
  const [isLiked, setIsLiked] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    if (isActive && videoRef.current) {
      videoRef.current.play()
    } else if (videoRef.current) {
      videoRef.current.pause()
    }
  }, [isActive])

  const handleLike = () => {
    setIsLiked(!isLiked)
  }

  return (
    <div className="relative h-screen w-full snap-start">
      <video
        ref={videoRef}
        src={video.videoUrl}
        className="h-full w-full object-cover"
        loop
        muted
        playsInline
      />
      <div className="absolute bottom-0 left-0 p-4 text-white">
        <h2 className="text-lg font-bold">{video.username}</h2>
        <p>{video.description}</p>
      </div>
      <div className="absolute bottom-0 right-0 p-4 flex flex-col items-center space-y-4">
        <button onClick={handleLike} className="focus:outline-none">
          <Heart className={`w-8 h-8 ${isLiked ? 'text-red-500' : 'text-white'}`} fill={isLiked ? 'currentColor' : 'none'} />
          <span className="text-white text-sm">{video.likes}</span>
        </button>
        <button className="focus:outline-none">
          <MessageCircle className="w-8 h-8 text-white" />
          <span className="text-white text-sm">{video.comments}</span>
        </button>
        <button className="focus:outline-none">
          <Share className="w-8 h-8 text-white" />
          <span className="text-white text-sm">{video.shares}</span>
        </button>
      </div>
    </div>
  )
}