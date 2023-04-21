import { Items } from "./components/Items";

export function ForMe() {
  return (
    <>
      <h2 className="font-semibold text-2xl mt-10">
        Made for Felipe Bastos
      </h2>
      <div className="grid grid-cols-8 gap-4 mt-4">
        <Items image="/album.jpg" alt="Capa do álbum Wasting Light da banda Foo Fighters" name="Daily Mix 1" description="Wallos, COIN, girl in red and more" />
        <Items image="/album.jpg" alt="Capa do álbum Wasting Light da banda Foo Fighters" name="Daily Mix 1" description="Wallos, COIN, girl in red and more" />
        <Items image="/album.jpg" alt="Capa do álbum Wasting Light da banda Foo Fighters" name="Daily Mix 1" description="Wallos, COIN, girl in red and more" />
        <Items image="/album.jpg" alt="Capa do álbum Wasting Light da banda Foo Fighters" name="Daily Mix 1" description="Wallos, COIN, girl in red and more" />
        <Items image="/album.jpg" alt="Capa do álbum Wasting Light da banda Foo Fighters" name="Daily Mix 1" description="Wallos, COIN, girl in red and more" />
      </div>
    </>
  )
}