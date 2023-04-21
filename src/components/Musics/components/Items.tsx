import { Play } from "lucide-react";
import Image from "next/image";

interface ItemsProps {
  image: string
  alt: string
  name: string
}

export function Items({ image, alt, name }: ItemsProps) {
  return (
    <a href="#" className="bg-white/10 group flex items-center gap-4 rounded-md hover:bg-white/20 transition-colors" overflow-hidden={true}>
      <Image src={image} width={104} height={104} alt={alt} />
      <strong>{name}</strong>
      <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
        <Play />
      </button>
    </a>
  )
}