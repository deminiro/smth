import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import solidStar from './solidStarImport';

import FavoriteIcon from './componentsForPages/favoriteIcon';
import './profileCss.css';

const Market = ({
  store, dispatch, makeFavoriteThing, changeAmountOfBuys,
}) => {
  const [dataMyProfile, setDataMyProfile] = useState(useSelector((state) => state.dataMyProfile));
  const [thing, setThing] = useState({ src: '', favorite: null });
  const [valueOfBuys, setValueOfBuys] = useState({ imgSrc: '', symbol: '', value: 0 });

  function onClickOnIcon(img = '', favorite) {
    dispatch(makeFavoriteThing(img));
    setThing({ src: img, favorite });
  }

  useEffect(() => {
    const newData = store.getState();
    setDataMyProfile(newData.dataMyProfile);
  }, [thing.src, thing.favorite]);

  function changeValueOfBuys(imgSrc, symbol, value) {
    dispatch(changeAmountOfBuys(imgSrc, symbol));
    setValueOfBuys({ imgSrc, symbol, value });
  }

  useEffect(() => {
    const newData = store.getState();
    setDataMyProfile(newData.dataMyProfile);
  }, [valueOfBuys.imgSrc, valueOfBuys.symbol, valueOfBuys.value]);

  return (
    <div className="profile-container">
      <ul className="list">
        {dataMyProfile.map(({
          img, nameOfThing, price, favorite, amountForBuy,
        }) => (
          <li className="list-element" key={img + price}>
            <img src={img} width="250" height="250" className="list-element__image" alt="armchair" />
            <div className="list-element__container-info">
              <div>
                <p className="list-element__name">{nameOfThing}</p>
                <p className="list-element__price">{`${price}p`}</p>
              </div>
              <div>
                <FontAwesomeIcon
                  onClick={() => onClickOnIcon(img, favorite)}
                  icon={favorite ? solidStar : faStar}
                  className="list-element__star"
                />
                <div className="list-element__amount-of-buy-container">
                  <button
                    type="button"
                    className="list-element-amount-of-buy__button"
                    onClick={() => changeValueOfBuys(img, '-', amountForBuy)}
                  >
                    -
                  </button>
                  <p className="list-element-amount-of-buy__number">{amountForBuy}</p>
                  <button
                    type="button"
                    className="list-element-amount-of-buy__button"
                    onClick={() => changeValueOfBuys(img, '+', amountForBuy)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Market;

Market.propTypes = {
  store: propTypes.shape({
    getState: propTypes.func,
  }),
  dispatch: propTypes.func,
  makeFavoriteThing: propTypes.func,
  changeAmountOfBuys: propTypes.func,
};

Market.defaultProps = {
  store: propTypes.shape({
    getState: () => {},
  }),
  dispatch: () => {},
  makeFavoriteThing: () => {},
  changeAmountOfBuys: () => {},
};
