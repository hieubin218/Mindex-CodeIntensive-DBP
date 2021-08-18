import React, { Component } from 'react';
import StudentForm from './StudentForm';
import StudentTable from './StudentTable';

// Component Cha
class StudentManegement extends Component {
    state={
        students: [],
    }

    onAddStudent = (student) => { 
        this.setState({
            students: [...this.state.students, student],
        // const studentInformation = this.state.students;
        // const studentIndex = studentInformation.findIndex((eachStudent) => eachStudent.studentID === student.studentID);
        // if ( studentIndex === -1) {
        //     this.setState({
        //     students: [...this.state.students, student],
        // });
        // } else {
        //     const currentStudents = this.state.students;
        //     currentStudents[studentIndex].studentID = student.studentID;
        //     this.setState({
        //        students: currentStudents,
        // });
    })
}


    // Delete Students Information at StudentTable
    onDeleteStudent = (id) => {
        const currentStudentList = this.state.students;
        const findIdxOfStudent = currentStudentList.findIndex((student) => student.id === id);
        currentStudentList.splice(findIdxOfStudent, 1);

        this.setState({
            students: currentStudentList,
        })  
    }



    render() {
        // Truyền vào Object để gửi xuống Comp Con 
        const {students} = this.state;
        return (
            <div className="container">
                <h1 className="text-center text-primary display-3">
                    Quản Lý Sinh Viên 
                </h1>

                <StudentForm onAddStudent={this.onAddStudent} />
                <StudentTable students={students} onDeleteStudent={this.onDeleteStudent} />
                
            </div>
        );
    }
}

export default StudentManegement;