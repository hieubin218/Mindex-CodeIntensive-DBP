import React, { Component } from 'react';
import LinkDetail from './LinkDetail';
import "./LinkContainer.css";
import axios from "axios";
import LinkGenegrate from './LinkGenegrate';


class LinkShorter extends Component {
    state={
        users: [],
    }


    // Fetch API by tool
    onFetchUsers = async (search) => {
        const baseURL = "https://api.shrtco.de/v2";
        try {
            const response = await axios.get(`${baseURL}/shorten?url=${search}/very/long/link.html`);
        
            this.setState({
                users: response.data.result.full_short_link,
            });
        } catch(error) {
            throw(error);
        }
    };

    render() {
        return (
            <div className="LinkContainer">
                <h3>Link Shortener</h3>

                <LinkDetail onFetchUsers={this.onFetchUsers}/>
                <LinkGenegrate users={this.state.users}/>
            </div>
        );
    }
}

export default LinkShorter;