import React, { Component } from 'react';
import "./UserCard.css";

class UserCard extends Component {
    render() {
        const {followers, following, public_repos, public_gists} = this.props.userDetail;
        return (
            <div className="userCard text-center">
                <div className="badge bg-primary">
                    Followers: {followers}
                </div>
                <div className="badge bg-success">
                    Following: {following}
                </div>
                <div className="badge bg-info text-black">
                    Public repos: {public_repos}
                </div>
                <div className="badge bg-dark">
                    Public gists: {public_gists}
                </div>
                
            </div>
        );
    }
}

export default UserCard;