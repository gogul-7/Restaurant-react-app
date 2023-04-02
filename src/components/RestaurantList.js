import React from 'react'
import { useState,useEffect } from 'react'
import RestCard from './RestCard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { allRestaurantList } from '../actions/restaurantListactions';
import { useDispatch,useSelector } from 'react-redux';

function RestaurantList() {
    // const [restaurantList,setRestaurantList]=useState([])

    // const fetchData= async ()=>{
    //     await fetch('/restaurants.json')
    //     .then((data)=>data.json()
    //     .then(res=>setRestaurantList(res.restaurants)))
    // }


    const dispatch=useDispatch()
    const {restaurantList} = useSelector((state)=>state.restListReducer)
    console.log(restaurantList);



    useEffect(()=>{
        // fetchData()
        dispatch(allRestaurantList())
    },[]
        
    )
  return (
  <Container>
      <Row>
        {
        restaurantList.map(restaurant=>
            <Col><RestCard item={restaurant}/></Col>
            )
        }
      </Row>
   </Container>
  )
}

export default RestaurantList