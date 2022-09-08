import React from 'react'
import AboutDetail from '../components/AboutDetail'
import { Fotterupper, H1 } from '../components/AboutDetail.styled'

const About = () => {
  return (
    <div>
     <AboutDetail />
     <Fotterupper bg={"peru"}>
       <H1 size="40px">Trade Sales</H1>
       <H1 size="25px">For Architects, Designers and Specifiers</H1>
     </Fotterupper>
    </div>
  )
}

export default About