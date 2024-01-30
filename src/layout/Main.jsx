import React, {Component} from "react";
import Movies from "../components/Movies";
import Preloader from "../components/Preloader"
import Search from "../components/Search";
import LiveSearch from "../components/LiveSearch";
import LiveSearchD10 from "../components/LiveSearchD10";
import {logDOM} from "@testing-library/react";

const API_KEY = process.env.REACT_APP_API_KEY
class Main extends Component {
    state = {
        movies: [],
        loading: true
    }

    componentDidMount() {
        console.log(API_KEY)
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`).then(
            response => response.json()
        ).then(
            data => this.setState({movies: data.Search, loading: false})
        )

    }

    handleSearch = (val) => {
        //console.log(val)
        //this.setState({[event.target.name]: event.target.value})
        const search = val.target.value;
        if (search.length > 3) {
            fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=` + search).then(
                response => response.json()
                //response => console.log(response.json())
            ).then(
                data => this.setState({movies: data.Search, loading: false})
                //data => console.log(data)
            )
        }
    }

    searchMovies = (str, type = 'All') => {
        this.setState({loading: true});
        let apiUrl = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}`
        if (type !== 'All') {
            apiUrl += `&type=${type};`
        }
        fetch(apiUrl).then(
            response => response.json()
        ).then(
            //data => console.log(data)
            data => this.setState({movies: data.Search, loading: false})
        )
    }

    handleType = (str= 'matrix', type = 'All') => {
        let apiUrl = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}`
        if (type !== 'All') {
            apiUrl += `&type=${type};`
        }
        fetch(apiUrl).then(
            response => response.json()
        ).then(
            //data => console.log(data)
            data => this.setState({movies: data.Search})
        )
    }

    render() {
        const {movies, loading} = this.state;
        return <main className="container content">
            <LiveSearch handleSearch={this.handleSearch} handleType={this.handleType}/>
            <Search searchMovies={this.searchMovies}/>
            {!loading ?
            <Movies movies={movies}/> : <Preloader/> }
        </main>
    }
}

export default Main