import axios from 'axios';
import type { AxiosInstance } from 'axios';
import { LIMIT } from 'styled-components/dist/utils/createWarnTooManyClasses';
const apiHost = process.env.REACT_APP_API_BASE_URL;
const offersApiInstance: AxiosInstance = axios.create({
    baseURL: `http://localhost:5000/${apiHost}/`,
});
interface RegProps {
    token: string
}
interface EditDataProps {
    education: string,
    about: string;
    experience: string;
    email: string;
    password: string;
    telephone: string;
    country: string;
    city: string;
    document: string;
    token: string;
}

interface AvatarProps {

    formData: any
}
interface CreateOfferProps {
    title: string,
    describtion: string,
    skills: String[], 
    workingPerDay: string,
    location: string,
       salary: string,
       token: string,
     
}
interface PaginationProps {
    limit: number, 
    page: number,

    title: string,
    skills: String[],
    workingPerDay: number,
    location: string,
  salary: {
    from: string,
    to: string
  }
}
interface OfferTypes {
    id: string
}
export const offersApi = {
getOffersAction(PagProps: PaginationProps){
    console.log("Limit "+PagProps.limit +":" +PagProps.page)
//    return offersApiInstance.get(`/getOffers?limit=${PagProps.limit}&page=${PagProps.page}`);
return offersApiInstance.post(`/getOffers?limit=${PagProps.limit}&page=${PagProps.page}`, {
    title: PagProps.title,
    skills: PagProps.skills,
    workingPerDay: String(PagProps.workingPerDay),
    location: PagProps.location,
    from:  PagProps.salary.from,
    to: PagProps.salary.to
}); 
 },
 getOfferAction(OfferProps: OfferTypes ){
    return offersApiInstance.get(`/getOffer?id=${OfferProps.id}`)
 },
 getAmountOfOffersAction( ){
    return offersApiInstance.get(`/getAmountOfOffers`)
 },
   setAvatar(EditData: AvatarProps) {
    console.log("EDIT DATA" +JSON.stringify(EditData))

    },

};
// http://localhost:5000/worklist.com/getOffers?limit=6&page=2