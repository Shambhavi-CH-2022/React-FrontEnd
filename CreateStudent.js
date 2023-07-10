import React from 'react'
import axios from 'axios'
import { useState} from 'react'
import { useNavigate } from 'react-router-dom'
function CreateStudent() {
        const initialValue = {
            studentName:"",
            course:"",
            specialization:"",
            percentage:"",
            departmentId : ""

        }
    const[formValues,setFormValues]=useState(initialValue)
    
    const navigate = useNavigate()

    function back(){
        navigate("/Student")
    }
    
    const onSubmitValue = (e) => {
        e.preventDefault();
        const body = {
          departmentId:formValues.departmentId,
          studentName:formValues.studentName,
          course:formValues.course,
          specialization:formValues.specialization,
          percentage:formValues.percentage

        };
    
        axios
          .post("http://localhost:8080/students", body)
          .then((response) => {
          
            console.log("response", response.data);
            setFormValues(response.data);
            
        
          });
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
      };
    


  return (
    <div>
      <label className='create'>Create Student</label>
      <div className="stud">
            <form onSubmit={onSubmitValue}>
              <div>
              <div className="Name">
                <label className="stud-name">Student Name</label>
                <input
                  className="add-studName "
                  type="text"
                  name="studentName"
                  values={formValues.studentName}
                  onChange={handleChange}
                />
                 <label className="course">Course </label>
                <input
                  className="add-course "
                  type="text"
                  name="course"
                  values={formValues.course}
                  onChange={handleChange}
                />
                 <label className="special">Specialization</label>
                <input
                  className="add-special "
                  type="text"
                  name="specialization"
                  values={formValues.specialization}
                  onChange={handleChange}
                />
                 <label className="percentage">Percentage</label>
                <input
                  className="add-percentage "
                  type="text"
                  name="percentage"
                  values={formValues.percentage}
                  onChange={handleChange}
                />
                 <label className="dept">Department Id</label>
                <input
                  className="add-dept "
                  type="text"
                  name="departmentId"
                  values={formValues.departmentId}
                  onChange={handleChange}
                />
                <button className='submit'>Submit</button>
</div>
</div>
</form>
    </div>

    </div>
  )
}

export default CreateStudent
