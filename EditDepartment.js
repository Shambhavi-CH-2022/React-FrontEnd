import React from 'react'
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

function EditDepartment() {
  const location = useLocation();
  const [editData, setEditData] = useState(location.state);
  const [name, setName] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const copyData = { ...editData };
    copyData.departmentName = e.target.value;
    setEditData(copyData);

    // let value = e.target.value;
    // if (value.length > 1) {
    //   setName(true);
    // }
  };

  function onUpdateValues () {

    const body = {
      departmentName : editData.departmentName
    }

    console.log(body);
    axios
      .put(`http://localhost:8080/department/${editData.departmentId}`, body)
      .then((response) => {
        navigate("/department");
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <div>
      <label className='name-update'>Update Department  </label>
      <div className="dept">
        <form>
          <div className="Name">
            <label className="depName">Department Name</label>
            <input
              className="dept-value"
              type="text"
              name="departmentName"
              value={editData.departmentName}
              onChange={handleChange}
            />
            <button className='department-submit' type="submit" onClick={onUpdateValues}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditDepartment;