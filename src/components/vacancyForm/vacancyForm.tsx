/*import { VacancyFormWrapper,  VacancyFormOfOffer, VacancyTitle, VacancyDescribtion, SkillsBlock, SkillElement, VacancyTitleWrapepr, VacancyWatchersContainer, EyeWatchers, EyeTitle, RequiredSkills, RequiredSkillsTitle, WorkingPerDayElement, SalaryOfOffer, ChatOfVacancy, ApplyForJobButton, ChatKeypad, ChatInput, ChatSmiley, ChatSmileyImage, ChatSendImage } from "./vacancyFormStyles";
import { useSelector, useDispatch } from 'react-redux';
import { GetOffersSelector } from "../../store/selectors/getOffers.selector";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Watcher from "../../assets/Watcher.png"
import useAllOffers from "../../hooks/useAllOffers";
import useWebSocket from "../../hooks/useWebSocket";
import Smiley from  "../../assets/smiley.png"
import Send from "../../assets/send.png"
import ChatKeypadComponent from "../ChatKeypadComponent/ChatKeypadComponent";
import { fetchGetOfferFunction } from "../../store/slices/getOffer.slice";
import { GetOfferSelector } from "../../store/selectors/getOffer.selector";
interface SelectedOfferProps {
    id: number,
    title: string,
    description: string,
    skills: String[],
    workingPerDay: string,
    location: string,
    salary: string,
}
const VacancyForm = () => {
    const {data}=useSelector(GetOfferSelector)
    const { getClickedElementFromLocalStorage } = useAllOffers()
    const dispatch =useDispatch()
    const {id} =useParams()
    const [currentElement, setCurrentElement] = useState<SelectedOfferProps | null>(getClickedElementFromLocalStorage)
 useEffect(()=> {
    console.log("IDDDDDDDDDDDDDDDDDDDDDDD"+id)
dispatch(fetchGetOfferFunction({id}))
 }, [id])


 useEffect(()=> {
console.log("VACANCY DATA"+JSON.stringify(data))
 }, [data])
    return (
        <>
            {currentElement && (
                <VacancyFormWrapper>
                    <VacancyFormOfOffer>
                        <VacancyTitleWrapepr>
                            <VacancyTitle>
                                {currentElement.title}
                            </VacancyTitle>
                            <VacancyWatchersContainer>
                                <EyeWatchers src={Watcher} alt="watcher" />
                                <EyeTitle>
                                   VALUE {data.workingPerDay}
              
                                </EyeTitle>
                            </VacancyWatchersContainer>
                        </VacancyTitleWrapepr>
                        <RequiredSkills>
                            <RequiredSkillsTitle>
                                Required skills:
                            </RequiredSkillsTitle>
                            <SkillsBlock>
                                {currentElement.skills.map((item) => (
                                    <SkillElement>{item}</SkillElement>
                                ))}
                            </SkillsBlock>
                        </RequiredSkills>
                        <WorkingPerDayElement>
                            Working time: {currentElement.workingPerDay}
                        </WorkingPerDayElement>
                        <VacancyDescribtion>
                            About:   {currentElement.description}
                        </VacancyDescribtion>
                        <SalaryOfOffer>
                            Salary:  {currentElement.salary} (BYN)
                        </SalaryOfOffer>
                        <ApplyForJobButton>
                            Apply for job
                        </ApplyForJobButton>
                        <ChatKeypadComponent />
                     
                    </VacancyFormOfOffer>
                </VacancyFormWrapper>

            )}
        </>
    );
}

export default VacancyForm;
*/


import { VacancyFormWrapper, VacancyFormOfOffer, VacancyTitle, VacancyDescribtion, SkillsBlock, SkillElement, VacancyTitleWrapepr, VacancyWatchersContainer, EyeWatchers, EyeTitle, RequiredSkills, RequiredSkillsTitle, WorkingPerDayElement, SalaryOfOffer, ChatOfVacancy, ApplyForJobButton, ChatKeypad, ChatInput, ChatSmiley, ChatSmileyImage, ChatSendImage } from "./vacancyFormStyles";
import { useSelector, useDispatch } from 'react-redux';
import { GetOffersSelector } from "../../store/selectors/getOffers.selector";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Watcher from "../../assets/Watcher.png"
import useAllOffers from "../../hooks/useAllOffers";
import useWebSocket from "../../hooks/useWebSocket";
import Smiley from "../../assets/smiley.png"
import Send from "../../assets/send.png"
import ChatKeypadComponent from "../ChatKeypadComponent/ChatKeypadComponent";
import { fetchGetOfferFunction } from "../../store/slices/getOffer.slice";
import { GetOfferSelector } from "../../store/selectors/getOffer.selector";
import VacancySlider from "../vacancySlider/vacancySlider";
interface SelectedOfferProps {
    id: number,
    title: string,
    description: string,
    skills: String[],
    workingPerDay: string,
    location: string,
    salary: string,
}
const VacancyForm = () => {
    const { data } = useSelector(GetOfferSelector)
    const { getClickedElementFromLocalStorage } = useAllOffers()
    const dispatch = useDispatch()
    const { id } = useParams()
    const [currentElement, setCurrentElement] = useState<SelectedOfferProps | null>(getClickedElementFromLocalStorage)
    useEffect(() => {
        console.log("IDDDDDDDDDDDDDDDDDDDDDDD" + id)
        dispatch(fetchGetOfferFunction({ id }))
    }, [id])
    useEffect(() => {
        console.log("VACANCY DATA" + JSON.stringify(data))
    }, [data])
    return (
        <>
            {currentElement && (
                <VacancyFormWrapper>
                    <VacancyFormOfOffer>
                        <VacancyTitleWrapepr>
                            <VacancyTitle>
                                {currentElement.title}
                            </VacancyTitle>
                            <VacancyWatchersContainer>
                                <EyeWatchers src={Watcher} alt="watcher" />
                                <EyeTitle>
                                    VALUE {data.workingPerDay}
                                </EyeTitle>
                            </VacancyWatchersContainer>
                        </VacancyTitleWrapepr>
                        <RequiredSkills>
                            <RequiredSkillsTitle>
                                Required skills:
                            </RequiredSkillsTitle>
                            <SkillsBlock>
                                {data.skills.map((item: string) => (
                                    <SkillElement>{item}</SkillElement>
                                ))}
                            </SkillsBlock>
                        </RequiredSkills>
                        <WorkingPerDayElement>
                            Working time: {data.workingPerDay}
                        </WorkingPerDayElement>
                        <VacancyDescribtion>
                            About:   {data.description}
                        </VacancyDescribtion>
                        <SalaryOfOffer>
                            Salary:  {data.salary} (BYN)
                        </SalaryOfOffer>
                        <VacancySlider  images={data.image_set} />
                        <ApplyForJobButton>
                            Apply for job
                        </ApplyForJobButton>
                        <ChatKeypadComponent />
                    </VacancyFormOfOffer>
                </VacancyFormWrapper>

            )}
        </>
    );
}

export default VacancyForm;








/*

import NavBar from "../../components/NavBar/NavBar";
import OffersLeftSidePanel from "../../components/OffersLeftSidePanel/OffersLeftSidePanel";
import Footer from "../../components/footer/footer";
import { Global } from "../../components/globalStyles";
import useWebSocket from "../../hooks/useWebSocket";

const OffersPage = () => {
  //  const { amountOfOnlineUsers } = useWebSocket({ socket: new WebSocket("ws://localhost:5000/ws") });
  const { amountOfOnlineUsers } = useWebSocket( );
    return ( 
<>
<NavBar />
<Global />
<OffersLeftSidePanel />
<Footer />

</>
     );
    }
    
    export default OffersPage
    //Online {amountOfOnlineUsers} 
    */