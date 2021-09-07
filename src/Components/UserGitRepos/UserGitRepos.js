import React, { Component } from 'react';
import UserRepoItem from "../../Components/UserRepoItem/UserRepoItem"

class UserGitRepos extends Component {
    render() {
        const {userRepos} = this.props;
        return (
            <div className="row" style={{marginTop: "50px"}}>

                <h4>Repositories</h4>
                    {
                        userRepos.map((EachRepoItem, index) => {
                            return (
                                <UserRepoItem EachRepoItem={EachRepoItem} key={index} />
                            )
                        })
                    }
            </div>
        );
    }
}

export default UserGitRepos;