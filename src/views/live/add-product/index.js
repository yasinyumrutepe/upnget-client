import React from 'react'
import axios from "@configs/axiosConfig"

import { Button, Card, CardBody, CardHeader, CardText, Col, Row } from 'reactstrap'
import FormLayout from './components/FormLayout'
import { useEffect } from 'react'

export default function index() {







  return (
    <Card>  
    <CardHeader>
      <CardText tag='h4'>Add Product</CardText>
    </CardHeader>
    <CardBody>
    <Row>
      <Col sm='12'>
        <FormLayout/>
      </Col>
    </Row>
    </CardBody>
    </Card>
  )
}
