export const takeDataArmchairs = () => ({
  type: 'DATA_ARMCHAIRS',
});

export const makeFavoriteThing = (imgSrc) => ({
  type: 'MAKE_FAVORITE_THING',
  imgSrc,
});

export const nonSubmitedNewText = (text) => ({
  type: 'NON_SUBMITED_NEW_TEXT',
  text,
});
