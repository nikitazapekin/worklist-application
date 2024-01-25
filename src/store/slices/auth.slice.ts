import { createSlice } from '@reduxjs/toolkit';
import type { City, CitySearchResponse} from '../../interfaces/city';
//import type { City, CitySearchResponse } from '@interfaces';
//import { LOADING_STATUS } from '@constants';
import { LOADING_STATUS } from '../../constants/loadingStatus';
//import { transformCityResponse } from '@utils';
import { transformCityResponse } from '../../utils/transfrom';
import type { PayloadAction } from '@reduxjs/toolkit';
 
interface AuthState {
	//currentCity: City | null;
    token: string;
	citySearchResult: string | null;
	searchCitiesLoadingStatus: LOADING_STATUS;
}

const initialState: AuthState = {
	//currentCity: null,
    token: "",
	citySearchResult: null,
	searchCitiesLoadingStatus: LOADING_STATUS.IDLE,
};
interface AuthProps {
    username: string,
    country: string,
    city: string,
    telephone: string,
    email: string,
    password: string
 }
export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCurrentAuth: (state, action: PayloadAction<City>) => {
            console.log("ACT" +action.payload)
		//	state.currentCity = action.payload;
		},
		setAuthLoadingStatus: (state, action: PayloadAction<LOADING_STATUS>) => {
			state.searchCitiesLoadingStatus = action.payload;
		},
		setAuth: (state, action: PayloadAction<string>) => {
            state.token=  action.payload
		//	state.citySearchResult = action.payload.results?.map(transformCityResponse) ?? null;
		},
		fetchAuthFunction: (state, action: PayloadAction<AuthProps>) => {}, 
	},
});

export const { 

  setCurrentAuth, setAuthLoadingStatus, setAuth, fetchAuthFunction
} =
	authSlice.actions;
export default authSlice.reducer;