import React from 'react';
import { withCookies } from 'react-cookie';
import jwt from 'jsonwebtoken';
import { SECRET } from '../../config';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Auth from '../../pages/Auth/Auth';
import Home from '../../pages/Home/Home';
import Profile from '../../pages/Profile/Profile';
import Tasks from '../../pages/Tasks/Tasks';

import { getUserAction, logoutAction } from '../../actions/userActions';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import './Layout.sass';

class Layout extends React.Component {
  state = {
    isAuth: null
  };

  componentWillReceiveProps(nextProps) {
    const { user } = nextProps;
    const { cookies } = this.props;

    if (user === null && cookies.get('token')) {
      cookies.remove('token');
    }

    if (user && user.token && cookies.get('token') !== user.token) {
      cookies.set('token', user.token);
    }

    this.setState({
      isAuth: user ? true : false
    });
  }

  componentDidMount() {
    const { cookies, getUser } = this.props;
    const token = cookies.get('token');
    let decode, isTokenValid, email;

    try {
      if (token !== undefined) {
        decode = jwt.verify(token, SECRET);
        email = decode.email;
        isTokenValid = true;
      } else {
        isTokenValid = false;
      }
    } catch (err) {
      isTokenValid = false;
      console.log(err);
      if (err.name === 'TokenExpiredError') {
        cookies.remove('token');
      }
    }

    if (isTokenValid) {
      getUser(email)
        .then(user => {
          if (user.email) {
            this.setState({
              isAuth: true
            });
          } else {
            console.log('No connection to db');
            this.setState({
              isAuth: false
            });
          }
        })
        .catch(err => {
          console.log(err);
          this.setState({
            isAuth: false
          });
        });
    }
  }

  logoutHandler = user => {
    const { logout } = this.props;

    logout(user);
  };

  render() {
    const { isAuth } = this.state;
    const { user } = this.props;
    const photo = user !== null ? user.photo : null;

    return (
      <div className="layout">
        <Header
          photo={photo}
          logout={() => this.logoutHandler(user)}
          isAuth={isAuth}
        />
        <main className="main">
          <Route
            render={({ location }) => (
              <TransitionGroup component={null}>
                <CSSTransition
                  classNames="page-anim"
                  timeout={450}
                  key={location.pathname}
                >
                  <Switch location={location}>
                    <PrivateRoute
                      isAuth={isAuth}
                      canVisitAsLoginned={false}
                      to="/profile"
                      path="/auth"
                      exact
                      component={Auth}
                    />
                    <PrivateRoute
                      isAuth={isAuth}
                      canVisitAsLoginned={true}
                      to="/auth"
                      path="/profile"
                      exact
                      user={user}
                      component={Profile}
                    />
                    <PrivateRoute
                      isAuth={isAuth}
                      canVisitAsLoginned={true}
                      to="/auth"
                      path="/tasks"
                      exact
                      user={user}
                      component={Tasks}
                    />
                    <Route path="/" render={() => <Home isAuth={isAuth} />} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: email => dispatch(getUserAction(email)),
    logout: user => {
      dispatch(logoutAction(user));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withCookies(Layout));
