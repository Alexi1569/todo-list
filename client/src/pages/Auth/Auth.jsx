import React from 'react';
import jwt from 'jsonwebtoken';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import { validateResponse, handleInputChange } from '../../helpers';
import { createUserAction, loginAction } from '../../actions/userActions';
import Form from '../../components/Form/Form';
import Spinner from '../../components/Spinner/Spinner';
import { SECRET } from '../../config';
import './Auth.sass';

class Auth extends React.Component {
  state = {
    showLoginForm: true,
    loginForm: {
      name: 'loginForm',
      caption: 'Login form',
      inputs: {
        email: {
          settings: {
            type: 'email',
            id: 'login-email',
            placeholder: 'Your email',
            value: '',
            name: 'email'
          },
          el: 'input',
          label: 'Email'
        },
        password: {
          settings: {
            type: 'password',
            id: 'login-password',
            placeholder: 'Your password',
            value: '',
            name: 'password'
          },
          el: 'input',
          label: 'Password'
        }
      },
      toggler: {
        message: 'Still not registered? Register now',
        target: 'register'
      },
      button: {
        el: 'button',
        text: 'Login',
        isAccent: true,
        isFormButton: true
      }
    },
    registerForm: {
      name: 'registerForm',
      caption: 'Register form',
      inputs: {
        name: {
          settings: {
            type: 'text',
            id: 'register-name',
            placeholder: 'Your Name',
            value: '',
            name: 'name'
          },
          el: 'input',
          label: 'Name'
        },
        photo: {
          settings: {
            type: 'file',
            id: 'register-photo',
            value: '',
            name: 'photo',
            accept: 'image/png, image/jpeg, image/jpg'
          },
          el: 'input',
          label: 'Photo',
          file: null
        },
        email: {
          settings: {
            type: 'email',
            id: 'register-email',
            placeholder: 'Your email',
            value: '',
            name: 'email'
          },
          el: 'input',
          label: 'Email'
        },
        password: {
          settings: {
            type: 'password',
            id: 'register-password',
            placeholder: 'Your password',
            value: '',
            name: 'password'
          },
          el: 'input',
          label: 'Password'
        },
        repeatPassword: {
          settings: {
            type: 'password',
            id: 'register-repeat-password',
            placeholder: 'Repeat password',
            value: '',
            name: 'repeatPassword'
          },
          el: 'input',
          label: 'Repeat password'
        }
      },
      toggler: {
        message: 'Already registered? Login now',
        target: 'login'
      },
      button: {
        el: 'button',
        text: 'Register',
        isAccent: true,
        isFormButton: true
      }
    }
  };

  submit = (e, name) => {
    e.preventDefault();

    const currentFormData = { ...this.state[name] };
    const { inputs } = currentFormData;
    const formData = new FormData(document.forms[0]);

    for (let input in inputs) {
      inputs[input].error = null;
    }

    if (this.state.showLoginForm) {
      this.props
        .login(formData)
        .then(data => {
          if (data.data.errors) {
            validateResponse(data, inputs);
            this.setState({
              [name]: currentFormData
            });
          } else {
            this.props.history.push('/profile');
          }
        })
        .catch(err => console.log(err));
    } else {
      const token = jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60,
          email: inputs.email.settings.value
        },
        SECRET
      );

      formData.append('token', token);
      formData.set('photo', inputs['photo'].file);

      this.props
        .createUser(formData)
        .then(res => {
          if (res.data.errors) {
            validateResponse(res, inputs);

            this.setState({
              [name]: currentFormData
            });
          } else {
            this.props.history.push('/profile');
          }
        })
        .catch(err => console.log(err));
    }
  };

  show = target => {
    this.setState(() => {
      if (target === 'register') {
        return { showLoginForm: false };
      }

      return { showLoginForm: true };
    });
  };

  changeInput = (e, name, type) => {
    handleInputChange(e, name, type, this);
  };

  render() {
    const { loginForm, registerForm, showLoginForm } = this.state;
    const { isAuthLoading } = this.props;

    return (
      <section className="auth">
        <div className="container">
          <CSSTransition
            in={showLoginForm}
            timeout={450}
            unmountOnExit
            classNames="auth-form"
          >
            <Form
              isMultiPartFormData={true}
              toggleForm={this.show}
              submit={this.submit}
              handleInputChange={this.changeInput}
              form={loginForm}
            />
          </CSSTransition>
          <CSSTransition
            in={!showLoginForm}
            timeout={450}
            unmountOnExit
            classNames="auth-form"
          >
            <Form
              isMultiPartFormData={true}
              toggleForm={this.show}
              submit={this.submit}
              handleInputChange={this.changeInput}
              form={registerForm}
            />
          </CSSTransition>
          {isAuthLoading && <Spinner />}
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    isAuthLoading: state.global.isAuthLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createUser: userData => dispatch(createUserAction(userData)),
    login: loginData => dispatch(loginAction(loginData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Auth));
