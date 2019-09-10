/* eslint-disable no-param-reassign */
const data = [
  {
    img: 'https://ikeacity.by/UserFiles/products/images2/normal/903/832/21/legkoe-kreslo-ikea-ikea-ps-2012-0.jpg',
    nameOfThing: 'ПС Лёгкое - кресло',
    price: 224.70,
    favorite: false,
    amountForBuy: 0,
  },
  {
    img: 'https://ikeacity.by/UserFiles/products/images2/normal/303/777/46/kreslo-ikea-gessberg-0.jpg',
    nameOfThing: 'ГЕССБЕРГ - Кресло',
    price: 974.70,
    favorite: false,
    amountForBuy: 0,
  },
  {
    img: 'https://ikeacity.by/UserFiles/products/images2/normal/203/531/90/kreslo-ikea-fikshult-0.jpg',
    nameOfThing: 'ФИКСХУЛЬТ - Кресло',
    price: 529,
    favorite: false,
    amountForBuy: 0,
  },
  {
    img: 'https://ikeacity.by/UserFiles/products/images2/normal/192/271/69/legkoe-kreslo-ikea-leyf-arne-0.jpg',
    nameOfThing: 'ЛЕЙФ-АРНЕ - Лёгкое кресло',
    price: 155.60,
    favorite: false,
    amountForBuy: 0,
  },
  {
    img: 'https://ikeacity.by/UserFiles/products/images2/normal/592/271/72/legkoe-kreslo-ikea-sven-bertil-0.jpg',
    nameOfThing: 'СВЕН-БЕРТИЛЬ - Лёгкое кресло',
    price: 195.40,
    favorite: false,
    amountForBuy: 1,
  },
  {
    img: 'https://ikeacity.by/UserFiles/products/images2/normal/403/801/02/kreslo-detskoe-ikea-poeng-0.jpg',
    nameOfThing: 'ПОЭНГ - Кресло детское',
    price: 133.30,
    favorite: false,
    amountForBuy: 3,
  },
  {
    img: 'https://ikeacity.by/UserFiles/products/images2/normal/492/488/82/kreslo-ikea-landskruna-0.jpg',
    nameOfThing: 'ЛАНДСКРУНА - Кресло',
    price: 1403.50,
    favorite: false,
    amountForBuy: 2,
  },
  {
    img: 'https://ikeacity.by/UserFiles/products/images2/normal/503/801/06/kreslo-detskoe-ikea-poeng-0.jpg',
    nameOfThing: 'ПОЭНГ - Кресло детское',
    price: 133.30,
    favorite: false,
    amountForBuy: 4,
  },
  {
    img: 'https://ikeacity.by/UserFiles/products/images2/normal/703/308/70/kreslo-ikea-fikshult-0.jpg',
    nameOfThing: 'ФИКСХУЛЬТ - Кресло',
    price: 529,
    favorite: false,
    amountForBuy: 0,
  },
];

function makeFavoriteThing(imgSrc, dataObj) {
  dataObj.forEach((el) => {
    if (el.img === imgSrc) el.favorite = !el.favorite;
  });
  return dataObj;
}

function returnFavoriteThings(dataObj) {
  return dataObj.filter((el) => el.favorite === true);
}

function changeAmountOfBuys(imgSrc, symbol, dataObj) {
  dataObj.forEach((el) => {
    if (el.img === imgSrc) {
      if (symbol === '-' && el.amountForBuy > 0) {
        el.amountForBuy -= 1;
      } else if (symbol === '+' && el.amountForBuy < 10) {
        el.amountForBuy += 1;
      }
    }
  });
  return dataObj;
}

function returnPurchaseItems(dataObj) {
  return dataObj.filter((el) => el.amountForBuy > 0);
}

const dataMyProfile = (state = [], action) => {
  switch (action.type) {
    case 'DATA_ARMCHAIRS':
      return data;
    case 'MAKE_FAVORITE_THING':
      return makeFavoriteThing(action.imgSrc, data);
    case 'FAVORITE_THINGS':
      return returnFavoriteThings(data);
    case 'CHANGE_AMOUNT_OF_BUYS':
      return changeAmountOfBuys(action.imgSrc, action.symbol, data);
    case 'RETURN_PURCHASE_ITEMS':
      return returnPurchaseItems(data);
    default:
      return state;
  }
};

export default dataMyProfile;
