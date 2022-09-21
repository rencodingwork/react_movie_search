import { useState, useEffect } from "react";

import './App.css'
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";

//15d31df3

const API_URL = 'http://www.omdbapi.com?apikey=15d31df3';

const App = () => {

    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')


    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setMovies(data.Search);

    }

    useEffect(()=>{
        searchMovies('Iron man')
    },[])

    return (
        <div className="app">
            <h1>冬冬影城</h1>

            <div className="search">
                <input 
                    placeholder="搜尋電影(英文名稱)"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img 
                    src={SearchIcon}
                    alt="search"
                    onClick={()=>searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie)=>(
                            <MovieCard movie={movie}/>
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>找不到此電影</h2>
                    </div>
                )}

           
        </div>  
    );
}

export default App;