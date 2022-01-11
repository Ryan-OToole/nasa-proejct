import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';


class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }


    render() {
        return (
            <div>
                <form>
                    <Button className="searchBtn"></Button>
                    <input className="searchBar" onChange={this.handleChange}></input>
                </form>
            </div>
        );
    }
}

export default SearchBar;