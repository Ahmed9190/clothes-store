import "./collection.scss";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

const CollectionPage = ({ collection }) => {
  console.log(collection);
  return (
    <div className="collection">
      <h2>COLLECTION PAGE</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
