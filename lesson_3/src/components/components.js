import React from "react";

class Compon extends React.Component {
    constructor() {
        super();
        this.state = {
            money: 0
        };

        // Bind the method to the instance of the component
        this.updateState = this.updateState.bind(this);
    }

    updateState() {
        this.setState({
            money: this.state.money + 1
        });
    }

    render() {
        if(this.state.money < 10)
        return (
            <div>
                {this.state.money}
                <button onClick={this.updateState}>+1</button>
            </div>
        )
        else return(
            <div>10</div>
        )
    }

    // componentDidMount(){
    //     this.setState({
    //         money:100,
    //     })

    //     setInterval(() =>{
    //         this.setState(state => ({
    //             money : state.money + 50,
    //         }))
    //     }, 1000)
    // }
}

export default Compon;