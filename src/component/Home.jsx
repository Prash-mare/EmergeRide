import { Button, HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import Lottie from 'react-lottie-player'
import animationdata from "../assets/Animation - 1699646803606.json"
import { Link } from 'react-router-dom'
import {FaPhone} from "react-icons/fa"

const container={
    width:"100%",
    display: "flex",
    alignItems: "flex-end",
    userSelect:"none",
}

const buttonStyle={
    width: "60%",
    color: "#fff",
    borderRadius: "6px!important",
    fontWeight: "600",
    background: "#fc2361",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    verticalAlign: "middle",
    cursor: "pointer",
    userSelect: "none",
}

const custom={
    backgroundColor: "#daeafa",
    color:"#fc2361",
    border: "2px solid #fc2361"
}

const Home = () => {
  return (
    <div className='cs'>
   <VStack {...container}>
    <HStack>
    <VStack>
    <h1>Your One step solutions For 24*7 Ambulance Service</h1>
    <h2>At Your Doorstep!</h2>
    <Button _hover={{
        background: "rgb(221, 42, 87)" 
      }} {...buttonStyle}>
        <Link to="/book">BOOK NOW</Link>
    </Button>
    <p>or</p>
    <p className="bold">Call for Assistance</p>
    <Button _hover={{
        borderColor: "#31c5fe",
        textColor: "#31c5fe"
      }} {...buttonStyle} {...custom}>
      <Link to='tel:+123456789'>
      <HStack><FaPhone/>
      <p>+91 9674968800</p></HStack>
      
      </Link>
      </Button>
    </VStack>
    <Lottie  style={{ width: "50%", height: "auto" }}  loop play speed={0.5} animationData={animationdata} />
    </HStack>
   </VStack>
   </div>
  )
}

export default Home