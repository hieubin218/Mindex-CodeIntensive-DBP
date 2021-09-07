import axios from 'axios';
import React, { Component } from 'react';
import Button from "../../Components/Button/Button";
import UserDetailContainer from '../../Components/User Background/UserDetailContainer';
import Loading from '../../Components/Loading/Loading';
import UserCard from '../../Components/UserCard/UserCard';
import UserGitRepos from '../../Components/UserGitRepos/UserGitRepos';
import UserAPI from '../../Services/UserAPI';


// in Component (Inspect) --> UserDetail --> props: history, match (param (login), path, url), staticContext
class UserDetail extends Component {    
    state = {
        userDetail: {},
        userRepos: [],
        isLoading: false,
    }; 

    async componentDidMount() {
        try {
            this.setState({
                isLoading: true,
            })

            const login = this.props.match.params.login;
            const response = await axios.get(`https://api.github.com/users/${login}`);
            const DataUserRepos = await UserAPI.searchUserRepo(login);
            
            this.setState ({
                userDetail: response.data,
                userRepos: DataUserRepos.data,
                isLoading: false,
            });
        } catch(error) {
            throw(error);
        }   
    }

    // Button Back to Home -> history.push will direct to other page
    onBacktoSearchPage = () => {
        this.props.history.goBack();
        // this.props.history.push("/search")
        // this.props.history.goBack();
        
    }

    onDirectUserGitHub = (username) => {
        window.open(`https://github.com/${username}`, "_blank");
    }

    

    render() {
        const {userDetail, isLoading, userRepos} = this.state;

        if(isLoading) {
            return <Loading />
        }

        return (
            <div>
                <Button label=" 🔙 Back to Home" 
                        onClick={this.onBacktoSearchPage}
                        color="secondary"
                        name="homeButton"
                />

                <UserDetailContainer userDetail={userDetail} onDirectUserGitHub={this.onDirectUserGitHub} />
                <UserCard userDetail={userDetail}  /> 
                <UserGitRepos userRepos={userRepos} />                
                
            </div>
        );
    }
}

export default UserDetail;

// Use <a href=""> for External Link
// Use <Link to=""> for Internal Link