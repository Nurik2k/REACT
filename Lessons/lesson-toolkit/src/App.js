import { useSelector } from 'react-redux';
import './App.css';
import Data from './components/Data';

function App() {

  const image_url = useSelector(state=> state.image.image)

  return (
    <div className="App">
      <Data/>
      <br></br>
      <img src={image_url}></img>
    </div>
  );
}

export default App;
