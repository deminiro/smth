/* eslint-disable no-param-reassign */
const data = [
  {
    img: 'https://ikeacity.by/UserFiles/products/images2/normal/903/832/21/legkoe-kreslo-ikea-ikea-ps-2012-0.jpg',
    nameOfThing: 'Лёгкое кресло',
    price: '224.7p',
    favorite: false,
  },
  {
    img: 'https://ikeacity.by/UserFiles/products/images2/normal/303/777/46/kreslo-ikea-gessberg-0.jpg',
    nameOfThing: 'ГЕССБЕРГ Кресло',
    price: '974.7p',
    favorite: false,
  },
  {
    img: 'https://ikeacity.by/UserFiles/products/images2/normal/203/531/90/kreslo-ikea-fikshult-0.jpg',
    nameOfThing: 'ФИКСХУЛЬТ Кресло',
    price: '529p',
    favorite: false,
  },
  {
    img: 'https://ikeacity.by/UserFiles/products/images2/normal/192/271/69/legkoe-kreslo-ikea-leyf-arne-0.jpg',
    nameOfThing: 'ЛЕЙФ-АРНЕ - лёгкое кресло',
    price: '155.6p',
    favorite: true,
  },
  {
    img: 'https://ikeacity.by/UserFiles/products/images2/normal/592/271/72/legkoe-kreslo-ikea-sven-bertil-0.jpg',
    nameOfThing: 'СВЕН-БЕРТИЛЬ - Легкое кресло',
    price: '195.4p',
    favorite: true,
  },
];

function makeFavoriteThing(imgSrc) {
  data.forEach((el) => {
    if (el.img === imgSrc) el.favorite = !el.favorite;
  });
  return data;
}

function returnFavoriteThings(dataObj) {
  return dataObj.filter((el) => el.favorite === true);
}

const dataMyProfile = (state = [], action) => {
  switch (action.type) {
    case 'DATA_ARMCHAIRS':
      return data;
    case 'MAKE_FAVORITE_THING':
      return makeFavoriteThing(action.imgSrc);
    case 'FAVORITE_THINGS':
      return returnFavoriteThings(data);
    default:
      return state;
  }
};

export default dataMyProfile;
