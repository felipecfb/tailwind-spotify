import { PlaylistsItems } from "./PlaylistsItems";

export function Playlists() {
  return (
    <nav className="mt-10 pt-6 border-t border-zinc-800 flex flex-col gap-3">
        <PlaylistsItems name="Hot Hits Brasil" />
        <PlaylistsItems name="Aniver Funk" />
        <PlaylistsItems name="Minha Playlist #13" />
        <PlaylistsItems name="Rap Americano" />
    </nav>
  )
}