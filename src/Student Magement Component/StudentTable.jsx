import React, { Component } from 'react';

// Component Con: table chứa thông tin sinh viên 
class StudentTable extends Component {
    state={
        GPAincrease: "",
        GPAdecrease: "",
        Fullname: "",
    };

    render() {
        const {students} = this.props;
        const {onDeleteStudent} = this.props;
        return (
            <div style={{paddingTop: "50px"}}>
                <select className="text-center">
                    <option selected disabled hidden>Sort By</option> 
                    <option value="GPAincrease">GPA tăng dần</option>
                    <option value="GPAdecrease">GPA giảm dần</option>
                    <option value="Fullname">Họ và Tên</option>
                </select>
                
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
                        { students.length > 0 ? (students.map((student) => {
                            const {studentName, studentID, studentPhoneNum, studentEmail, studentMathScore, studentPhysicScore, studentChemScore} = student;
                            const GPA = (Number(studentMathScore) + Number(studentPhysicScore) + Number(studentChemScore)) / 3;
                            const roundGPA = GPA.toFixed(1);
                            return (
                                <tr className="text-center">
                                    <td>{studentID}</td>
                                    <td>{studentName}</td>
                                    <td>{studentPhoneNum}</td>
                                    <td>{studentEmail}</td>
                                    <td>{roundGPA}</td>
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