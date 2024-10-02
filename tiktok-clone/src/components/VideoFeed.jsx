'use client'

import { useState, useRef, useEffect } from 'react'
import VideoCard from './VideoCard'

const videos = [
  {
    id: 1,
    username: '@user1',
    description: 'Check out this cool dance!',
    likes: 1234,
    comments: 56,
    shares: 78,
    videoUrl: '/videos/video1.mp4',
  },
  {
    id: 2,
    username: '@user2',
    description: 'Beautiful sunset timelapse',
    likes: 5678,
    comments: 90,
    shares: 12,
    videoUrl: '/videos/video2.mp4',
  },
  // Add more video objects as needed
]

export default function VideoFeed() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const feedRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (feedRef.current) {
        const { scrollTop, clientHeight, scrollHeight } = feedRef.current
        if (scrollTop + clientHeight === scrollHeight) {
          // Load more videos or loop back to the beginning
          setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)
        }
      }
    }

    const feedElement = feedRef.current
    if (feedElement) {
      feedElement.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (feedElement) {
        feedElement.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return (
    <div ref={feedRef} className="h-full overflow-y-scroll snap-y snap-mandatory">
      {videos.map((video, index) => (
        <VideoCard key={video.id} video={video} isActive={index === currentVideoIndex} />
      ))}
    </div>
  )
}