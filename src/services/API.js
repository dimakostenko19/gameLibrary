import axios from 'axios'

const key = "af19e2cdab9d4f9c87304f75fa51b753"

const options = {
    baseURL: 'https://api.rawg.io/api'
}
const axiosInctance = axios.create(options)
const getGenreList = async () =>{
    const response = await axiosInctance('/genres?key='+key)
    return response.data.results
}
const getAllGames = async()=>{
    const response = await axiosInctance('/games?key='+key)
    return response.data.results
}
const getGamesByGenreId = async(id, page=1)=>{
    const response = await axiosInctance(`/games?key=${key}&genres=${id}&page=${page}`)
    return response.data.results
}

export {getGenreList, getAllGames, getGamesByGenreId}