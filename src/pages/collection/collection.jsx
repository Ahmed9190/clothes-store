import "./collection.scss";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from "./../../components/collection-item/collection-item";

const CollectionPage = ({ collection: { title, items } }) => {
  return (
    <div className="collection">
      <h2 className="collection-title">{title}</h2>
      <div className="collection-items-container">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
