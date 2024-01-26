import Cart from "./Cart";
import { Link } from "react-router-dom";

const Header = ({ ...props }) => {
    return (
        <div className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <div className="d-flex">
                    <Link className="btn form-control me-2" to="/">Главная</Link>
                    <Link className="btn form-control me-2" to="/smartphones">Смартфоны</Link>
                </div>
                <input
                    onInput={
                        (event) =>
                            props.setSearchName(event.target.value)
                    }
                    value={props.searchName}>
                </input>
                <Cart
                    cart={props.cart}
                    setCart={props.setCart}
                />
            </div>
        </div>
    )
}

export default Header;