import CustomButton from "./../custom-button/custom-button";
import "./cart-dropdown.scss";
import { connect } from "react-redux";
import CartItem from "./../cart-item/cart-item";
import { selectCartItems } from "./../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { useHistory } from "react-router-dom";
import { toggleCartHidden } from "./../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, dispatch }) => {
  let history = useHistory();

  const onClickCheckout = () => {
    history.push("/checkout");
    dispatch(toggleCartHidden());
  };
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={onClickCheckout}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
