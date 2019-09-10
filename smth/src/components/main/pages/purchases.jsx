import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Purchases = ({
  store, dispatch, changeAmountOfBuys, returnPurchaseItems, deleteBuys,
}) => {
  const [dataPurchases, setDataPurchases] = useState(useSelector((state) => state.dataMyProfile));
  const [valueOfBuys, setValueOfBuys] = useState({ imgSrc: '', symbol: '', value: 0 });
  const [imgSrcForDelete, setImgSrcForDelete] = useState('');

  function changeValueOfBuys(imgSrc, symbol, value) {
    dispatch(changeAmountOfBuys(imgSrc, symbol));
    dispatch(returnPurchaseItems(imgSrc));
    setValueOfBuys({ imgSrc, symbol, value });
  }

  useEffect(() => {
    const newData = store.getState();
    setDataPurchases(newData.dataMyProfile);
  }, [valueOfBuys.imgSrc, valueOfBuys.symbol, valueOfBuys.value]);

  function onDeleteBuys(imgSrc) {
    dispatch(deleteBuys(imgSrc));
    setImgSrcForDelete(imgSrc);
  }

  useEffect(() => {
    const newData = store.getState();
    setDataPurchases(newData.dataMyProfile);
  }, [imgSrcForDelete]);

  return (
    <div>
      <ul>
        {dataPurchases.dataObj.map(({
          nameOfThing, price, amountForBuy, img,
        }) => {
          const priceByUnit = price * amountForBuy;
          return (
            <li key={img + price}>
              <p>{nameOfThing}</p>
              <p>amount:</p>
              <button type="button" onClick={() => changeValueOfBuys(img, '-', amountForBuy)}>-</button>
              <p>{amountForBuy}</p>
              <button type="button" onClick={() => changeValueOfBuys(img, '+', amountForBuy)}>+</button>
              <p>{`price: ${priceByUnit.toFixed(2)}p`}</p>
              <FontAwesomeIcon
                icon={faTimes}
                className="list-element__star"
                onClick={() => onDeleteBuys(img)}
              />
            </li>
          );
        })}
      </ul>
      <p>{`Result: ${dataPurchases.sumOfThings}`}</p>
    </div>
  );
};

export default Purchases;

Purchases.propTypes = {
  store: propTypes.shape({
    getState: propTypes.func,
  }),
  dispatch: propTypes.func,
  changeAmountOfBuys: propTypes.func,
  returnPurchaseItems: propTypes.func,
  deleteBuys: propTypes.func,
};

Purchases.defaultProps = {
  store: propTypes.shape({
    getState: () => {},
  }),
  dispatch: () => {},
  changeAmountOfBuys: () => {},
  returnPurchaseItems: () => {},
  deleteBuys: () => {},
};
