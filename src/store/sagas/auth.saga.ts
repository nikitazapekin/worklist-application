import { call, put, takeLatest } from 'redux-saga/effects';
import { LOADING_STATUS } from '../../constants/loadingStatus';
import { CitySearchResponse } from '../../interfaces/city';
import { openMeteoApi } from '../../api';
import { serverApi } from '../../api/server.api';
 import { setCurrentAuth, setAuthLoadingStatus, setAuth, fetchAuthFunction, setAuthSearchResult} from '../slices/auth.slice';

import type { PayloadAction } from '@reduxjs/toolkit';
interface AuthProps {
    username: string,
    country: string,
    city: string,
    telephone: string,
    email: string,
    password: string
}
interface AuthResponse {
    authResponse: string
  }
  
function* fetchAuth(action: PayloadAction<AuthProps>) {
    console.log("ACT" +action.payload)
//yield put(setSearchCitiesLoadingStatus(LOADING_STATUS.LOADING));
yield put(setAuthLoadingStatus(LOADING_STATUS.LOADING));

	try {/*
 const data: AuthResponse = yield call(serverApi.signUpAction, action.payload);
 console.log("data"+JSON.stringify(data.authResponse))
 const item = data.authResponse
		yield put(setAuthSearchResult(data.authResponse));
        yield put(setAuthLoadingStatus(LOADING_STATUS.IDLE)); */

        const authResponse: AuthResponse = yield call(serverApi.signUpAction, action.payload);
 console.log("data"+JSON.stringify(authResponse))
 
		yield put(setAuthSearchResult(authResponse));
        yield put(setAuthLoadingStatus(LOADING_STATUS.IDLE));
	} catch (error) {
        console.log("SAAAAAAGA ERR"+error)
        yield put(setAuthLoadingStatus(LOADING_STATUS.ERROR));
	} 
}

export function*  authWatcher() {
    yield takeLatest(fetchAuthFunction.type, fetchAuth);
}