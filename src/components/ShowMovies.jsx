export const ShowMovies = ({ peliculas }) => {
    return (
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
    )
}
