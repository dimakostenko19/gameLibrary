export default function GameList({gameList, searchValue, selectedGenreName}) {
    
  return (

    <div>
        <h2 style={{marginTop:"30px"}}>{selectedGenreName} Games</h2>
        <div className="pop-item">
          {gameList.filter((game)=>game.name.toLowerCase().includes(searchValue)).map((game)=>(
            <div className="item">
              <img src={game.background_image}/>
                <h3>{game.name}</h3>
                <div className="item__about">
              <div className="item__rating">
              ⭐️ {game.rating}
              </div>
              <div className="item__comment">
              💬 {game.ratings_count}
              </div>
              <div className="item__like">
              🔥 {game.suggestions_count}
              </div>
          </div>
          </div>
        ))}
        </div>
    </div>
  );
}