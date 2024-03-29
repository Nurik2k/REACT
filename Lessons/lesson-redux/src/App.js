import { useSelector } from 'react-redux';
import './App.css';
import Data from './components/Data';

function App() {

  // Вытягиваем из хранилища state.count
  const users = useSelector(state => state.users)

  return (
    <div className="App">
      <Data />
      <br></br>
      {users.map(user=>(
        <li>user.name</li>
      ))}
    </div>
  );
}

export default App;
