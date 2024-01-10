import logo from "./logo.svg";
import './App.css';

let toggle = true;

function App() {
  if(toggle)
    return(
      <div>True</div>
    )
  else return(
    <div><Page404/></div>
  )
    
}

function Page404(){
  return(
    <div>Error 404 not found</div>
  )
}

export default App;
