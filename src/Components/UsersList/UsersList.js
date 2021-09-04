import React, {Component} from "react";
import Loading from "../Loading/Loading";
import UserItem from "../UserItem/UserItem";

// Danh sách những user item
// nhận list từ Home Component and map 
// Xây Dựng user component item

class UsersList extends Component {
    render() {
        const {users, isLoading } = this.props;
        if(isLoading) {
            return <Loading />
        }
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


// ReactJS return 1 thẻ --> khi render giao diện thì <Fragment> không tồn tại
// <Fragment> để embeded <Loading> and <div> into one <Fragment> 