const Cart = ({...props}) =>{
    let counter = props.cart.length;
    return(
        <div className="Cart">
            <button onClick={() => {document.querySelector(".Cart > div").style.display = "block"}}>Корзина {counter > 0 && counter}</button>
            <div onMouseLeave={() => {document.querySelector(".Cart > div").style.display = "none"}}>
                <ul>
                    {
                        props.cart.map(item => {
                            return(
                                <li>
                                    <img src={item.img} alt="" width={30}/>
                                    {item.name}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Cart