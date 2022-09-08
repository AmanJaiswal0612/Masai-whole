import styled from "styled-components"



export const Wrapper= styled.div`
display: grid;
grid-template-columns:15% 55% 23%;
gap:30px;
`
export const Image= styled.img`
width:100%;
height:auto;
`
export const Text= styled.p`
text-align:justify;
font-size:15px;
width:90%;
`

export const Fotterupper= styled.div`
width:95%;
height:175px;
padding:30px;
background:${(props)=>props.bg}
`

export const H1 = styled.h1`
text-align:center;
color:white;
font-size: ${(props)=>props.size}
`

export const Logo = styled.img`
width:125px;
height:110%;`
