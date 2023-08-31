import { useState } from "react"
import { ShowMovies } from "./components/ShowMovies"

export const MovieFinder = () => {

    const urlBase = "https://api.themoviedb.org/3/search/movie"
    const API_KEY = "9afba728b4890c4d1edc625d3c3cddb7"

    const [buscador, setBuscador] = useState('')
    const [peliculas, setPeliculas] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchPeliculas()
    }

    const handleInputChange = (e) => {
        setBuscador(e.target.value)
    }

    const fetchPeliculas = async () => {
        try {
            const response = await fetch(`${urlBase}?query=${buscador}&api_key=${API_KEY}`)
            const data = await response.json()
            setPeliculas(data.results)
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <div className="md:container md:mx-auto text-center py-12 flex flex-col items-center font-mono">
            <h1 className="font-bold text-2xl font-mono">Movie Finder</h1>
            <form onSubmit={handleSubmit} className="w-full max-w-screen-md mt-10 ">
                <div className="flex items-center border-b border-teal-500 py-2">
                    <input
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Find a movie"
                        value={buscador}
                        onChange={handleInputChange} />
                    <button
                        className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                        Search
                    </button>

                </div>
            </form>
            <ShowMovies peliculas={peliculas} />
        </div>
    )
}
