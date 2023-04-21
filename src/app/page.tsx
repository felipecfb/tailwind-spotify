import { Footer } from "@/components/Footer";
import { ForMe } from "@/components/ForMe";
import { Musics } from "@/components/Musics";
import { Sidebar } from "@/components/Sidebar";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>

          </div>
          <h1 className="font-semibold text-3xl mt-10">
            Good Afternoon
          </h1>

          <Musics />

          <ForMe />

        </main>
      </div>
      <Footer />
    </div>
  )
}
