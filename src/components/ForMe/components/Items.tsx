import Image from "next/image";

interface ItemsProps {
  image: string
  alt: string
  name: string
  description: string
}

export function Items({ image, alt, name, description }: ItemsProps) {
  return (
    <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
      <Image src={image} className="w-full" width={104} height={104} alt={alt} />
      <strong className="font-semibold">
        {name}
      </strong>
      <span className="text-sm text-zinc-400">
        {description}
      </span>
    </a>
  )
}