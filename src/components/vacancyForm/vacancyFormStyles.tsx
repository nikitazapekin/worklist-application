import styled from "styled-components";
 
export const VacancyFormWrapper  = styled.div`
width: 100%;
min-height: 100vh;
position: relative;
display: flex;
align-items: center;
justify-content: center;
`
export const VacancyFormOfOffer = styled.div`
width: 80%;
min-height: 90vh;
position: relative;
margin: 0 auto;
background-color: rgba(54, 54, 54);
border-radius: 20px;
display: flex;
flex-direction: column;
gap: 20px;
padding: 50px;
top: 100px;
`
export const VacancyTitle = styled.h1`
font-size: 40px;
color: #fff;
`
export const VacancyDescribtion = styled.h2`
color: #fff;
font-size: 30px;
max-width: 60%;
`
export const SkillsBlock = styled.div`
width: 100%;
height: auto;
flex-wrap: wrap;
display: flex;
gap: 20px;
`
export const SkillElement = styled.div`
min-width: 100px;
width: auto;
height: auto;
padding: 10px;
background-color: rgba(28, 28, 28);
color: #fff;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
font-size: 32px;
`
export const VacancyTitleWrapepr = styled.div`
width: 100%;
height: auto;
position: relative;
display: flex;
border-bottom: 3px solid #fff;
justify-content: space-between;
`
export const VacancyWatchersContainer = styled.div`
width: auto;
display: flex;
position: relative;
justify-content: center;
align-items: center;

`
export const EyeWatchers = styled.img`
width: 50px;
height: 50px;
`
export const EyeTitle = styled.h2`
color: #fff;
`
export const RequiredSkills = styled.div`
position: relative;
width: 100%;
height: auto;

`
export const RequiredSkillsTitle = styled.h2`
color: #fff;
margin-bottom: 10px;
`
export const WorkingPerDayElement = styled.h2`
color: #fff;

`
export const SalaryOfOffer = styled.h2`
color: #fff;
`
export const ApplyForJobButton= styled.button`
width: 100%;
height: auto;
padding: 10px;
color: #fff;
cursor: pointer;
background-color: rgba(36, 36, 35);
border: none;
font-size: 32px;
border-radius: 20px;
transition: 1s ease-in-out;
&:hover{
  letter-spacing: 2px;
background-color: rgba(133, 11, 3);
color: #fff;
transform: scale(1.01);
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
`
export const ChatOfVacancy = styled.div`
width: 100%;
min-height: 400px;
position: relative;
background-color: rgba(36, 36, 35);
border-radius: 20px;
`
export const ChatKeypad = styled.div`
position: absolute;
bottom: 0;
width: 100%;
height: auto;
padding: 10px;
background-color: rgba(71, 71, 69);
border-radius: 0 0 20px 20px; 
display: flex;
justify-content: center;
gap: 10px;
align-items: center; 
`
 export const ChatInput = styled.input`
 width: 80%;
 height: 50px;
 border: none;
 outline: none;
 cursor: pointer;
 padding: 10px;
 border-radius: 20px;
 font-size: 32px;
 `
 export const ChatSmiley = styled.div`
 width: 50px;
 height: 50px;
 cursor: pointer;
 border: 3px solid black;
 border-radius: 50%;
 display: flex;
 justify-content: center;
 align-items: center;
 background-color: #fff;
 `
 export const ChatSmileyImage = styled.img`
 width: 50px;
 height: 50px;

 `
 
 export const ChatSendImage = styled.img`
 width: 30px;
 height: 30px;
margin-right:  5px;
 `
 