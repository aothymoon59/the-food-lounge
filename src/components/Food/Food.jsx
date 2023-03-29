import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Food.css";

const Food = (props) => {
  const handleAddToCart = props.handleAddToCart;
  const { strMeal, strMealThumb, strArea, strYoutube } = props.food;

  return (
    <div className="food">
      <div className="food-img">
        <img src={strMealThumb} alt={name} />
      </div>
      <div className="food-info">
        <h2>{strMeal}</h2>
        <p className="food-type">Food Type: {strArea}</p>
        <a className="yt-link" href={strYoutube} target="_blank">
          Watch Video
        </a>
      </div>
      <div className="btn-wrapper">
        <button
          onClick={() => handleAddToCart(props.food)}
          className="btn-cart"
        >
          Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
    </div>
  );
};

export default Food;
