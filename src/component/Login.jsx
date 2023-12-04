import { HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import hospital from "../assets/Login animation/Animation - 1699732676160.json"
import patient from "../assets/Login animation/patient.json"
import Lottie from 'react-lottie-player';
import { useNavigate } from 'react-router-dom';

const styler={
    width: "100vw",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
}

const stylerCards={
    gap: "5vw",
}

// const containerlogin={
//     border: "2px solid black",
// }


const Login = () => {
  const navigate = useNavigate()
  const handle=()=>{
    navigate('/Error');
  }
  return (
    <VStack {...styler}>
    <VStack className='containerlogin'>
     <p className='text'>Welcome</p>
        <HStack {...stylerCards}>

        <button onClick={handle}  className="card wallet">
        <div className="overlay"></div>
        <div className="circle">
        <Lottie style={{ width: "900%", height: "auto",display: "flex", alignSelf: "center" }} loop play speed={0.5} animationData={patient} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="23 29 78 60"
            height="60px"
            width="78px"
          >
            <defs></defs>
            <g transform="translate(23.000000, 29.500000)" fillRule="evenodd" fill="none" strokeWidth="1" stroke="none" id="icon">
            </g>
          </svg>
        </div>
        <p>Patient</p>
         </button>


          <button onClick={handle} className="card wallet">
        <div className="overlay"></div>
        <div className="circle">
            <Lottie style={{ width: "900%", height: "auto",display: "flex", alignSelf: "center" }} loop play speed={0.5} animationData={hospital} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="23 29 78 60"
            height="60px"
            width="78px"
          >
            <defs></defs>
            <g transform="translate(23.000000, 29.500000)" fillRule="evenodd" fill="none" strokeWidth="1" stroke="none" id="icon">
            </g>
          </svg>
        </div>
        <p>Hospital</p>
         </button>

         </HStack>
         </VStack>
      </VStack>
  );
}

export default Login;
