import '../styles/Card.scss'

function Card(props) {
  return (
    <div className="card">
      <img src={props.img} className="card__img" />
      <div className="card__body">
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
        <h3 className="card__price">{props.price}</h3>
        <button className="card__btn">Add to Cart</button>
      </div>
    </div>
  );
}

export default Card;

/*

<Card
        img="https://images.unsplash.com/photo-1612077330269-788066d5ba58?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85"
        title="Tie Up Boots"
        description="Fall Favorite • Boots"
        price="45.00"
      />
      
      


*/
