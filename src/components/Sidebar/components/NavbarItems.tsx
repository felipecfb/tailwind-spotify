import { ReactNode } from "react"

interface NavbarItemsProps {
  icon: ReactNode
  title: string
}

export function NavbarItems({ icon, title }: NavbarItemsProps) {
  return (
    <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
      {icon}
      {title}
    </a>
  )
}