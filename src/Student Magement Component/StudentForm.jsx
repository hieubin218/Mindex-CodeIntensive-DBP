import React, { Component } from 'react';

// Component Con: Form điền thông tin sinh viên 
class StudentForm extends Component {
    state={
        studentName: "",
        studentID: "",
        studentPhoneNum: "",
        studentEmail: "",
    }

    onChangeHandler = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value,
        });
    };

    onSubmitHandler = (event) => {
        event.preventDefault();
    }


    render() {
        const {onAddStudent} = this.props;
        // const {studentID} = this.state;
        return (
            <div>
                <h4 className="text-danger" style={{marginTop: "60px"}}>Thông Tin Sinh Viên</h4>
                <form onSubmit={this.onSubmitHandler}>
                    <div className="row">

                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="studentID">Mã Sinh Viên</label>
                                <input 
                                    type="text"
                                    name="studentID"
                                    className="form-control"
                                    aria-describedby="helpId"
                                    onChange={this.onChangeHandler}
                                />
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="studentName">Họ và Tên</label>
                                <input 
                                    type="text"
                                    name="studentName"
                                    className="form-control"
                                    aria-describedby="helpId"
                                    onChange={this.onChangeHandler}
                                />
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="studentPhoneNum">Số Điện Thoại</label>
                                <input 
                                    type="text"
                                    name="studentPhoneNum"
                                    className="form-control"
                                    aria-describedby="helpId"
                                    onChange={this.onChangeHandler}
                                />
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="studentEmail">Địa Chỉ Email</label>
                                <input 
                                    type="text"
                                    name="studentEmail"
                                    className="form-control"
                                    aria-describedby="helpId"
                                    onChange={this.onChangeHandler}
                                />
                            </div>
                        </div>
                    </div>

                    <button type="submit" 
                            className="mt-4 btn btn-primary" 
                            onClick={() => onAddStudent(this.state)}>
                            Thêm Sinh Viên
                    </button>
                    

                </form>
                
            </div>
        );
    }
}

export default StudentForm;