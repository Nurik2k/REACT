import React from "react";
import Comp from "./components/Comp"
import Test from "./components/Test"


class App extends React.Component {

  money = [
    {
      year: 2023,
      income: 120000,
      outcome: 80000
    },
    {
      year: 2024,
      income: 20000,
      outcome: 8000
    },
  ]

  result = {
    income: 0,
    outcome: 0,
  };

  fn = ()=> {
    return (
      <b>OK</b>
    )
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Год</td>
              <td>Доход</td>
              <td>Расходы</td>
              <td>Прибыль</td>
            </tr>
          </thead>
          <tbody>
            {
              this.money.map(value => {
                this.result.income += value.income;
                this.result.outcome += value.outcome;
                return (
                  <Comp 
                    //year={value.year}
                    income={value.income}
                    outcome={value.outcome}
                  />
                )
              })
            }
            <td>Итого:</td>
            <td>{this.result.income}</td>
            <td>{this.result.outcome}</td>
            <td>{this.result.outcome += this.result.income}</td>
          </tbody>
        </table>
        <Test fn={this.fn}/>
      </div>
    )
  }

}







export default App;