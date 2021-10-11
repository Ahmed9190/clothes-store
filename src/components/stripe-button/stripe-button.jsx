import StripeCheckout from "react-stripe-checkout";
import "./stripe-button.scss";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HXkMTF11miuk5PGVM93fDdSclLF2DE1ET54Xgh661QxZPcA5azyfHmtozJfRnZPED9lAEmZsjJDmTTPwGBaaT1z008rB3HGmU";

  const onToken = (token) => {
    console.log(token);
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
