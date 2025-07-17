
import { Card,CardBody } from 'react-bootstrap';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import { MdAddCircleOutline } from "react-icons/md";
import { FcCalendar } from "react-icons/fc";
import { FaBuilding } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";

function AdminDashboard() {
  return (
    <div className="mt-4">
      
      <div className='container mt-5 ' style={{display:'flex'}}>
       
 <Card
  style={{
    width: '12rem',
    textAlign:'center',
    margin:5,
    
  }}
><div className='text-center lg'>
  <BsFillPeopleFill size={60} /></div>
  <CardBody>
    
   <Link to={'/manageemployee'}  className="btn btn-outline-success">Employee </Link>
  </CardBody>
</Card>
<Card
  style={{
    width: '12rem',
    textAlign:'center',
    margin:5,
    color:'green'
  }}
><div className='text-center lg'><MdAddCircleOutline size={60} /></div>
  
  <CardBody>
  <Link to={'/addholiday'} className="btn btn-outline-success" >Add Holiday</Link>
  </CardBody>
</Card> 
 <Card style={{ width: '12rem', textAlign: 'center', margin: 5, color: 'red' }}>
            <div className='text-center'><FcCalendar size={60} /></div>
            <CardBody>
              <Link to={'/viewholidayadmin'} className="btn btn-outline-danger">Holiday Calendar</Link>
            </CardBody>
          </Card>
<Card style={{ width: '12rem', textAlign: 'center', margin: 5, color: 'Blue' }}>
            <div className='text-center'><FaBuilding size={60} /></div>
            <CardBody>
              <Link to={'/managebranch'} className="btn btn-outline-primary">Branch</Link>
            </CardBody>
          </Card>
          <Card style={{ width: '12rem', textAlign: 'center', margin: 5, color: 'yellow' }}>
            <div className='text-center'><FaClipboardList size={60} /></div>
            <CardBody>
              <Link to={'/leaverecords'} className="btn btn-outline-warning">Leave Records</Link>
            </CardBody>
          </Card>
      </div></div>
      
  );
}export default AdminDashboard;