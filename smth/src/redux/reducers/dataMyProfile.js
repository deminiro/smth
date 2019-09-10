/* eslint-disable no-param-reassign */
const data = [
  {
    img: 'https://ikeacity.by/UserFiles/products/images2/normal/903/832/21/legkoe-kreslo-ikea-ikea-ps-2012-0.jpg',
    nameOfThing: 'Лёгкое кресло',
    price: '224.70p',
    favorite: false,
  },
  {
    img: 'https://ikeacity.by/UserFiles/products/images2/normal/303/777/46/kreslo-ikea-gessberg-0.jpg',
    nameOfThing: 'ГЕССБЕРГ Кресло',
    price: '974.70p',
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
    price: '155.60p',
    favorite: false,
  },
  {
    img: 'https://ikeacity.by/UserFiles/products/images2/normal/592/271/72/legkoe-kreslo-ikea-sven-bertil-0.jpg',
    nameOfThing: 'СВЕН-БЕРТИЛЬ - Легкое кресло',
    price: '195.40p',
    favorite: false,
  },
  {
    img: 'https://ikeacity.by/UserFiles/products/images2/normal/403/801/02/kreslo-detskoe-ikea-poeng-0.jpg',
    nameOfThing: 'ПОЭНГ - Кресло детское',
    price: '133.30p',
    favorite: false,
  },
  {
    img: 'https://ikeacity.by/UserFiles/products/images2/normal/492/488/82/kreslo-ikea-landskruna-0.jpg',
    nameOfThing: 'ЛАНДСКРУНА - Кресло',
    price: '1403.50p',
    favorite: false,
  },
  {
    img: 'https://ikeacity.by/UserFiles/products/images2/normal/503/801/06/kreslo-detskoe-ikea-poeng-0.jpg',
    nameOfThing: 'ПОЭНГ - Кресло детское',
    price: '133.30p',
    favorite: false,
  },
  {
    img: 'https://ikeacity.by/UserFiles/products/images2/normal/703/308/70/kreslo-ikea-fikshult-0.jpg',
    nameOfThing: 'ФИКСХУЛЬТ - Кресло',
    price: '529p',
    favorite: false,
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
