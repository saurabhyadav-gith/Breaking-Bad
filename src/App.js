import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import Header from './components/ui/Header';
import Button from './components/ui/Button';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';

// axios returns a promise

function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')


  useEffect(() => {
    const fetchItem = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      setItems(result.data)
      setIsLoading(false)
    }
    

    fetchItem()
  }, [query])

  return (
    <div className="App">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      {/* <Button /> */}
      <CharacterGrid items = {items} isLoading = {isLoading}/>
    </div>
  );
}

export default App;
