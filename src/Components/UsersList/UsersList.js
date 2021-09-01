import React, {Component} from "react";
import UserItem from "../UserItem/UserItem";

// Danh sách những user item
// nhận list từ Home Component and map 
// Xây Dựng user component item

class UsersList extends Component {
    render() {
        const {users} = this.props;
        return (
            <div className="row" style={{marginTop: "60px"}}>
                {
                    users.map((userItem, index) => {
                        return (
                            <UserItem userItem={userItem} key={index} />
                        )
                    })

                } 
            </div>
        )
    }
}
export default UsersList;