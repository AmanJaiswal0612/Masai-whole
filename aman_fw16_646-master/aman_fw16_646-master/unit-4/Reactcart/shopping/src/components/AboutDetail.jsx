import React from 'react'
import { Wrapper,Image,Text } from './AboutDetail.styled'
import { aboutdata } from '../Data'
import { nanoid } from 'nanoid'
const AboutDetail = () => {
  return (
    <div >
        {aboutdata.map((el)=>(
                    <Wrapper key={nanoid()}>
                     <div>
                        <h2>{el.text}</h2>
                     </div>
                     <div>
                        <Image src={el.image} alt="image" />
                     </div>
                     <div>
                        <Text>{el.detail}</Text>
                     </div>
                  </Wrapper>
        ))}
    </div>
  )
}

export default AboutDetail