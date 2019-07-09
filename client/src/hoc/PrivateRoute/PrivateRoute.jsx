import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Comp, ...rest }) => {
  let output = null;

  switch (rest.canVisitAsLoginned) {
    case null: {
      output = <Route {...rest} render={() => <Comp {...rest} />} />;
      break;
    }
    case true: {
      output = rest.isAuth ? (
        <Route {...rest} render={() => <Comp {...rest} />} />
      ) : (
        <Redirect to={rest.to} />
      );
      break;
    }
    case false: {
      output = rest.isAuth ? (
        <Redirect to={rest.to} />
      ) : (
        <Route {...rest} render={() => <Comp {...rest} />} />
      );
      break;
    }
    default: {
      output = <p>Wrong route passed</p>;
    }
  }

  return output;
};

export default PrivateRoute;
