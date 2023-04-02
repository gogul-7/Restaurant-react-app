import React from 'react'
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Row,Col,Image } from 'react-bootstrap';
import WorkingHours from './WorkingHours';
import Comments from './Comments';
import { useSelector } from 'react-redux';

function RestaurantView( ) {
  const restId=useParams()
  console.log(restId);

  // const [restaurantList,setRestaurantList]=useState([])

    // const fetchData= async ()=>{
    //     await fetch('/restaurants.json')
    //     .then((data)=>data.json()
    //     .then(res=>setRestaurantList(res.restaurants)))
    // }
    const {restaurantList} = useSelector((state)=>state.restListReducer)
    console.log(restaurantList);

    // useEffect(()=>{
    //     // fetchData()
    // },[]
        
    // )
    console.log(restaurantList);

    const restaurant=restaurantList.find(item=>(
      item.id==restId.id
    ))
    console.log(restaurant);

  return (
    restaurant?(
    <Container>
      <Row style={{ alignItems:'center' }} className='mt-2 '>
        <Col><Image src={restaurant.photograph} style={{ width:'70%' }}></Image></Col>
        <Col>
            <h1>{restaurant.name}</h1>
            <h3>{restaurant.neighborhood}</h3>
            <p>{restaurant.address}</p>
            <WorkingHours wh={restaurant.operating_hours} />
            <Comments review={restaurant.reviews} />
        </Col>
      </Row>
    </Container>
    ):"NULL"
    
  )
}

export default RestaurantView