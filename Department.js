import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

function Department() {
const[value,setValue] = useState([]);
const [isDeleted, setIsDeleted] = useState(false);
const [selected,setSelectedDepartment]=useState(null);

const navigate = useNavigate();

function dummy(){
  navigate("/create")
}

const getRowData = (departmentId) => {
  return value.find(row => row.departmentId === departmentId);
};

function editDepartment(departmentId){
  const valueToSearch = departmentId;
  const rowData = getRowData(valueToSearch);
  console.log(rowData);
  navigate("/edit",{state:rowData});
}

    useEffect(()=>{
        axios.get("http://localhost:8080/department")
        .then(response =>{
          setValue(response.data)
          console.log(response.data)
        })
        .catch(err => {
          console.log(err)
        })
      },[isDeleted])

      function deleteDepartment(id) {
        console.log(id);
        axios.delete(`http://localhost:8080/department/${id}`).then(() => setIsDeleted(!isDeleted));
      }
    


  return (
    <div>
      <label className='dept-name'>Departments Details</label>
      <button className="create-dept" onClick={dummy}>Create Department</button>
      <table className='department' id='department'>
        <tr className='dept-row'>
            <th>Department Id</th>
            <th>Department Name</th>
            <th>Action</th>
            <th>Edit</th>
        </tr>
        <tbody className='dept-body'>
            {value.map(item =>(
                <tr key={item.departmentId}>
                    <td>{item.departmentId}</td>
                    <td>{item.departmentName}</td>
                    <td><button className='dept-delete'onClick={() =>deleteDepartment(item.departmentId)}>Delete</button></td>
                    <td><button className='dept-edit'onClick={() =>editDepartment(item.departmentId)}>Update</button></td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
export default Department
