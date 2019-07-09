import React from 'react';
import { Link } from 'react-router-dom';

import './Home.sass';

const Home = ({ isAuth }) => {
  return (
    <section className="home">
      <div className="container">
        <div className="home__text">
          <p className="home__text-title">Todo List</p>
          {isAuth ? (
            <p className="home__text-description">
              Go to <Link to="/tasks">your tasks</Link> to begin
            </p>
          ) : (
            <p className="home__text-description">
              Please, <Link to="/auth">login</Link> to begin
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
