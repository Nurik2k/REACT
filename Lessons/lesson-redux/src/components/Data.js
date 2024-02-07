import { useSelector } from "react-redux";

const Data = () => {

    const count = useSelector(state => state.count)

    return(
        <>
            {count}
        </>
    )
}

export default Data;