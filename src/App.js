import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import EmployeeDashboard from './components/EmployeeDashboard';
import AdminDashboard from './components/AdminDashboard';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddEmployeeForm from './components/admin/AddEmployeeForm';
import UpdateEmployeeForm from './components/admin/UpdateEmployeeForm';
import EmployeeList from './components/admin/EmployeeList';
import ViewEmployees from './components/admin/ViewEmployees';
import ApplyLeaveForm from './components/employee/ApplyLeaveForm';
import ViewLeaves from './components/employee/ViewLeaves';
import HolidayList from './components/employee/HolidayList';
import AddHolidayForm from './components/admin/AddHolidayForm';

function App() {
  const router = createBrowserRouter([
    { 
      path: "/", 
      element:<div><Navbar/><Home/></div>  

    },
    { 
      path: "/admin",
      element: <div>
        <Navbar/>
        <AdminDashboard/>
      </div>},
    { 
      path: "/employee",
      element:
      <div>
        <Navbar/>
       <EmployeeDashboard />
       </div>
        },
        { 
      path: "/addemp",
      element:
      <div>
        <Navbar/>
       <AddEmployeeForm/>
       </div>
        },
         { 
      path: "/updateemp",
      element:
      <div>
        <Navbar/>
       <UpdateEmployeeForm/>
       </div>
        }
        ,
        { 
      path: "/deleteemp",
      element:
      <div>
        <Navbar/>
       <EmployeeList/>
       </div>
        },
         { 
      path: "/viewemp",
      element:
      <div>
        <Navbar/>
       <ViewEmployees/>
              </div>
        },
        { 
      path: "/applyleave",
      element:
      <div>
        <Navbar/>
       <ApplyLeaveForm/>
              </div>
        },
        { 
      path: "/viewleaves",
      element:
      <div>
        <Navbar/>
       <ViewLeaves/>
              </div>
        },
        { 
      path: "/viewholiday",
      element:
      <div>
        <Navbar/>
      <HolidayList/>
              </div>
        },
        { 
      path: "/addholiday",
      element:
      <div>
        <Navbar/>
      <AddHolidayForm/>
              </div>
        }

  ]);

  return <RouterProvider router={router} />;
}

export default App;
