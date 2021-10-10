import CollectionsOverview from "./../../components/collections-overview/collections-overview";
import { Route } from "react-router";
import CollectionPage from "../collection/collection";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`/shop`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
