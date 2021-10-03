import "./checkout.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "./../../components/checkout-item/checkout-item";
import {
  selectCartItems,
  selectCartTotal,
} from "./../../redux/cart/cart.selectors";

const CheckoutPage = ({ cartItems, total }) => {
  const CheckoutHeader = () => (
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
  );

  const CheckoutBody = () =>
    cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ));

  const CheckoutFooter = () => (
    <div className="total">
      <span>{total}</span>
    </div>
  );

  return (
    <div className="checkout-page">
      <CheckoutHeader />
      <CheckoutBody />
      <CheckoutFooter />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
