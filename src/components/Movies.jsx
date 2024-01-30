import Movie from "./Movie";

function Movies(props) {
    const {movies = []} = props

    return <div className="movies">
        {
         movies.length ? movies.map(
                movie => <Movie key={movie.imdbID} {...movie} />
                //movie => <Movie key={movie.field_imdbid} {...movie} />
            ) : <h4> Nothing found</h4>
        }
    </div>
}

export default Movies;