import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { increment, decrement } from './redux/actions';
import Data from './components/Data';

function App() {

  // Вытягиваем из хранилища state.count
  const count = useSelector(state => state.count)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={() => { dispatch(increment()) }}>+</button>
      <Data/>
      <button onClick={() => { dispatch(decrement()) }}>-</button>
    </div>
  );
}

export default App;
