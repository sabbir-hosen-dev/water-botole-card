
import "./Card.css"
export default function Card({item,cardAdd}) {
  const {img, name,price } = item
  return (
    <div className="card">
      <img src={img} alt="" />
      <h4> {name} </h4>
      <div className="card-price">
        <p>Price : {price}</p>
        <button onClick={() => cardAdd(item)}>Add Card</button>
      </div>
    </div>
  )
}
