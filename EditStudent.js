import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function EditStudent() {

    const location = useLocation();
    const [editData, setEditData] = useState(location.state);
    const navigate = useNavigate();
  
    const handleChangeName = (e) => {
      const copyData = { ...editData };
      copyData.student_name = e.target.value;
      setEditData(copyData);
    };
    const handleChangeCourse = (e) => {
        const copyData = { ...editData };
        copyData.course = e.target.value;
        setEditData(copyData);
      };
      const handleChangeSpecial = (e) => {
        const copyData = { ...editData };
        copyData.specialization = e.target.value;
        setEditData(copyData);
      };
      const handleChangePercentage = (e) => {
        const copyData = { ...editData };
        copyData.percentage = e.target.value;
        setEditData(copyData);
      };

      const handleChangeDept = (e) => {
        const copyData = { ...editData };
        copyData.departmentId = e.target.value;
        setEditData(copyData);
      };
  
    function onUpdateValues () {
      const body = {
        studentName : editData.student_name,
        course:editData.course,
          specialization:editData.specialization,
          percentage:editData.percentage,
          departmentId:editData.departmentId
      }
  
      console.log(body);
      axios
        .put(`http://localhost:8080/students/${editData.student_id}`, body)
        .then((response) => {
            // setEditData(response.data)
          navigate("/student");
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    };

  return (
    <div>
        <label className='update'>Update Student Details</label>
       <form >
              
                <label className="stud-name">Student Name</label>
                <input
                  className="add-studName "
                  type="text"
                  name="studentName"
                  value={editData.student_name}
                  onChange={handleChangeName}
                />
                 <label className="course">Course </label>
                <input
                  className="add-course "
                  type="text"
                  name="course"
                  value={editData.course}
                  onChange={handleChangeCourse}
                />
                 <label className="special">Specialization</label>
                <input
                  className="add-special "
                  type="text"
                  name="specialization"
                  value={editData.specialization}
                  onChange={handleChangeSpecial}
                />
                 <label className="percentage">Percentage</label>
                <input
                  className="add-percentage "
                  type="text"
                  name="percentage"
                  value={editData.percentage}
                  onChange={handleChangePercentage}
                />
                 <label className="dept">Department Id</label>
                <input
                  className="add-dept "
                  type="text"
                  name="departmentId"
                  value={editData.departmentId }
                  onChange={handleChangeDept}
                />
                <button className='update' onClick={onUpdateValues}>Update</button>

</form>
    </div>
  )
}

export default EditStudent
