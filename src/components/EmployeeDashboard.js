import { Card, CardBody } from "react-bootstrap";
import { Link } from "react-router-dom";
import { VscGitStashApply } from "react-icons/vsc";
import { FaEye, FaHandHoldingHeart } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

function EmployeeDashboard() {
  const employee = {
    id: 101,
    name: "John Doe",
    email: "john.doe@example.com",
    department: "Engineering",
    designation: "Software Engineer",
    joiningDate: "2023-04-10",
    contact: "+91-9876543210",
    address: "Pune, Maharashtra",
    leaveBalance: 12,
    profilePic: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Left Column: Employee Profile */}
        <div className="col-md-4">
          <Card className="shadow-sm p-3 mb-3 bg-white rounded">
            <CardBody>
              <div className="text-center mb-3">
                <img
                  src={employee.profilePic}
                  alt="Profile"
                  className="rounded-circle"
                  width="80"
                  height="80"
                />
              </div>
              <h5 className="text-primary text-center mb-3">Employee Profile</h5>
              <p><strong>ID:</strong> {employee.id}</p>
              <p><strong>Name:</strong> {employee.name}</p>
              <p><strong>Email:</strong> {employee.email}</p>
              <p><strong>Department:</strong> {employee.department}</p>
              <p><strong>Designation:</strong> {employee.designation}</p>
              <p><strong>Joining Date:</strong> {employee.joiningDate}</p>
              <p><strong>Contact:</strong> {employee.contact}</p>
              <p><strong>Address:</strong> {employee.address}</p>
              <p><strong>Leave Balance:</strong> <span className="badge bg-success">{employee.leaveBalance} Days</span></p>
            </CardBody>
          </Card>
        </div>

        {/* Right Column: Action Cards */}
        <div className="col-md-8 d-flex flex-wrap justify-content-start">
          <Card style={{ width: '12rem', textAlign: 'center', margin: 5, color: 'green' }}>
            <div className='text-center'><VscGitStashApply size={60} /></div>
            <CardBody>
              <Link to={'/applyleave'} className="btn btn-outline-success">Apply Leave</Link>
            </CardBody>
          </Card>

          <Card style={{ width: '12rem', textAlign: 'center', margin: 5, color: 'gray' }}>
            <div className='text-center'><FaEye size={60} /></div>
            <CardBody>
              <Link to={'/viewleaves'} className="btn btn-outline-secondary">View Leave</Link>
            </CardBody>
          </Card>

          <Card style={{ width: '12rem', textAlign: 'center', margin: 5, color: 'red' }}>
            <div className='text-center'><SlCalender size={60} /></div>
            <CardBody>
              <Link to={'/viewholiday'} className="btn btn-outline-danger">Holiday Calendar</Link>
            </CardBody>
          </Card>

          <Card style={{ width: '12rem', textAlign: 'center', margin: 5, color: 'green' }}>
            <div className='text-center'><FaHandHoldingHeart size={60} /></div>
            <CardBody>
              <Link to={'/deleteemp'} className="btn btn-outline-success">Leave Balance</Link>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDashboard;
