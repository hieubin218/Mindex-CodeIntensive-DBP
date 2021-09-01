import React from 'react';
import "./UserItem.css";


const UserItem = (props) => {
    const {login, avatar_url } = props.userItem;
    return (
        <div className="user col-12 col-md-6 col-lg-4">
            <div className="user_avatar">
                <img src={avatar_url} alt="img" />
            </div> 

            <p className="user_name">{login}</p>
            <button className="btn btn-secondary">MORE</button>
            
        </div>
    );

}
export default UserItem;