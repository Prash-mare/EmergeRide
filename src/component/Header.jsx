import React from 'react'
import { Button, HStack, Image} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import img from "../assets/Add a heading (1).png"

const bcss={
  color: "black",
  variant: "unstyled",
  padding: "1rem",
}
const styling={
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    height: "110px",
}
const book={
    width:"auto",
    color: "#fff",
    borderRadius: "6px!important",
    textTransform: "uppercase",
    fontSize: "100%",
    fontWeight: "400",
    background: "#fc2361",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    verticalAlign: "middle",
    cursor: "pointer",
    userSelect: "none",
    border: "1px solid transparent",
    lineHeight: "1.5",
}
const custom={
    border: "1px solid #fc2361",
    background: "white",
    color: "black",
    fontWeight: "500",
}
const imgstyler={
    width: "121px",
    draggable: "false",
}
const containerimg={
  backgroundSize: "cover",
  marginLeft: "1%",
    backgroundPosition: "right",
  userSelect: "none",
}
const Header = () => {
  return (
    <HStack {...styling}>
    <HStack {...containerimg}>
        <Image {...imgstyler} src={img}/>
    </HStack>
    <HStack>
   <HStack  p={4}  >
    <Button _hover={{transform:"scale(1.2)"}} {...bcss}>
      <Link  to="/">Home</Link>
    </Button>
    <Button _hover={{transform:"scale(1.2)"}} {...bcss}>
      <Link  to="/services">Services</Link>
    </Button>
    <Button _hover={{transform:"scale(1.2)"}} {...bcss}>
      <Link  to='/about'>Contact Us</Link>
    </Button>
    <Button _hover={{transform:"scale(1.2)"}} {...bcss}>
      <Link  to='/join'>Join Us</Link>
    </Button>
    <Button _hover={{transform:"scale(1.2)"}} {...bcss}>
      <Link  to='/ambulance'>Ambulances</Link>
    </Button>
    <Button _hover={{transform:"scale(1.2)"}} {...bcss}>
      <Link  to='/hospital'>Hospitals</Link>
    </Button>
   </HStack>
   <HStack marginRight={4}>
   <Button _hover={{
        background: "rgb(221, 42, 87)" 
      }}  {...book}>
      <Link to='/book'>Book Now</Link>
    </Button>
    <Button _hover={{
        borderColor: "#31c5fe",
        textColor: "#31c5fe"
      }} {...book} {...custom}>
      <Link to='/login'>Login</Link>
    </Button>
    </HStack>
   </HStack>
   </HStack>
  )
}

export default Header