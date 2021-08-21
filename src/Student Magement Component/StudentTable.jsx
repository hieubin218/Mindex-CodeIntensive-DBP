import React, { Component } from 'react';

const DEFAULT= 1;
const GPA_UP = 2;
const GPA_DOWN = 3;
const NAME= 4;

// Component Con: table chứa thông tin sinh viên 
class StudentTable extends Component {
    state={
        sortType: DEFAULT,
    };


    // Method: Change the Sort Type, receive Event (onChange)
    // + means for Number
    onChangeSortType = (event) => {
        this.setState({
            sortType: +event.target.value,
        });
    };
    

    render() {
        // Destructring mảng Students 
        const {students} = this.props;
        const {onDeleteStudent} = this.props;
        const {sortType} = this.state;

        let newStudents = [];
        newStudents = students.map((student) => {
            const {studentID, studentPhoneNum, studentName, studentMathScore, studentEmail, studentPhysicScore, studentChemScore} = student;
            const AverageGPA = (parseFloat(studentMathScore) + parseFloat(studentPhysicScore) + parseFloat(studentChemScore)) / 3;


            return {
                studentID,
                studentEmail,
                studentName,
                studentPhoneNum,
                AverageGPA: parseFloat(AverageGPA.toFixed(1)),
            };
        });



        switch (sortType) {
            case GPA_UP:
                newStudents.sort((student1, student2) => {
                    // student2 return >0
                    // student1 < 0
                    // giu nguyen when student2 = 0
                    return student1.AverageGPA - student2.AverageGPA;
                });
                break;
            case GPA_DOWN:
                newStudents.sort((student1, student2) => {
                    return student1.AverageGPA - student2.AverageGPA;
                });
                break;
            case NAME:
                newStudents.sort((student1, student2) => {
                    return student1.studentName.localeCompare(student2.studentName);
                });
                break;
            default:
                break;
            }

        return (
            <div>
                <div>
                    <div style={{paddingTop: "30px"}} className="form-group">
                    <label htmlFor="filter"></label>
                    <select 
                        className="form-control" 
                        name="sortType" 
                        id="filter"
                        // Update trạng thái muốn sort 
                        onChange={this.onChangeSortType}
                        value={this.state.sortType}>


                        <option value={DEFAULT}>Sort By</option> 
                        <option value={GPA_UP}>GPA tăng dần</option>
                        <option value={GPA_DOWN}>GPA giảm dần</option>
                        <option value={NAME}>Họ và Tên</option>
                    </select>
                </div>
            </div>
               

            <table className="table">
                <thead>
                    <tr className="text-center text-white bg-dark" style={{border: "1px solid black"}}>
                        <th>Mã Sinh Viên</th>
                        <th>Họ Và Tên</th>
                        <th>Số ĐT</th>
                        <th>Email</th>
                        <th>Average GPA</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    { newStudents.length > 0 ? (newStudents.map((student, index) => {
                        const {studentName, studentID, studentPhoneNum, studentEmail, AverageGPA} = student;
            
                        return (
                            <tr className="text-center" key={index}>
                                <td>{studentID}</td>
                                <td>{studentName}</td>
                                <td>{studentPhoneNum}</td>
                                <td>{studentEmail}</td>
                                <td>{AverageGPA}</td>
                                <td>
                                    <button className="btn btn-danger" 
                                        onClick={() => onDeleteStudent(studentID)}>Xóa</button>
                                </td>
                            </tr>
                        );
                    })
                    ) : (
                                <p style={{paddingTop: "30px"}}> Student Information is empty... </p>
                    )}
                </tbody>

            </table>
                
            </div>
        );
    }
}

export default StudentTable;