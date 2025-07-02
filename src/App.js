import './App.css';
import TodoContainer from './components/containers/todoContainer';
import TodoFormContainer from './components/containers/todoFormContainer';
import FilterOptions from './components/pure/filterOptions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <FilterOptions/>
        <TodoContainer/>
        <TodoFormContainer/>
      </header>
    </div>
  );
}

export default App;
