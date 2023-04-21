import { Items } from "./components/Items";

export function Musics() {
  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      <Items image="/album.jpg" alt="Capa do álbum Wasting Light da banda Foo Fighters" name="Wasting Light" />
      <Items image="/album.jpg" alt="Capa do álbum Wasting Light da banda Foo Fighters" name="Wasting Light" />
      <Items image="/album.jpg" alt="Capa do álbum Wasting Light da banda Foo Fighters" name="Wasting Light" />
      <Items image="/album.jpg" alt="Capa do álbum Wasting Light da banda Foo Fighters" name="Wasting Light" />
      <Items image="/album.jpg" alt="Capa do álbum Wasting Light da banda Foo Fighters" name="Wasting Light" />
      <Items image="/album.jpg" alt="Capa do álbum Wasting Light da banda Foo Fighters" name="Wasting Light" />
    </div>
  )
}