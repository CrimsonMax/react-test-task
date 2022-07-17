import './App.css';
import { SortBtn } from './components/SortBtn';
import { SortedList } from './components/SortedList';
import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import axios from 'axios';
import _ from 'lodash';
import { Loader } from './components/Loader';

function App() {
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  async function fetchData() {
    setIsLoading(true)
    const response = await axios.get('https://api.stackexchange.com/2.2/search?intitle=react&site=stackoverflow')
    const postsArray = _.filter(response.data.items, elem => elem.is_answered && elem.owner.reputation > 50)
    setMessages(postsArray)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='App'>
      <Header />
      <SortBtn posts={messages} action={setMessages} />
      {isLoading
        ? <Loader />
        : <SortedList props={messages} />
      }
    </div>
  );
}

export default App;
