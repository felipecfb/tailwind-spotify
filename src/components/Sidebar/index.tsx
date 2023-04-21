import { HomeIcon, Library, Search } from "lucide-react";
import { Navbar } from "./components/Navbar";
import { Playlists } from "./components/Playlists";

export function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full" />
      </div>

      <Navbar />

      <Playlists />
    </aside>
  )
}