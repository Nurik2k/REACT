import { React, useState } from "react"




const FunctionCompon = () =>{
    // let [money, setMoney] = useState(0)
    // let [name, setName] = useState("")

    let [users, setUser] = useState({})

    // const handleButtonClick = () =>{
    //     return setMoney(money + 1)
    // }

    return(
        <div>
            {/* { money }
            <input onInput={(event) => setName(event.target.value)} value={name}></input>
            <button onClick={handleButtonClick}>+</button>
            {name} */}

            <input onChange={(event) => setUser({user: event.target.value})}></input>
            <button onClick={console.log(users)}>+</button>

            <input onChange={(event) => setUser({name: event.target.value})}></input>
            <button onClick={console.log(users)}>+</button>
        </div>
    )
}

export default FunctionCompon