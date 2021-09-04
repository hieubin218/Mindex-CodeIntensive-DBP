import React, { Component } from 'react';
import UserAPI from '../../Services/UserAPI';
import UsersList from '../../Components/UsersList/UsersList';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isLoading: false,
        };
    };

    // Mới vào Home Page --> lấy dữ liệu về --> Call API trong componentDidMount
    // Call API requires a proper services
    // Cấu trúc response (object) khác nhau --> Nên test API trả về trước 
    async componentDidMount() {
        try {
            this.setState({
                isLoading: true,
            })
            const response = await UserAPI.fetchUsers();
            this.setState({
                users: response.data,
                isLoading: false,
            });
        } catch(error) {
            console.log(error);
        }
    }

    render() {
        const {users} = this.state;
        return (
            <div>
                <UsersList users={users} />
                
            </div>
        );
    }
}

export default Home;