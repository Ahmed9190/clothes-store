import CollectionsOverview from "./../../components/collections-overview/collections-overview";
import { Route } from "react-router";
import CollectionPage from "../collection/collection";
import { useEffect } from "react";
import { collection } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { onSnapshot } from "@firebase/firestore";
import { convertCollectionsSnapshotToMap } from "./../../firebase/firebase.utils";
import { connect } from "react-redux";
import { updateCollections } from "./../../redux/shop/shop.actions";
import { useState } from "react";
import WithSpinner from "./../../components/with-spinner/with-spinner";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match, updateCollections }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const collectionRef = collection(getFirestore(), "collections");
    onSnapshot(collectionRef, async (snapShot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
      updateCollections(collectionsMap);
      setIsLoading(false);
    });
  }, [updateCollections]);

  console.log(isLoading);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`/shop`}
        render={(props) => (
          <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner isLoading={isLoading} {...props} />
        )}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
