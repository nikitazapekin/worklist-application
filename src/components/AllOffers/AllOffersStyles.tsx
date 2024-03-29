import styled, { keyframes } from "styled-components";
//min-height: 100vh;
export const ExistingOffers = styled.div`
position: relative;
width: 100%;
max-width: 100%;
background-color: rgba(230, 232, 235);
 display: flex;
 gap: 10px;
 flex-direction: column;
 background-color: rgba(46, 46, 46);
 overflow-y: scroll;
 height: 100%;
 max-height: 100vh;
`
export const OffersWrapper = styled.div`
width: 100%;
min-height: 100px;
padding: 20px;
color: #fff;
height: auto;
position: relative;
background-color: rgba(98, 99, 99);
display: flex; 
flex-direction: column;
gap: 10px;
border-bottom: 5px solid black;
`
export const ContentOfOffers = styled.div`
position: relative;
width: 100%;
height: auto;
overflow-y: scroll;
`
export const OffersTitleBlock = styled.div`
width: 100%;
height: 200px;
border-bottom: 3px solid black;
background-color: #fff;
position: relative;
padding: 100px;
`
export const OffersTitle = styled.h1`
color: black;
position: absolute;
left: 50%;
transform: translateX(-50%) translateY(-50%);
top: 50%; 
font-size: 44px;
font-weight: 900;
`
export const OfferHeader = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`
export const OfferTitle = styled.h2`
color: #fff;
font-size: 32px;
`
export const OfferSalary = styled.h2`
color: #fff;
font-size: 32px;

`
export const LocationOfJob = styled.p`
color: #fff;
max-width: 60%;
`
export const ContactButton = styled.button`
width: 220px;
border: none;
height: 50px;
font-size: 22px;
 outline: none;
 border-radius: 10px;
 cursor: pointer;
 background-color: #fff;
`
export const RequeredSkill = styled.div`
padding: 20px;
color: #fff;
min-width: 100px;
max-width: 200px;
height: auto;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(46, 46, 46);
border-radius: 10px;
`
export const SkillsBlock = styled.div`
width: 100%;
height: auto;
display: flex;
flex-wrap: wrap;
gap: 10px;
`
const pulseAnimation = keyframes`
  0% {
    opacity: 0.4;
    transform: scale(1) translateY(0px) translateX(0px);
  }
  50% {
    opacity: 1;
    transform: scale(1.2) translateY(-50px) translateX(20px) rotate(180deg);
  }
  100% {
    opacity: 0.4;
    transform: scale(1) translateY(0px) translateX(0px);
  }
`;
interface TransparentCudeStyles {
    bottom: string
}
export const TransparentCude = styled.div<TransparentCudeStyles>`
width: 50px;
height: 50px;
background-color: orange;
opacity: 0.4;
border-radius: 10px;
position: absolute;
bottom: ${props=>props.bottom};
animation: ${pulseAnimation} 5s infinite;
`
export const PageNumbers = styled.div`
position: relative;
top: 100%;
display: flex;
justify-content: center;
gap: 20px;
margin-bottom: 10px;
`

interface PageNumberProps {
  color: string
}
export const PageNumber = styled.button<PageNumberProps>`
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(87, 87, 87);
color: ${props=> props.color};
padding: 20px;
font-size: 32px;
border: 2px solid black;
cursor: pointer;
border-radius: 10px;
`