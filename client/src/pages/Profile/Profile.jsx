import React from 'react';
import { Link } from 'react-router-dom';

import Photo from '../../components/Photo/Photo';
import './Profile.sass';

const Profile = ({ user }) => {
  const length = user.tasks ? user.tasks.length : 0;

  return (
    <section className="profile">
      <div className="container">
        <div className="profile__content">
          <Photo isProfilePhoto photo={user.photo} />
          <p className="profile__name">{user.name}</p>
          <p className="profile__email">{user.email}</p>
          <div className="profile__tasks">
            <p className="profile__tasks-count">
              Total tasks: <span>{length}</span>
            </p>
            <p className="profile__tasks-link">
              Go to <Link to="/tasks">Your tasks</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
