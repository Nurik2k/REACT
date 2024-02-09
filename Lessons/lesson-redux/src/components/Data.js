import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/actions";

const Data = () => {

    const [inputValue, setInputValue] = useState([{ name: '', surname: '', age: 0 }]);
    const dispatch = useDispatch();

    return (
        <>
            <input onInput={(event) => setInputValue({...inputValue, name: event.target.value})} value={inputValue.name} placeholder="Введите имя"></input>
            <input onInput={(event) => setInputValue({...inputValue, surname: event.target.value})} value={inputValue.surname} placeholder="Введите фамилию"></input>
            <input onInput={(event) => setInputValue({...inputValue, age: event.target.value})} value={inputValue.age} placeholder="Введите возраст"></input>
            <button onClick={() => { dispatch(setUser(inputValue)) }}>Отправить</button>
        </>
    )
}

export default Data;