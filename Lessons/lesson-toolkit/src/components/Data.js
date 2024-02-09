import { useDispatch } from "react-redux";
import { setImage } from "../redux/imgaeSlice";
import { useState } from "react";

const Data = () => {

    // Сохраняем введенные данные
    const [inputValue, setInputValue] = useState('');
    // Отправляем в redux
    const dispatch = useDispatch();

    return (
        <>
            <input
                onInput={(event) => setInputValue(event.target.value)}
                placeholder="Введите ссылку на картинку"
            ></input>
            <button onClick={() => {
                dispatch(setImage(inputValue))
            }}>
                Отправить
            </button>
        </>
    )
}

export default Data;
