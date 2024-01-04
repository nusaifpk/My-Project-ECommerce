  import React, { useContext } from 'react'
  import { Data } from '../App';
  import { Button } from 'react-bootstrap';
  import { MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBInput, MDBRow } from 'mdb-react-ui-kit';
  import 'react-toastify/dist/ReactToastify.css';
  import toast from 'react-hot-toast';


  const Payment = () => {
    
    const{vieworder,cartItems,setvieworder,setCartItems,quantities}=useContext(Data)

    const handlePayment = () => {
      console.log("Quantities:",  quantities)
      const updatedViewOrder = cartItems.map((item) => ({
        ...item,
        quantity: quantities[item.id] || 1,
      }));

      setvieworder([...vieworder, ...updatedViewOrder]);
      toast.success("Your product will be shipped soon");
      setCartItems([]);
    };

  return (

    <MDBContainer className="py-5"
                  fluid
                  style={{backgroundImage:"url(https://mdbcdn.b-cdn.net/img/Photos/Others/background3.webp)"}}
        >
          <MDBRow className=" d-flex justify-content-center">
            <MDBCol md="10" lg="8" xl="5">
              <MDBCard className="rounded-3">
                <MDBCardBody className="p-4">
                  <div className="text-center mb-4">
                    <h3>Settings</h3>
                    <h6>Payment</h6>
                  </div>
                  <p className="fw-bold mb-4 pb-2">Saved cards:</p>
                  <div className="d-flex flex-row align-items-center mb-4 pb-1">
                    <img className="img-fluid" src="https://img.icons8.com/color/48/000000/mastercard-logo.png" />

                    <div className="flex-fill mx-3">
                      <div className="form-outline">
                        <MDBInput label="Card Number"
                                  id="form1"
                                  type="text"
                                  size="lg"
                                  value="**** **** **** 3193" />
                      </div>
                    </div>
                    <a>Remove card</a>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4 pb-1">
                    <img  className="img-fluid"
                          src="https://img.icons8.com/color/48/000000/visa.png"  
                          alt='Loading...'  />

                    <div className="flex-fill mx-3">
                      <div className="form-outline">
                        <MDBInput label="Card Number"
                                  id="form2"
                                  type="text"
                                  size="lg"
                                  value="**** **** **** 4296"
                        />
                      </div>
                    </div>
                    <a >Remove card</a>
                  </div>
                  <p className="fw-bold mb-4">Add new card:</p>
                  <MDBInput label="Cardholder's Name"
                            id="form3"
                            type="text"
                            size="lg"  />
                  
                  <MDBRow className="my-4">
                    <MDBCol size="7">
                      <MDBInput label="Card Number"
                                id="form4"
                                type="text"
                                size="lg"
                                value="1234 5678 1234 5678" />
                    </MDBCol>
                    <MDBCol size="3">
                      <MDBInput label="Expire"
                                id="form5"
                                type="password"
                                size="lg"
                                placeholder="MM/YYYY"  />
                    </MDBCol>
                    <MDBCol size="2">
                      <MDBInput label="CVV"
                                id="form6"
                                type="password"
                                size="lg"
                                placeholder="CVV" />
                    </MDBCol>
                  </MDBRow>
                  <Button color="success" size="lg" block onClick={handlePayment}>Pay Now</Button>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
    );


  }

  export default Payment