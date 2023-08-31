import { useState } from "react"

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

            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {peliculas.map((pelicula) => (
                        <div key={pelicula.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={pelicula.title} />
                            <p className="text-sm text-gray-500 truncate dark:text-gray-400 mt-2 text-left pl-3">Average: {pelicula.vote_average}</p>
                            <div className="p-3">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{pelicula.title}</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">{pelicula.overview}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
