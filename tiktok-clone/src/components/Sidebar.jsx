import { Home, Compass, PlusSquare, MessageCircle, User } from 'lucide-react'

export default function Sidebar() {
  return (
    <div className="w-16 bg-black border-r border-gray-800 flex flex-col items-center py-4 space-y-8">
      <button className="text-white focus:outline-none">
        <Home className="w-6 h-6" />
      </button>
      <button className="text-white focus:outline-none">
        <Compass className="w-6 h-6" />
      </button>
      <button className="text-white focus:outline-none">
        <PlusSquare className="w-6 h-6" />
      </button>
      <button className="text-white focus:outline-none">
        <MessageCircle className="w-6 h-6" />
      </button>
      <button className="text-white focus:outline-none">
        <User className="w-6 h-6" />
      </button>
    </div>
  )
}