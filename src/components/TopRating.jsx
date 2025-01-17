import { useState, useEffect } from "react";
import { getAllGames } from "../services/API";

export default function TopRated({gameList}) {

    return (
    <div>
        <h2>Trending Games</h2>
        <div className="top__games">
          {gameList.slice(0, 5).map((game)=>(
            <div className="img-title">
                <img src={game.background_image}/>
                <span>{game.name}</span>
            </div>
          ))}
        </div>
    </div>
  );
}