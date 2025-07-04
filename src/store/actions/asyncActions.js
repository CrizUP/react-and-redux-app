// Tipos de acciones disponibles
export const API_CALL_REQUEST = 'API_CALL_REQUEST'; //Listeners del watcher saga
export const API_CALL_SUCCES = 'API_CALL_SUCCES'; // Despachadas por el worker de saga
export const API_CALL_FAILURE = 'API_CALL_FAILURE';


export const login = (email, password) => {
    return {
        type: API_CALL_REQUEST,
        payload: {
            request: {
                method: 'post',
                url: 'https://reqres.in/api/login',
                data: {
                    email,
                    password
                }
            },
            okAction: API_CALL_SUCCES,
            failAction: API_CALL_FAILURE
        }
    }
}
/**
 * Acción genérica despachadora de peticiones http 
 * @param {string} method 
 * @param {string} url 
 * @param {object} data 
 * @returns 
 */
export const httpRequest = (method, url, data) => {
    return {
        type: API_CALL_REQUEST,
        payload: {
            request: {
                method: method,
                url: url,
                data: data,
                headers: {
                    'x-api-key': 'reqres-free-v1'
                }
            },
            okAction: API_CALL_SUCCES,
            failAction: API_CALL_FAILURE
        }
    }
}