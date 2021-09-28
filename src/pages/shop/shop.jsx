import { Component } from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview";
import SHOP_DATA from "./shop.data";

class ShopPage extends Component {
  state = {
    collection: SHOP_DATA,
  };

  render() {
    const { collection } = this.state;
    return (
      <div className="shop-page">
        {collection.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
