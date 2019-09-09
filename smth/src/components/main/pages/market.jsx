import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import solidStar from './solidStarImport';

import './profileCss.css';

const Market = ({
  store, dispatch, makeFavoriteThing, takeDataArmchairs,
}) => {
  const [dataMyProfile, setDataMyProfile] = useState(useSelector((state) => state.dataMyProfile));

  function onClickOnIcon(img) {
    dispatch(makeFavoriteThing(img));
    const newData = store.getState();
    setDataMyProfile(newData.dataMyProfile);
  }

  return (
    <div className="profile-container">
      <ul className="list">
        {dataMyProfile.map(({
          img, nameOfThing, price, favorite,
        }) => (
          <li className="list-element" key={img + price}>
            <img src={img} width="250" height="250" className="list-element__image" alt="armchair" />
            <div className="list-element__container-info">
              <div>
                <p className="list-element__name">{nameOfThing}</p>
                <p className="list-element__price">{price}</p>
              </div>
              <FontAwesomeIcon
                onClick={() => onClickOnIcon(img)}
                icon={favorite ? solidStar : faStar}
                className="list-element__star"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Market;

Market.propTypes = {
  store: propTypes.object,
  dispatch: propTypes.func,
  makeFavoriteThing: propTypes.func,
  takeDataArmchairs: propTypes.func,
};

Market.defaultProps = {
  store: {},
  dispatch: () => {},
  makeFavoriteThing: () => {},
  takeDataArmchairs: () => {},
};
