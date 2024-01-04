import React, { useContext } from 'react'
import SideBar from '../Components/AdminSideBar'
import Card from 'react-bootstrap/Card';
import { Data } from '../../App';
import { useNavigate } from 'react-router-dom';


const AdminHome = () => {
  const{userData,vieworder} =useContext(Data);
const navigate=useNavigate();
  return (
    <div className='d-flex w-100' style={{backgroundColor:"wheat"}}>
    <div>
      <SideBar/>
    </div>
    <div className='d-flex mt-5  '>
      <div>
        <Card style={{ width: '18rem' ,cursor:'pointer'}}
              title='Go to users page'
              className="mb-2 m-2 bg-success" 
              onClick={()=>navigate("/users")} >

          <Card.Header>USERS</Card.Header>
            <Card.Body>
              <Card.Title>TOTAL USERS</Card.Title>
              <Card.Text><h1>{userData.length}</h1></Card.Text>
            </Card.Body>
        
        </Card>
        </div>
        <div >
          <Card style={{ width: '18rem' ,cursor:'pointer'} } 
                title='Go to orders page'
                className="mb-2  m-2 bg-warning" 
                onClick={()=>navigate("/orders  ")} >
            <Card.Header> ORDERS</Card.Header>
            <Card.Body>
              <Card.Title>TOTAL ORDERS</Card.Title>
              <Card.Text><h1>{vieworder.length}</h1></Card.Text>
            </Card.Body>
          </Card>
          </div>
          
          <div >
          <Card style={{ width: '18rem' }}
                className="mb-2  m-2 bg-danger" >
            <Card.Header> Sales</Card.Header>
            <Card.Body>
              <Card.Title>TOTAL SALES</Card.Title>
              <Card.Text><h1>{userData.length}</h1></Card.Text>
            </Card.Body>
          </Card>
          </div>
          
          <div >
          <Card style={{ width: '18rem' }}
                className="mb-2  m-2  bg-primary">
            <Card.Header>Delivered</Card.Header>
            <Card.Body>
              <Card.Title>TOTAL DELIVERY </Card.Title>
              <Card.Text><h1>{7 + userData.length}</h1></Card.Text>
            </Card.Body>
          </Card>
          </div>
        
      </div>
    </div>
  )
}
export default AdminHome