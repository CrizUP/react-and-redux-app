import { takeLatest, call, put } from 'redux-saga/effects'
import axios from "axios";
import { API_CALL_REQUEST } from '../actions/asyncActions';

// Watchers saga
// Escucha las acciones API_CALL_REQUEST

export function* watcherSaga(){
    // Eschuca la acción y realiza la petición 
    yield takeLatest(API_CALL_REQUEST, workerSaga)
}

// Es llamado desde el watcherSaga, hace el login y despacha una acción 
export function* workerSaga(action){
    try {
        const response = yield call(fetchHttp(action.payload.request));
        //Obtenemos el token de la respuesta 
        const token = response.data.token;
        yield put({
            type: action.payload.okAction,
            payload: {
                token: token
            }
        })
    } catch (error) {
        yield put({
            type: action.payload.okAction,
            payload: {
                error: error
            }
        })
    }
}

function fetchHttp(request) {
    return function() {
        return (axios(request))
    }
}