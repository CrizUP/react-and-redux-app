import React from 'react'
import { connect } from 'react-redux'
import LoginForm from '../pure/loginForm';
import { httpRequest, login } from '../../store/actions/asyncActions';


const mapStateToProps = (state) => {
    return {
        logged: state.userState.logged,
        fetching: state.userState.fetching,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (email, password) => {
            const data = {
                email,
                password
            }
            const url = 'https://reqres.in/api/login'
            return dispatch(httpRequest('post', url, data))
        }

    }
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm);
export default LoginContainer;