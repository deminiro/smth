import React from 'react';
import propTypes from 'prop-types';

import './profileCss.css';
import takeData from '../../../redux/actions';

const Profile = ({ store, dispatch }) => {
  dispatch(takeData());
  const { dataMyProfile } = store.getState();
  const {
    img, nameOfProfile, city, dateOfBirth, posts,
  } = dataMyProfile;
  return (
    <div className="profile-container">
      <div className="profile-info-container">
        <img
          src={img}
          alt="profile"
          width="200"
          height="300"
        />
        <div>
          <p className="page-info__name">{nameOfProfile}</p>
          <p className="page-info__city">
            City:
            <span>{city}</span>
          </p>
          <p className="page-info__birth">
            Date of birth:
            <span>{dateOfBirth}</span>
          </p>
        </div>
      </div>
      <div className="page-info-news__posts">
        <div className="page-info-news__new-post">
          <textarea className="page-info-news__textarea" placeholder="Write new post?" />
          <button className="page-info-news__button" type="button">Post</button>
        </div>
        <ul className="page-info-news__list">
          {posts.reverse().map((el) => (
            <li key={el.id} className="page-info-news-list__element">
              <p className="page-info-news__name">{nameOfProfile}</p>
              <p className="page-info-news__text">{el.message}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  store: propTypes.object,
  dispatch: propTypes.func,
};

Profile.defaultProps = {
  store: {},
  dispatch: () => {},
};
