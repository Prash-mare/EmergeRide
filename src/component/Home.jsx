import { Button, HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import Lottie from 'react-lottie-player'
import animationdata from "../assets/Animation - 1699646803606.json"
import { Link } from 'react-router-dom'
import {FaPhone} from "react-icons/fa"
import ServiceCards from './ServiceCards'

const container={
    width:"100%",
    display: "flex",
    alignItems: "flex-end",
    userSelect:"none",
}


const buttonStyle={
  width: "15vw",
  color: "#fff",
  borderRadius: "6px!important",
  fontWeight: "600",
  background: "#fc2361",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  userSelect: "none",
  _hover: {
    background: "#ff4785",
  },
}

const custom={
  backgroundColor: "white",
  color:"#fc2361",
  border: "2px solid #fc2361"
}

const m0={
  margin:"0",
}

const positionfix={
  marginTop: "50px",
}

const Home = () => {
  return (
  <VStack className='container1'>
  <div className='cs'>
   <VStack {...container}>
    <HStack>
    <VStack>
    <h1>Your One step solutions For <span className='color1'>24*7</span> Ambulance Service</h1>
    <h2>At Your Doorstep!</h2>
    <Button _hover={{
        background: "rgb(221, 42, 87)" 
      }} {...buttonStyle}>
        <Link style={{fontSize:"1vw"}} to="/Error">BOOK NOW</Link>
    </Button>
    <p>or</p>
    <p className="bold">Call for Assistance</p>
    <Button _hover={{
        borderColor: "#31c5fe",
        textColor: "#31c5fe"
      }} {...buttonStyle} {...custom}>
      <Link to='tel:+123456789'>
      <HStack {...m0} ><FaPhone size={"1vw"}/>
      <p style={{fontSize:"1vw"}}>+91 9674968800</p></HStack>
      
      </Link>
      </Button>
      </VStack>
      <Lottie style={{ width: "100%", height: "auto" }}  loop play speed={0.5} animationData={animationdata} />
      </HStack>
      </VStack>
    </div>
    <VStack className='container2'>
    <p>Our Services</p>
    <div class='circle1 xxlarge shade1'></div>
    <div class='circle1 xlarge shade2'></div>
      <ServiceCards/>
      <Button  _hover={{
        background: "rgb(221, 42, 87)" 
      }} {...buttonStyle}{...positionfix}>
        <Link style={{fontSize:"1vw"}} to="/Error">BOOK NOW</Link>
    </Button>
    </VStack>
    
   </VStack>
  )
}

export default Home