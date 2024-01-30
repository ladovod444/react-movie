import React, {Component} from "react";
class LiveSearch extends Component  {
    state = {
        search: '',
        type: 'All',
    }

    handleSearch = (event) => {
        //if (event.target.value.length > 3) {
            this.props.handleSearch(event);
        //}
    }
    handleType = (event) => {
        //if (event.target.value.length > 3) {
        const type = event.target.value;
        this.setState({type:type});
            this.props.handleType(this.state.search, type);
        //}
    }

    render() {
        const {search, type} = this.state;
        return <div className='LeaveSearch'>
            <div className="input-field">
                <input
                    type="text"
                    placeholder="live search"
                    name="firstName"
                    value={search}
                    onChange={(e) => this.setState({search: e.target.value})}
                    onKeyUp={this.handleSearch}
                />
                <p>
                    <label className="movies-type-live">
                        <input
                            className="with-gap"
                            name="type-live" type="radio"
                            value="All"
                            checked={type === 'All'}
                            onChange={this.handleType}
                        />
                        <span>All (live)</span>
                    </label>
                    <label className="movies-type">
                        <input
                            className="with-gap"
                            name="type-live"
                            type="radio"
                            value="movie"
                            checked={type === 'movie'}
                            onChange={this.handleType}
                        />
                        <span>Movie (live)</span>
                    </label>
                    <label className="movies-type">
                        <input
                            className="with-gap"
                            name="type-live" type="radio"
                            value="game"
                            checked={type === 'game'}
                            onChange={this.handleType}
                        />
                        <span>Game (live)</span>
                    </label>
                    <label className="movies-type">
                        <input
                            className="with-gap"
                            name="type-live" type="radio"
                            value="series"
                            checked={type === 'series'}
                            onChange={this.handleType}
                        />
                        <span>Series (live)</span>
                    </label>
                </p>

            </div>
        </div>
    }
}

export default LiveSearch;