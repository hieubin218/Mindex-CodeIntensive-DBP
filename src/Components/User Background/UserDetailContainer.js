import React, { Component } from 'react';
import "../User Background/UserDetailContainer.css";



class UserDetailContainer extends Component {
    render() {
        const {avatar_url, name, login, location, bio, blog, company} = this.props.userDetail;
        const {onDirectUserGitHub} = this.props;
        
        return (
            <div className="background-container">
                <div className="avt_location">
                    <img className="avatar" src={avatar_url}
                         alt="avatar" />
                    <h4 className="profileName">
                        <strong>{name}</strong>
                    </h4>
                    <h6 className="location"> 
                        <strong>Location: </strong> 
                        {location}
                    </h6>
                </div>

                <div className="bio">
                    <h4>My Biography</h4>
                    <p>{bio}</p>
                    <p className="GIT-Username">
                        <strong>Username: </strong> {login}
                    </p>

                    {
                        company && (
                            <p className="Company">
                                <strong>Company: </strong> {company}
                            </p>
                        )
                    }
                    
                    {
                        blog && (
                            <p className="Blog">
                                <strong>Blog:</strong> {blog}
                            </p>
                        )
                    }

                    <button  
                    type="button"
                    onClick={()=> onDirectUserGitHub(login)}
                    className="btn btn-dark visitBtn">
                        Visit Github Profile
                </button>
                </div>
            </div>
        );
    }
}

export default UserDetailContainer;