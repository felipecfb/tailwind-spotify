import { HomeIcon, Library, Search } from "lucide-react";
import { NavbarItems } from "./NavbarItems";

export function Navbar() {
  return (
    <nav className="space-y-5 mt-10">
      <NavbarItems icon={<HomeIcon />} title="Home" />
      <NavbarItems icon={<Search />} title="Search" />
      <NavbarItems icon={<Library />} title="Your Library" />
    </nav>
  )
}