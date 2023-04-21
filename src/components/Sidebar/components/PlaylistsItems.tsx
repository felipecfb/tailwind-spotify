interface PlaylistsItemsProps {
  name: string
}

export function PlaylistsItems({ name }: PlaylistsItemsProps) {
  return (
    <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
      {name}
    </a>
  )
}