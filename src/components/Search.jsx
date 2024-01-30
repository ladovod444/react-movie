import React, {Component} from "react";
import * as events from "events";
class Search extends Component  {
    // constructor(props) {
    //     const {handleSearch} = props;
    //     super();
    //     this.handleSearch = handleSearch;
    // }
    state = {
        search: '',
        type: 'All',
    }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search);
        }
    }

    handleSearch = (event) => {
        //if (event.target.value.length > 3) {
            this.props.searchMovies(this.state.search, this.state.type);
        //}
    }
    handleType = (event) => {
        const type = event.target.value;
        this.setState({type:type});
        console.log(type);
    }

    render() {
        const {search, type} = this.state;
        return <div className='Search'>
            <div className="input-field">
                <input
                    type="text"
                    placeholder="search"
                    name="firstName"
                    value={search}
                    onChange={(e) => this.setState({search:e.target.value})}
                    onKeyDown={this.handleKey}
                />
                <p>
                    <label className="movies-type">
                        <input
                            className="with-gap"
                            name="type" type="radio"
                            value="All"
                            checked={type === 'All'}
                            onChange={this.handleType}
                        />
                        <span>All</span>
                    </label>
                    <label className="movies-type">
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            value="movie"
                            checked={type === 'movie'}
                            onChange={this.handleType}
                        />
                        <span>Movie</span>
                    </label>
                    <label className="movies-type">
                        <input
                            className="with-gap"
                            name="type" type="radio"
                            value="game"
                            checked={type === 'game'}
                            onChange={this.handleType}
                        />
                        <span>Game</span>
                    </label>
                    <label className="movies-type">
                        <input
                            className="with-gap"
                            name="type-live" type="radio"
                            value="series"
                            checked={type === 'series'}
                            onChange={this.handleType}
                        />
                        <span>Series</span>
                    </label>
                </p>
                <button className="btn search-btn" onClick={this.handleSearch}>Search</button>
            </div>
        </div>
    }
}

export default Search;