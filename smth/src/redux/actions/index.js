export const takeDataArmchairs = () => ({
  type: 'DATA_ARMCHAIRS',
});

export const makeFavoriteThing = (imgSrc) => ({
  type: 'MAKE_FAVORITE_THING',
  imgSrc,
});

export const favoriteThingsFunc = () => ({
  type: 'FAVORITE_THINGS',
});

export const changeAmountOfBuys = (imgSrc, symbol) => ({
  type: 'CHANGE_AMOUNT_OF_BUYS',
  imgSrc,
  symbol,
});

export const returnPurchaseItems = () => ({
  type: 'RETURN_PURCHASE_ITEMS',
});

export const nonSubmitedNewText = (text) => ({
  type: 'NON_SUBMITED_NEW_TEXT',
  text,
});
