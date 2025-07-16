import { MdOutlinePersonAddAlt1, } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { MdRemoveCircleOutline } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { MdPersonSearch } from "react-icons/md";
import { Card,CardBody } from 'react-bootstrap';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import { MdAddCircleOutline } from "react-icons/md";
import { FcCalendar } from "react-icons/fc";

function AdminDashboard() {
  return (
    <div className="mt-4">
      
      <div className='container mt-5 ' style={{display:'flex'}}>
        <Card
  style={{
    width: '12rem',
    textAlign:'center',
    margin:5,
    color:'green'
  }}
><div className='text-center lg'><MdOutlinePersonAddAlt1 size={60} /></div>
  
  <CardBody>
   <Link to={'/addemp'} className="btn btn-outline-success" >Add Employee</Link>
  </CardBody>
</Card>
   <Card
  style={{
    width: '12rem',
    textAlign:'center',
    margin:5,
    color:'gray'
  }}
><div className='text-center lg'><GoPencil size={60} /></div>
  
  <CardBody>
    <Link to={'/updateemp'} className="btn btn-outline-secondary" >Update Employee</Link>
  </CardBody>
</Card>
   <Card
  style={{
    width: '12rem',
    textAlign:'center',
    margin:5,
    color:'red'
  }}
><div className='text-center lg'><MdRemoveCircleOutline size={60} /></div>
  
  <CardBody>
   
    <Link to={'/deleteemp'} className="btn btn-outline-danger" >Remove Details</Link>
  </CardBody>
</Card>
   <Card
  style={{
    width: '12rem',
    textAlign:'center',
    margin:5,
    color:'yellow'
  }}
><div className='text-center lg'><IoPeopleSharp size={60} /></div>
  
  <CardBody>
    
   
    
  <Link to={'/viewemp'} className="btn btn-outline-warning" >View All</Link>
  </CardBody>
</Card>

<Card
  style={{
    width: '12rem',
    textAlign:'center',
    margin:5,
    color:'lightblue'
  }}
><div className='text-center lg'><MdPersonSearch size={60} /></div>
  
  <CardBody>
  <Link to={'/view'} className="btn btn-outline-info" >View</Link>
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
              <Link to={'/viewholiday'} className="btn btn-outline-danger">Holiday Calendar</Link>
            </CardBody>
          </Card>
      </div></div>
      
  );
}export default AdminDashboard;