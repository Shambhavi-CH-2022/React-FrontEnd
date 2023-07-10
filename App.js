import logo from './logo.svg';
import './App.css';
import Student from './Components/Student';
import EditStudent from './Components/EditStudent';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Department from './Components/Department';
import CreateDapartment from './Components/CreateDapartment';
import EditDepartment from './Components/EditDepartment';
import CreateStudent from './Components/CreateStudent';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/edit" element={<EditDepartment/>} />
          <Route path="/Student" element={<Student/>} />
          <Route path="/department" element={<Department/>} />
          <Route path="/create" element={<CreateDapartment/>} />
          <Route path="/createstudent" element={<CreateStudent/>} />
          <Route path="/editstudent" element={<EditStudent/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
