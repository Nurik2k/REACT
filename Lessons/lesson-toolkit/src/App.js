import { useState } from 'react';
import './App.css';
import Money from './components/Money';
import { useDispatch } from 'react-redux';
import { addIncome } from './redux/moneySlice';

function App() {

  let [income, setIncome] = useState(0);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <form class="row g-3">
        <div class="col-auto">
          <label for="income" class="visually-hidden">Доход</label>
          <input type="text" name="money" class="form-control" value={income}
            onInput={(e) => setIncome(e.target.value)}
          ></input>
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary mb-3"
            onClick={(e) => {
              // отмена submit
              e.preventDefault();
              dispatch(addIncome({ money: income }));
            }}
          >Отправить</button>
        </div>
      </form>
      <Money />
    </div>
  );
}

export default App;
