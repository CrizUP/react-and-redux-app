import './App.css';
import LoginContainer from './components/containers/loginContainer';
import TodoContainer from './components/containers/todoContainer';
import TodoFormContainer from './components/containers/todoFormContainer';
import FilterOptions from './components/pure/filterOptions';

function AppReduxSaga() {
  return (
    <div className="App">
      <LoginContainer/>
    </div>
  );
}

export default AppReduxSaga;
