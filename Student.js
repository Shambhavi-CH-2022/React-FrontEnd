import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Student() {
  const [value, setValue] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const [edit, setIsEdit] = useState([]);
  const navigate = useNavigate();
  const [name, setName] = useState('');
  
function createstu(){
  navigate("/createstudent")
}

const getRowData = (studentId) => {
  return value.find(row => row.student_id=== studentId);
};
function editstu(student_id){
  const valueToSearch = student_id;
  const rowData = getRowData(valueToSearch);
  console.log(rowData);
  navigate("/editstudent",{state:rowData});
}

  useEffect(() => {
    axios
      .get('http://localhost:8080/students')
      .then(response => {
        setValue(response.data);
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }, [isDeleted]);

  function deleteStudent(id) {
    console.log(id);
    axios.delete(`http://localhost:8080/students/${id}`)
    .then(() => setIsDeleted(!isDeleted));
  }

  return (
    
    <div>
      <label className='name'>Student Details</label>
      <button className="add" onClick={createstu}>Add Student</button>
      <table className="studentTable">
        <thead>
          <tr className="table row">
            <th>Student Id</th>
            <th>Student Name</th>
            <th>Course</th>
            <th>Specialization</th>
            <th>Percentage</th>
            <th>Department Name</th>
            <th>Actions</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody className="body" style={{ left: 200 }}>
          {value.map(value => (
            <tr key={value.studentId}>
              <td>{value.student_id}</td>
              <td>{value.student_name}</td>
              <td>{value.course}</td>
              <td>{value.specialization}</td>
              <td>{value.percentage}</td>
              <td>{value.department_name}</td>
              <td>
                <button className="delete" onClick={() => deleteStudent(value.student_id)}>
                  Delete
                </button>
              </td>
              <td>
                <button className="edit-student" onClick={() => editstu(value.student_id)}>
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Student;
