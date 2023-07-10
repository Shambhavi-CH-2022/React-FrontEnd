import {useState ,useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function CreateDapartment() {
    const initialValue = {
        departmentName : ""
    }
const[formValues,setFormValues]=useState(initialValue)

const navigate = useNavigate()

const onSubmitValue = (e) => {
    e.preventDefault();
    const body = {
      departmentName:formValues.departmentName
    };

    axios
      .post("http://localhost:8080/department", body)
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

  function dummy(){
    navigate("/department")
  }


  return (
    <div className='department'>
      <label className='dept-create'>Create Department</label>
      <div className="dept">
            <form onSubmit={onSubmitValue}>
              <div className="Name">
                <label className="depName">Department Name</label>
                <input
                  className="dept-value"
                  type="text"
                  name="departmentName"
                  values={formValues.departmentName}
                  onChange={handleChange}
                />
                <button className='department-submit'>Submit</button>
</div>
</form>
    </div>
    </div>
  )
}

export default CreateDapartment
