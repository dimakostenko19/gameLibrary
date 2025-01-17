import { useState, useEffect } from 'react'
import { getAllGames } from './services/API';

import './App.scss';
import Menu from './components/Menu';
import Slider from './components/Slider';
import TopRated from './components/TopRating';
import GameList from './components/GameList';
import { getGamesByGenreId } from "./services/API"

export default function App() {
  const [gameList, setGameList] = useState([])
  const [gameGenreList, setGameGenreList] = useState([])
  const [selectedGenreName, setSelectedGenreName] = useState('Action')
  const [menuActive, setMenuActive] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  useEffect(()=>{
    const fetchGames = async()=>{
        const gameList = await getAllGames()
        setGameList(gameList)
    }
    fetchGames()
}, [])
  const fetchByGenre = async(id)=>{
    const gamesGenreList = await getGamesByGenreId(id)
    setGameGenreList(gamesGenreList)
    console.log(gameGenreList);
  }
  const onSearchValue=(e)=>{
    setSearchValue(e.target.value)
  }
  return (
    <div className="App">
      <div className="container">
      <header>
        <div className="react-logo">
          <img src="logo192.png" alt="logo"/>
        </div>
        <div className="search-bar">
          <input onChange={onSearchValue} placeholder="Search Games"/>
        </div>
        <div className="menu">
          <button className="menu-btn" onClick={()=>setMenuActive(!menuActive)}>
            <img src="img/menu-icon.png" alt="menu"/>
          </button>
          <Menu active={menuActive} setMenuActive={setMenuActive} fetchByGenre={fetchByGenre} setSelectedGenreName={(name)=>setSelectedGenreName(name)}/>
        </div>
      </header>
      <main onClick={()=>setMenuActive(false)}>
        <Slider/>
        <div className='top-rated-container'>
          <div className='top__item'>
            <TopRated gameList={gameList}/>
          </div>
        </div>
        <div className='popular-container'>
          <GameList gameList={gameGenreList} searchValue={searchValue} selectedGenreName={selectedGenreName}/>
        </div>
      </main>
      </div>
    </div>
  );
}