import React from "react"

export default class Comp extends React.Component {

    render() {
      return (
        <tr>
          <td>{this.props.year}</td>
          <td>{this.props.income}</td>
          <td>{this.props.outcome}</td>
          <td>{this.props.income - this.props.outcome}</td>
        </tr>
      )
    }
  }

  Comp.defaultProps = {
    year: 2000,
  }

