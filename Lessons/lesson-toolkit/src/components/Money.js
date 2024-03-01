import { useSelector } from "react-redux"

const Money = () => {

    const money = useSelector(state => state.money.incomes);

    return(
        <div>
            <ul>
                {money.map(income => {
                    return(
                        <li>{income.money}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Money