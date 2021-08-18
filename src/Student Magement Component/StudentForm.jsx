import React, { Component } from 'react';

// Component Con: Form điền thông tin sinh viên 
class StudentForm extends Component {
    state={
        studentName: "",
        studentID: "",
        studentPhoneNum: "",
        studentEmail: "",
        studentMathScore: "",
        studentPhysicScore: "",
        studentChemScore: "",
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
                                <label htmlFor="studentID">Student ID</label>
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
                                <label htmlFor="studentName">Student Fullname</label>
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
                                <label htmlFor="studentPhoneNum">Phone Number</label>
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
                                <label htmlFor="studentEmail">Email Address</label>
                                <input 
                                    type="text"
                                    name="studentEmail"
                                    className="form-control"
                                    aria-describedby="helpId"
                                    onChange={this.onChangeHandler}
                                />
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="studentMathScore">Math Score</label>
                                <input 
                                    type="text"
                                    name="studentMathScore"
                                    className="form-control"
                                    aria-describedby="helpId"
                                    onChange={this.onChangeHandler}
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="studentPhysicScore">Physics Score</label>
                                <input 
                                    type="text"
                                    name="studentPhysicScore"
                                    className="form-control"
                                    aria-describedby="helpId"
                                    onChange={this.onChangeHandler}
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="studentID">Chemistry Score</label>
                                <input 
                                    type="text"
                                    name="studentChemScore"
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