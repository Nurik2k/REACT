import React from "react";
//import styles from "./App.css";
// import Comp from "./components/Comp";
// import Test from "./components/Test";
import User from "./components/User";



class App extends React.Component {
  users = [
    {
      name: "Assir",
      surname: "Abdukhalikov",
      age: 21
    },
    {
      name: "Nurik",
      surname: "Seisenbay",
      age: 19
    }
  ];

  ageStatistics = [];

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Surname</td>
              <td>Age</td>
            </tr>
          </thead>
          <tbody>
            {
              this.users.map((value, i) => {
                this.ageStatistics[i] = value.age
                return (
                  <User 
                    Name={value.name}
                    Surname={value.surname}
                    Age={value.age}
                  />                
                )
              })
            }
          </tbody>
        </table>
        <tr>
          <td>Average age:</td>
          <td>
            {
              this.ageStatistics.reduce((accumulator, currentValue) => accumulator + currentValue, 0)/this.users.length
            }
          </td>
        </tr>
      </div>
    )
  }

  // money = [
  //   {
  //     year: 2023,
  //     income: 120000,
  //     outcome: 80000
  //   },
  //   {
  //     year: 2024,
  //     income: 20000,
  //     outcome: 8000
  //   },
  // ]

  // result = {
  //   income: 0,
  //   outcome: 0
  // };

  // fn = () => {
  //   return(
  //     <b>Ok</b>
  //   )
  // }

  // render() {
  //   return (
  //     <div>
  //       <table>
  //         <thead>
  //           <tr>
  //             <td>Год</td>
  //             <td>Доход</td>
  //             <td>Расходы</td>
  //             <td>Прибыль</td>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {
  //             this.money.map(value => {
  //               this.result.income += value.income
  //               this.result.outcome += value.outcome
  //               return (
  //                 <Comp 
  //                   //year={value.year}
  //                   income={value.income}
  //                   outcome={value.outcome}
  //                 />                
  //               )
  //             })
  //           }
  //           <tr>
  //             <td>Result:</td>
  //             <td>{this.result.income}</td>
  //             <td>{this.result.outcome}</td>
  //             <td>{this.result.income - this.result.outcome}</td>
  //           </tr>
  //         </tbody>
  //       </table>
  //       <Test fn={this.fn}/>
  //     </div>
  //   )
  // }
}

export default App;