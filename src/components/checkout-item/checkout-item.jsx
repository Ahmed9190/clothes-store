import "./checkout-item.scss";
import { connect } from "react-redux";
import {
  addItem,
  removeItem,
  clearItemFromCart,
} from "./../../redux/cart/cart.actions";

const CheckoutItem = ({
  cartItem,
  clearItem,
  decreaseItemQty,
  increaseItemQty,
}) => {
  const { name, price, imageUrl, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decreaseItemQty(cartItem)}>
          &#10094;
        </div>

        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => increaseItemQty(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  increaseItemQty: (item) => dispatch(addItem(item)),
  decreaseItemQty: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
