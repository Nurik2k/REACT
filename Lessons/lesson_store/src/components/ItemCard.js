export default function ItemCard(props) {

    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                <img  src={props.item.img} className="img-fluid rounded-start" alt="..."></img>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{props.item.name}</h5>
                    <p className="card-text">{props.item.desc}</p>
                    <button className="btn btn-primary" onClick={() => props.addItemToCart(props.item)}>В корзину</button>
                </div>
                </div>
            </div>
        </div>
    )
}