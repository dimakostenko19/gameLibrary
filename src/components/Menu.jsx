import { useEffect, useState } from "react"
import { getGenreList, getGamesByGenreId } from "../services/API"
export default function Menu({active, setMenuActive, fetchByGenre, setSelectedGenreName}) {


  const [genreList, setGenreList] = useState([])
  useEffect(()=>{
    const fetchGenres = async()=>{
      const genreList =  await getGenreList()
      setGenreList(genreList)

    }
    fetchGenres()
  }, [])

  return (
    <div className={active? "burger-menu active":"burger-menu"}>
        <ul>
            <li className="genres">Genres</li>
            {genreList.map((item)=>(
              <div onClick={()=>{fetchByGenre(item.id); setMenuActive(false); setSelectedGenreName(item.name)}} className="genres-item">
                <img src={item.image_background}/>
              <li>{item.name}</li>
              </div>
            ))}
        </ul>
        </div>

  );
}