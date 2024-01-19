import React from "react"

export default class Comp extends React.Component {

    render() {
      return (
        <tr>
          <td>{this.props.name}</td>
          <td>{this.props.surname}</td>
          <td>{this.props.age}</td>
        </tr>
      )
    }
  }

  

