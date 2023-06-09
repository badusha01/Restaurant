import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import Operatingtime from './Operatingtime';
import Review from './Review';
import { useSelector } from 'react-redux';




function Restview() {



    // object create for useParams
    const params=useParams()
    console.log(params.id);
    const {restList}=useSelector(state=>state.reducer1)

    // find single restaurant
      const singleRest=restList.find(i=>i.id==params.id)
      console.log(singleRest);

  return (
    <div>
      {singleRest?
       ( <Row>
           <Col lg={6} md={6}>
            <img className='w-75 container p-5' style={{height:'600px'},{width:'100px'}} src={singleRest.photograph}/>

           </Col>
           <Col lg={6} md={6}>

           <ListGroup>
      <ListGroup.Item><h1 className='text-dark'>{singleRest.name}Address <br /> <strong>{singleRest.address}</strong> </h1></ListGroup.Item>
      <ListGroup.Item>Neighbourhood {singleRest.neighborhood}  <strong></strong> </ListGroup.Item>
      <ListGroup.Item>Cuisine Type {singleRest.cuisine_type} </ListGroup.Item>
      <ListGroup.Item><Operatingtime workingTime={singleRest.operating_hours}/> 
       <Review reviewList={singleRest.reviews}></Review>
      </ListGroup.Item>

    </ListGroup>
           </Col>
        </Row>):""
}
    </div>
  )
}

export default Restview