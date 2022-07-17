import './App.css';
import { SortBtn } from './components/SortBtn';
import { SortedList } from './components/SortedList';

function App() {
  return (
    <div className='App'>
      <h1>React Sorted list</h1>
      <hr />
      <SortBtn />
      <SortedList />
    </div>
  );
}

export default App;
