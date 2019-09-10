import React, { useState } from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Purchases = ({ store, dispatch, changeAmountOfBuys }) => {
  const [dataPurchases, setDataPurchases] = useState(useSelector((state) => state.dataMyProfile));

  return (
    <ul>
      {dataPurchases.map(({
        nameOfThing, price, amountForBuy, img,
      }) => {
        const priceByUnit = price * amountForBuy;
        return (
          <li key={img + price}>
            <p>{nameOfThing}</p>
            <p>{`amount: ${amountForBuy}`}</p>
            <p>
              <span>-</span>
              {`price: ${priceByUnit.toFixed(2)}p`}
              <span>+</span>
            </p>
            <FontAwesomeIcon
              icon={faTimes}
              className="list-element__star"
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Purchases;

Purchases.propTypes = {
  store: propTypes.shape({
    getState: propTypes.func,
  }),
  dispatch: propTypes.func,
  changeAmountOfBuys: propTypes.func,
};

Purchases.defaultProps = {
  store: propTypes.shape({
    getState: () => {},
  }),
  dispatch: () => {},
  changeAmountOfBuys: () => {},
};
