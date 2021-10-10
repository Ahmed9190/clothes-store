import { createStructuredSelector } from "reselect";
import "./collections-overview.scss";
import { selectCollections } from "./../../redux/shop/shop.selectors";
import { connect } from "react-redux";
import CollectionPreview from "./../collection-preview/collection-preview";

const CollectionsOverview = ({ collections }) => {
  console.log("here");
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
