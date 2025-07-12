import LeaveBalance from './employee/LeaveBalance';
import HolidayList from './employee/HolidayList';
import LeaveHistory from './employee/LeaveHistory';
import ApplyLeave from './employee/ApplyLeave';
import AddEmpForm from './admin/AddEmpForm';

function EmployeeDashboard() {
  return (
    <div className="mt-4">
      <h2>Employee Dashboard</h2>
      
      <LeaveBalance />
      <HolidayList />
      <LeaveHistory />
      <ApplyLeave />
      <AddEmpForm/>
    </div>
  );
}

export default EmployeeDashboard;