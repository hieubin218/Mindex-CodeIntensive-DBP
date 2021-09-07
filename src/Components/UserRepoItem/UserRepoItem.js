import React, { Component } from 'react';
import "./UserRepoItem.css";


class UserRepoItem extends Component {
    render() {
        const {name, html_url, description} = this.props.EachRepoItem;
        return (
            <div className="card col-12 col-md-6 col-lg-4">
                <a> {html_url} </a>
                <h6 className="repos-name"><strong>{name}</strong></h6>
                <p className="repos-description">{description}</p>
            </div>
            
        );
    }
}

export default UserRepoItem;