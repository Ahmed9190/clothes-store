import CartDropdown from "./cart-dropdown";
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "./../../redux/cart/cart.selectors";
import { withRouter } from "react-router-dom";

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const CartDropdownContainer = compose(
  connect(mapStateToProps),
  withRouter
)(CartDropdown);

export default CartDropdownContainer;
