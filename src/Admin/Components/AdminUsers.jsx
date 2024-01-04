import React, { useContext } from 'react';
import { Data } from '../../App';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import SideBar from '../Components/AdminSideBar';

const Users = () => {
  const { userData } = useContext(Data);
  console.log(userData);

  return (
    <div>
      <div className='d-flex'>
        <div>
          <SideBar />
        </div>

        <div className='w-100'>
          <div className='table-responsive'>
            {userData.length <= 0 ? <h1>No User Found</h1> : <h1>User Details</h1>}
            <MDBTable responsive='sm' striped bordered>
              <MDBTableHead>
                <tr>
                  <th scope='col'></th>
                  <th scope='col'>Username</th>
                  <th scope='col'>E-Mail</th>
                  <th scope='col'>Password</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {userData.map((item) => (
                  <tr key={item.userName}>
                    <td>
                      <div className='d-flex align-items-center'>
                        <img
                          src='https://cdn-icons-png.flaticon.com/128/3135/3135715.png'
                          alt=''
                          style={{ width: '45px', height: '45px' }}
                          className='rounded-circle'
                        />
                      </div>
                    </td>
                    <td>{item.userName}</td>
                    <td>{item.emailId}</td>
                    <td>{item.password}</td>
                  </tr>
                ))}
              </MDBTableBody>
            </MDBTable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
