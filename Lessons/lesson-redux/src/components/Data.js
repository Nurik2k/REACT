import { useState } from "react";
import { useDispatch } from "react-redux";
import { setImage } from "../redux/actions";

const Data = () => {

    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    return (
        <>
            <input onInput={(event) => setInputValue(event.target.value)} value={inputValue} placeholder="Введите ссылку на картинку"></input>
            <button onClick={() => { dispatch(setImage(inputValue)) }}>Отправить</button>
        </>
    )
}

export default Data;