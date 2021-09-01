import React from "react"
import "./UserItem.css"
import { useHistory } from "react-router-dom"


const UserItem = (props) => {
    const {login, avatar_url} = props.userItem;

    const history = useHistory();
    const onLinkToUserDetail = () => {
        // props: history là React-Router-DOM cung cấp
        history.push(`/users/${login}`);
    };


    return (
        <div className="user col-12 col-md-6 col-lg-4">
            <div className="user__avatar">
                <img src={avatar_url} alt="img" />
            </div> 

            <p className="user_name">{login}</p>
            <button 
                className="btn btn-secondary"
                onClick={onLinkToUserDetail} >
                MORE
            </button>
            
        </div>
    );

}
export default UserItem