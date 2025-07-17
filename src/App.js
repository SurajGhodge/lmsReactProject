import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import EmployeeDashboard from './components/EmployeeDashboard';
import AdminDashboard from './components/AdminDashboard';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApplyLeaveForm from './components/employee/ApplyLeaveForm';
import ViewLeaves from './components/employee/ViewLeaves';
import AddHolidayForm from './components/admin/AddHolidayForm';
import ManageHoliday from './components/admin/ManageHoliday';
import HolidayList from './components/employee/HolidayList';
import ManageBranches from './components/admin/ManageBranches';
import ManageEmployees from './components/admin/ManageEmployees';
import EmployeeDetails from './components/admin/EmployeeDetails';
import LeaveRecords from './components/admin/LeaveRecords';


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
      path: "/viewholidayemp",
      element:
      <div>
        <Navbar/>
      <HolidayList/>
              </div>
        },
        { 
      path: "/viewholidayadmin",
      element:
      <div>
        <Navbar/>
      <ManageHoliday/>
              </div>
        },
        { 
      path: "/addholiday",
      element:
      <div>
        <Navbar/>
      <AddHolidayForm/>
              </div>
        },
        { 
      path: "/managebranch",
      element:
      <div>
        <Navbar/>
      <ManageBranches/>
              </div>
        },
        { 
      path: "/manageemployee",
      element:
      <div>
        <Navbar/>
      <ManageEmployees/>
              </div>
        },
        {
  path: "/employee/:id",
  element: (
    <div>
      <Navbar />
      <EmployeeDetails />
    </div>
  ),
}
,
 { 
      path: "/leaverecords",
      element:
      <div>
        <Navbar/>
      <LeaveRecords/>
              </div>
        }

  ]);

  return <RouterProvider router={router} />;
}

export default App;
