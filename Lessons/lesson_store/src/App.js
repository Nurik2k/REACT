import './App.css';
import React, { useState } from 'react';
import SearchQuery from './components/SearchQuery';

function App() {
  
  let [searchName, setSearchName] = useState("")//input

  let items = [
    {
      "name": "Apple Iphone 14 Pro",
      "desc": "",
      "img": "https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F265269_1.jpg&w=3840&q=85"
    },
    {
      "name": "Samsung Galaxy S23",
      "desc": "",
      "img": "https://sanmi.kz/upload/iblock/521/samsung-galaxy-s23-ultra-12-gb-256-gb-zelenyi-109174565-1.jpg"
    },
    {
      "name": "Xiaomi Mi13 Pro",
      "desc": "",
      "img": "https://static.tildacdn.com/tild6163-3337-4434-b035-653033623363/image.png"
    },
  ]
 
  return (
    <div className='App'>
      <input onInput={(event) => setSearchName(event.target.value)} value={searchName}></input>
      <SearchQuery
       items={items} 
       searchName={searchName}/>
    </div>
  );
}

export default App;