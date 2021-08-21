import React, { Component } from 'react';

// Component Con: Form điền thông tin sinh viên 
const initialState = {
        studentName: "",
        studentID: "",
        studentPhoneNum: "",
        studentEmail: "",
        studentMathScore: "",
        studentPhysicScore: "" ,
        studentChemScore: "",
}

class StudentForm extends Component {
    // Default State (empty) for input 
    state=initialState;

    // Update value along with typical state property (name)
    onChangeHandler = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value,
        });
    };

    // Reset Form after input and Submit
    onResetForm = () => {
        this.setState(initialState);
    }

    // Method: prevent the form actually submitted (to execute the form)
    onSubmitHandler = (event) => {
        event.preventDefault();

        // Đưa Object Student ra Component Cha when button clicked
        this.props.onAddStudent(this.state);
        // Sau đó reset lại form default 
        this.onResetForm(); // this.setState(initialState) --> không cần hàm onResetForm
    }


    render() {
        const {studentName, studentID, studentPhoneNum, studentEmail, studentMathScore, studentPhysicScore, studentChemScore} = this.state;
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
                                    value={studentID}
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
                                    value={studentName}
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
                                    value={studentPhoneNum}
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
                                    value={studentEmail}
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
                                    value={studentMathScore}
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
                                    value={studentPhysicScore}
                                    className="form-control"
                                    aria-describedby="helpId"
                                    onChange={this.onChangeHandler}
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="studentChemScore">Chemistry Score</label>
                                <input 
                                    type="text"
                                    name="studentChemScore"
                                    value={studentChemScore}
                                    className="form-control"
                                    aria-describedby="helpId"
                                    onChange={this.onChangeHandler}
                                />
                            </div>
                        </div>
                    </div>

                    {/** Hàm onClick={addStudent} đã được thêm vào ở onSubmitHandler 
                    Không cần onClick ở button nữa */}
                    <button type="submit" 
                            className="mt-4 btn btn-primary">
                            Thêm Sinh Viên
                    </button>
                </form>
                
            </div>
        );
    }
}

export default StudentForm;