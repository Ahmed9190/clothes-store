import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections
      ? Object.keys(collections).map(
          (collectionKey) => collections[collectionKey]
        )
      : []
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) => {
    console.log({ collections, collectionUrlParam });

    return collections?.[collectionUrlParam] ?? null;
  });
