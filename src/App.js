import { useEffect } from "react";

import './App.css'
import SearchIcon from './search.svg'

//15d31df3

const API_URL = 'http://www.omdbapi.com?apikey=15d31df3';

const movie1 = {
    "Title": "Superman, Spiderman or Batman",
    "Year": "2011",
    "imdbID": "tt2084949",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
}

const App = () => {

    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        console.log(data.Search);

    }

    useEffect(()=>{
        searchMovies('Spiderman')
    },[])

    return (
        <div className="app">
            <h1>冬冬影城</h1>

            <div className="search">
                <input 
                    placeholder="搜尋電影(英文名稱)"
                    value="Spider"
                    onChange={()=>{}}
                />
                <img 
                    src={SearchIcon}
                    alt="search"
                    onClick={()=>{}}
                />
            </div>
            <div></div>
        </div>  
    );
}

export default App;