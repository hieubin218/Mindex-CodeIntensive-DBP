import React, { Component } from 'react';

class LinkGenegrate extends Component {
    render() {
        const {users} = this.props;
        return (
            <div className="text-center" style={{border: "1px solid black",
                                                 marginTop: "30px",
                                                 height: "70px"}}>
                <h6>LINK GENERATED!</h6>
                <h2 className="output"> {users}</h2>
                
            </div>
        );
    }
}

export default LinkGenegrate;