import React from 'react'
import { Link } from 'react-router-dom'
import shipments from '../shipments'
import { Row, Col, ListGroup, Button } from 'react-bootstrap'



  const ShipmentDetails =({ match }) =>{
    const shipment = shipments.find((p) => p._id === match.params.orderNumber)
  
  return <>
   
  <a href="/orders"><i class="fa-solid fa-arrow-left">Go Back</i></a>
  <Row>
    <Col md={6}>
  {shipment.orderNumber}
  </Col>
  <Col md={3}>
    some other stuff
  </Col>
  </Row>
  </>
}

export default ShipmentDetails