import React from "react";

class App extends React.Component{
  
  names = ["Nurik", "Asir", "Marston", "Rat Micah"]

  render(){
    return (
      <div>
        {
          this.names.map(value => {
            return(
              <Comp name={value}/>
            )
          })
        }
      </div>
    )
  }
}

class Comp extends React.Component {
  render() {
    return(
      <div>This is new component! Hello, {this.props.name}</div>  
    )
  }
}

export default App;