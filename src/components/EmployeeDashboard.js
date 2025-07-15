import { Card,CardBody,Link, } from "react-bootstrap";
function EmployeeDashboard() {
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
   <Link to={'/addemp'} className="btn btn-outline-success" >Apply Leave</Link>
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
    <Link to={'/updateemp'} className="btn btn-outline-secondary" >View Leave </Link>
  </CardBody>
</Card>
   <Card
  style={{
    width: '12rem',
    textAlign:'center',
    margin:5,
    color:'red'
  }}
><div className='text-center lg'><IoIosRemoveCircleOutline size={60} /></div>
  
  <CardBody>
   
    <Link to={'/deleteemp'} className="btn btn-outline-danger" >Holiday Calender</Link>
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
      </div></div>
  );
}

export default EmployeeDashboard;