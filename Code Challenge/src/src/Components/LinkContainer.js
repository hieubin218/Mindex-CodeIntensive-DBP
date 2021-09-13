import React, { Component } from 'react';
import LinkDetail from './LinkDetail';
import "./LinkContainer.css";
import axios from "axios";


class LinkShorter extends Component {
    state={
        users: [],
    }

    onSearchLink = (user) => {
        this.setState({
            users: [...this.state.users, user],
        })
    }

    onFetchAPI = (search) => {
        const baseURL = "https://api.shrtco.de/v2";
        const response = axios.get(`${baseURL}/shorten?url=${search}/very/long/link.html`);
    }

    render() {
        return (
            <div className="LinkContainer">
                <h3>Link Shortener</h3>

                <LinkDetail onSearchLink={this.onSearchLink}/>
                
            </div>
        );
    }
}

export default LinkShorter;