import React from 'react';

import './profileCss.css';

const Profile = () => (
  <div className="profile-container">
    <div className="profile-info-container">
      <img 
        src="https://upload.wikimedia.org/wikipedia/ru/thumb/a/a7/Red_Donatello.jpg/250px-Red_Donatello.jpg" 
        alt="profile-image" width="200" height="300" />
      <div>
        <p className="page-info__name">Donatello Sun</p>
        <p className="page-info__city">City:<span>New York</span></p>
        <p className="page-info__birth">Date of birth:<span>1987</span></p>
      </div>
    </div>
    <div className="page-info-news__posts">
      <div className="page-info-news__new-post">
        <textarea className="page-info-news__textarea" placeholder="Write new post?" />
        <button className="page-info-news__button" type="button">Post</button>
      </div>
      <ul className="page-info-news__list">
        <li className="page-info-news-list__element">
          <p className="page-info-news__name">Donatello Sun</p>
          <p className="page-info-news__text">New mech is comming!</p>
        </li>
        <li className="page-info-news-list__element">
          <p className="page-info-news__name">Donatello Sun</p>
          <p className="page-info-news__text">My page is work!</p>
        </li>
        <li className="page-info-news-list__element">
          <p className="page-info-news__name">Donatello Sun</p>
          <p className="page-info-news__text">Wow!</p>
        </li>
      </ul>
    </div>
  </div>
);

export default Profile;
