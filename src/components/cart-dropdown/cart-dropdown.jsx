import CustomButton from "./../custom-button/custom-button";
import "./cart-dropdown.scss";
import { connect } from "react-redux";
import CartItem from "./../cart-item/cart-item";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({ cartItems });

export default connect(mapStateToProps)(CartDropdown);
