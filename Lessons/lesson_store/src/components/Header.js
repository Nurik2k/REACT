import Cart from "./Cart";

const Header = ({ ...props }) => {
    return (
        <div className="Header">
            <div className="Container">
                <div/>
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