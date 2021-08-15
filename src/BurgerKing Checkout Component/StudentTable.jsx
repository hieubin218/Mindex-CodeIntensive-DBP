import React, { Component } from 'react';

// Component Con: table chứa thông tin sinh viên 
class StudentTable extends Component {
    render() {
        const {students} = this.props;
        return (
            <div style={{paddingTop: "50px"}}>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã Sinh Viên</th>
                            <th>Họ Và Tên</th>
                            <th>Số ĐT</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        { students.length > 0 ? (students.map((student) => {
                            const {studentName, studentID, studentPhoneNum, studentEmail} = student;
                            return (
                                <tr>
                                    <td>{studentID}</td>
                                    <td>{studentName}</td>
                                    <td>{studentPhoneNum}</td>
                                    <td>{studentEmail}</td>
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