import './App.css';
import React, { useState } from 'react';
import SearchCompanyQuery from './components/Queries';

function App() {
  let [searchCompany, setSearchCompany] = useState("")
  let [reliability, setReliability] = useState("")
  
  let companies = [
    {
      "name": "ООО 'МегаТранс'",
      "type": "Транспортные услуги",
      "quantity": 589,
      "distance": 34,
      "reliability": "надежный"
    },
    {
      "name": "ЗАО 'ПродуктСервис'",
      "type": "Продукты питания",
      "quantity": 983,
      "distance": 71,
      "reliability": "ненадежный"
    },
    {
      "name": "ИП 'ТехноПродукт'",
      "type": "Электроника",
      "quantity": 317,
      "distance": 49,
      "reliability": "надежный"
    },
    {
      "name": "Группа компаний 'ГлобалЛогистик'",
      "type": "Логистика",
      "quantity": 725,
      "distance": 85,
      "reliability": "подозрительный"
    },
    {
      "name": "Транспортная компания 'ЭкспрессГруз'",
      "type": "Транспортные услуги",
      "quantity": 286,
      "distance": 28,
      "reliability": "надежный"
    },
    {
      "name": "ООО 'МагазинМебели'",
      "type": "Мебель",
      "quantity": 97,
      "distance": 13,
      "reliability": "ненадежный"
    },
    {
      "name": "ИП 'ЕвроТовары'",
      "type": "Товары народного потребления",
      "quantity": 718,
      "distance": 94,
      "reliability": "надежный"
    },
    {
      "name": "ЗАО 'ТекстильМастер'",
      "type": "Текстильные товары",
      "quantity": 510,
      "distance": 50,
      "reliability": "ненадежный"
    },
    {
      "name": "Группа компаний 'ПромТехника'",
      "type": "Промышленное оборудование",
      "quantity": 842,
      "distance": 40,
      "reliability": "надежный"
    },
    {
      "name": "Транспортная компания 'ГрузоЛиния'",
      "type": "Транспортные услуги",
      "quantity": 480,
      "distance": 42,
      "reliability": "подозрительный"
    },
    {
      "name": "ООО 'Автохимия'",
      "type": "Автохимия и автокосметика",
      "quantity": 315,
      "distance": 46,
      "reliability": "подозрительный"
    },
    {
      "name": "ИП 'ФудМастер'",
      "type": "Продукты питания",
      "quantity": 687,
      "distance": 67,
      "reliability": "ненадежный"
    },
    {
      "name": "ЗАО 'ЭлектроТехника'",
      "type": "Электротехнические товары",
      "quantity": 239,
      "distance": 24,
      "reliability": "подозрительный"
    },
    {
      "name": "Группа компаний 'ЛогистикСервис'",
      "type": "Логистика",
      "quantity": 572,
      "distance": 58,
      "reliability": "надежный"
    },
    {
      "name": "Транспортная компания 'СкорыйГруз'",
      "type": "Транспортные услуги",
      "quantity": 803,
      "distance": 89,
      "reliability": "надежный"
    },
    {
      "name": "ООО 'ТорговыйДом'",
      "type": "Товары народного потребления",
      "quantity": 424,
      "distance": 45,
      "reliability": "подозрительный"
    },
    {
      "name": "ИП 'ТекстильМагазин'",
      "type": "Текстильные товары",
      "quantity": 945,
      "distance": 62,
      "reliability": "подозрительный"
    },
    {
      "name": "ЗАО 'МедТехника'",
      "type": "Медицинская техника",
      "quantity": 137,
      "distance": 16,
      "reliability": "надежный"
    },
    {
      "name": "Группа компаний 'АгроПродукт'",
      "type": "Сельскохозяйственные товары",
      "quantity": 392,
      "distance": 37,
      "reliability": "ненадежный"
    },
    {
      "name": "Транспортная компания 'ЛогистикГрупп'",
      "type": "Логистика",
      "quantity": 567,
      "distance": 51,
      "reliability": "подозрительный"
    },
    {
      "name": "ООО 'Автоаксессуары'",
      "type": "Автоаксессуары и автозапчасти",
      "quantity": 285,
      "distance": 33,
      "reliability": "ненадежный"
    },
    {
      "name": "ИП 'Еда на Дом'",
      "type": "Доставка готовой еды",
      "quantity": 629,
      "distance": 70,
      "reliability": "ненадежный"
    },
    {
      "name": "ЗАО 'МебельныйМир'",
      "type": "Мебель",
      "quantity": 784,
      "distance": 77,
      "reliability": "надежный"
    },
    {
      "name": "Группа компаний 'АвтоСервис'",
      "type": "Автосервис",
      "quantity": 318,
      "distance": 38,
      "reliability": "подозрительный"
    }
  ]

  return (
    <div className='App'>
      <input onInput={(event) => setSearchCompany(event.target.value)} value={searchCompany}></input>
      <select onSelect={(event) => setReliability(event.target.value)} value={reliability}>
        <option>надежный</option>
        <option>ненадежный</option>
      </select>
      
      <SearchCompanyQuery 
      companies={companies}
      searchCompany={searchCompany}
      reliability={reliability}></SearchCompanyQuery>
      </div>
  );
}

export default App;
