import VideoFeed from '../components/VideoFeed'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="flex h-screen bg-black">
      <Sidebar />
      <main className="flex-1 overflow-hidden">
        <VideoFeed />
      </main>
    </div>
  )
}