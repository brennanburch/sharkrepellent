import React from 'react'
import shipments from '../shipments'
import { Container,Row, Col, Table, Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap'


const CurrentShipments = () => {
  return (
    <>
     <Navbar bg="dark" variant='dark' expand="lg"  collapseOnSelect>
  <Container>
    
    <Navbar.Toggle aria-controls="basic-navbar-nav " />
    <Navbar.Collapse id="basic-navbar-nav">
    
        <Form className="d-xl-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="w-100"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <i className='fa-solid fa-filter fa-2xl justify-content-lg-around'></i>
            
        
     
    </Navbar.Collapse>
  </Container>
</Navbar>
    <Row className='justify-content-center py-3'>
      <Col lg={9} >
      <Table striped bordered hover variant="light">
  <thead>
    <tr>
      
      <th>Order #</th>
      <th>Origin</th>
      <th>Destination</th>
      <th>Product</th>
      <th>Ship Date</th>
    
      <th>Info</th>
    
      
    </tr>
  </thead>
  <tbody>
  {shipments.map((shipment, index) =>(
    <tr data-index= {index}>
       
        <td>
            <p>{shipment.orderNumber}</p></td>
            <td>
            <p>{shipment.origin}</p></td>
            <td>
            <p>{shipment.destination}</p></td>
            <td>
            <p>{shipment.product}</p></td>
            <td>
            <p>{shipment.shipDate}</p></td>
            
           
            <td>
            <Button href={`/shipment/${shipment.origin}`} className='justify-content-center' variant="primary" size="sm" active>
     More
  </Button>{' '}</td>
            
            </tr>
        ))}
    
  </tbody>
</Table>
</Col> 
    </Row>
    </>
  )
}

export default CurrentShipments