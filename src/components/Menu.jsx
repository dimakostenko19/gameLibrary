import { useEffect, useState } from "react"
import { getGenreList, getGamesByGenreId } from "../services/API"
export default function Menu({active, setSelectedGenreId, setMenuActive, setPage, setSelectedGenreName}) {


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
              <div onClick={()=>{setSelectedGenreId(item.id); setPage(1); setMenuActive(false); setSelectedGenreName(item.name)}} className="genres-item">
                <img src={item.image_background}/>
              <li>{item.name}</li>
              </div>
            ))}
        </ul>
        </div>

  );
}