(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    14: function(e, t, a) {
      e.exports = {
        SECRET: 'SOME_SECRET_STRING',
        SALT_ROUNDS: 10,
        SERVER_URL: 'https://alex-todolist.herokuapp.com'
      };
    },
    156: function(e, t, a) {
      e.exports = a(321);
    },
    161: function(e, t, a) {},
    169: function(e, t) {},
    171: function(e, t) {},
    209: function(e, t) {},
    210: function(e, t) {},
    270: function(e, t, a) {},
    272: function(e, t, a) {},
    273: function(e, t, a) {},
    274: function(e, t, a) {},
    290: function(e, t, a) {},
    291: function(e, t, a) {},
    308: function(e, t, a) {},
    309: function(e, t, a) {},
    310: function(e, t, a) {},
    311: function(e, t, a) {},
    314: function(e, t, a) {},
    315: function(e, t, a) {},
    316: function(e, t, a) {},
    317: function(e, t, a) {},
    318: function(e, t, a) {},
    319: function(e, t, a) {},
    320: function(e, t, a) {},
    321: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a(0),
        o = a.n(n),
        r = a(41),
        s = a.n(r),
        l = (a(161), a(8)),
        i = a(31),
        c = a(66),
        u = a(28),
        m = a(29),
        d = a(33),
        p = a(30),
        g = a(32),
        h = a(63),
        E = a.n(h),
        f = a(14),
        k = a(35),
        v = a(322),
        b = a(323),
        _ = a(154),
        T = a(5),
        N = a.n(T),
        y = (a(270),
        function(e) {
          var t = e.footer,
            a = e.header,
            n = e.dark,
            r = N()('logo', {
              'logo--dark': n,
              'footer--logo': t,
              'header--logo': a
            });
          return o.a.createElement(
            l.b,
            { className: r, to: '/' },
            o.a.createElement('span', null, 'Todo'),
            ' List'
          );
        }),
        w = (a(272),
        function(e) {
          var t = e.isHeaderToggler,
            a = e.isMenuOpen,
            n = e.clickHandler,
            r = N()('toggler', { 'toggler--header': t, 'toggler--open': a });
          return o.a.createElement(
            'button',
            { onClick: n, className: r },
            o.a.createElement('span', { className: 'toggler__line' }),
            o.a.createElement('span', { className: 'toggler__line' }),
            o.a.createElement('span', { className: 'toggler__line' })
          );
        }),
        O = (a(273),
        function(e) {
          var t = e.isMenuOpen,
            a = e.clickHandler,
            n = e.isAuth,
            r = e.logout,
            s = N()('header__nav', { active: t });
          return o.a.createElement(
            'nav',
            { onClick: a, className: s },
            o.a.createElement(
              'ul',
              null,
              !n &&
                o.a.createElement(
                  'li',
                  null,
                  o.a.createElement(l.c, { to: '/auth' }, 'Login | Register')
                ),
              n &&
                o.a.createElement(
                  o.a.Fragment,
                  null,
                  o.a.createElement(
                    'li',
                    null,
                    o.a.createElement(l.c, { to: '/profile' }, 'Profile')
                  ),
                  o.a.createElement(
                    'li',
                    null,
                    o.a.createElement(l.c, { to: '/tasks' }, 'My Tasks')
                  ),
                  o.a.createElement(
                    'li',
                    null,
                    o.a.createElement('p', { onClick: r }, 'Logout')
                  )
                )
            )
          );
        }),
        S = (a(274),
        function(e) {
          var t = e.isAuth,
            a = e.logout,
            r = Object(n.useState)(!1),
            s = Object(_.a)(r, 2),
            l = s[0],
            i = s[1];
          return o.a.createElement(
            'header',
            { className: 'header' },
            o.a.createElement(
              'div',
              { className: 'container' },
              o.a.createElement(
                'div',
                { className: 'header__line' },
                o.a.createElement(y, { header: !0 }),
                o.a.createElement(w, {
                  clickHandler: function() {
                    return i(!l);
                  },
                  isMenuOpen: l,
                  isHeaderToggler: !0
                }),
                o.a.createElement(O, {
                  clickHandler: function() {
                    return i(!1);
                  },
                  isMenuOpen: l,
                  logout: a,
                  isAuth: t
                })
              )
            )
          );
        }),
        L = a(64),
        A = a.n(L),
        M = function(e) {
          var t = e.social;
          return o.a.createElement(
            'li',
            null,
            o.a.createElement(
              'a',
              { rel: 'noopener noreferrer', target: '_blank', href: t.link },
              o.a.createElement('i', null, A()(t.icon))
            )
          );
        },
        R = (a(290),
        function(e) {
          var t = e.socials,
            a = e.footer,
            n = N()('socials', { 'footer--socials': a }),
            r = t.map(function(e, t) {
              return o.a.createElement(M, { key: t, social: e });
            });
          return o.a.createElement('ul', { className: n }, r);
        }),
        j = (a(291),
        (function(e) {
          function t() {
            var e, a;
            Object(u.a)(this, t);
            for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++)
              o[r] = arguments[r];
            return (
              ((a = Object(d.a)(
                this,
                (e = Object(p.a)(t)).call.apply(e, [this].concat(o))
              )).state = {
                socials: [
                  {
                    link: 'https://github.com/Alexi1569',
                    icon:
                      '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-140.609375 0-256 115.390625-256 256 0 119.988281 84.195312 228.984375 196 256v-84.695312c-11.078125 2.425781-21.273438 2.496093-32.550781-.828126-15.128907-4.464843-27.421875-14.542968-36.546875-29.910156-5.816406-9.8125-16.125-20.453125-26.878906-19.671875l-2.636719-29.882812c23.253906-1.992188 43.371093 14.167969 55.3125 34.230469 5.304687 8.921874 11.410156 14.152343 19.246093 16.464843 7.574219 2.230469 15.707032 1.160157 25.183594-2.1875 2.378906-18.972656 11.070313-26.074219 17.636719-36.074219v-.015624c-66.679687-9.945313-93.253906-45.320313-103.800781-73.242188-13.976563-37.074219-6.476563-83.390625 18.238281-112.660156.480469-.570313 1.347656-2.0625 1.011719-3.105469-11.332032-34.230469 2.476562-62.546875 2.984375-65.550781 13.078125 3.867187 15.203125-3.890625 56.808593 21.386718l7.191407 4.320313c3.007812 1.792969 2.0625.769531 5.070312.542969 17.371094-4.71875 35.683594-7.324219 53.726563-7.558594 18.179687.234375 36.375 2.839844 54.464844 7.75l2.328124.234375c-.203124-.03125.632813-.148437 2.035157-.984375 51.972656-31.480469 50.105469-21.191406 64.042969-25.722656.503906 3.007812 14.128906 31.785156 2.917968 65.582031-1.511718 4.65625 45.058594 47.300781 19.246094 115.753906-10.546875 27.933594-37.117188 63.308594-103.796875 73.253907v.015624c8.546875 13.027344 18.816406 19.957032 18.761719 46.832032v105.722656c111.808594-27.015625 196-136.011719 196-256 .003906-140.609375-115.386719-256-255.996094-256zm0 0"/></svg>'
                  },
                  {
                    link: 'https://www.linkedin.com/in/alexi1569',
                    icon:
                      '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 0C114.637 0 0 114.637 0 256s114.637 256 256 256 256-114.637 256-256S397.363 0 256 0zm-74.39 387h-62.348V199.426h62.347zm-31.173-213.188h-.406c-20.922 0-34.453-14.402-34.453-32.402 0-18.406 13.945-32.41 35.274-32.41 21.328 0 34.453 14.004 34.859 32.41 0 18-13.531 32.403-35.274 32.403zM406.423 387h-62.34V286.652c0-25.218-9.027-42.418-31.586-42.418-17.223 0-27.48 11.602-31.988 22.801-1.649 4.008-2.051 9.61-2.051 15.215V387h-62.344s.817-169.977 0-187.574h62.344v26.558c8.285-12.78 23.11-30.96 56.188-30.96 41.02 0 71.777 26.808 71.777 84.421zm0 0"/></svg>'
                  },
                  {
                    link: 'mailto: farikprof@gmail.com',
                    icon:
                      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 299.997 299.997"><path d="M149.996 0C67.157 0 .001 67.158.001 149.997c0 82.837 67.156 150 149.995 150s150-67.163 150-150C299.996 67.158 232.835 0 149.996 0zm.003 52.686l88.763 55.35H61.236l88.763-55.35zm89.869 143.737h-.009c0 8.878-7.195 16.072-16.072 16.072H76.211c-8.878 0-16.072-7.195-16.072-16.072v-84.865c0-.939.096-1.852.252-2.749l84.808 52.883c.104.065.215.109.322.169.112.062.226.122.34.179a8.903 8.903 0 0 0 1.847.721c.065.018.13.026.195.041a9.148 9.148 0 0 0 2.093.265h.015c.7 0 1.401-.099 2.093-.265.065-.016.13-.023.195-.041a8.99 8.99 0 0 0 1.847-.721 9.19 9.19 0 0 0 .34-.179c.106-.06.218-.104.322-.169l84.808-52.883c.156.897.252 1.808.252 2.749v84.865z"/></svg>'
                  }
                ]
              }),
              a
            );
          }
          return (
            Object(g.a)(t, e),
            Object(m.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.state.socials,
                    t = e[1].link;
                  return o.a.createElement(
                    'footer',
                    { className: 'footer' },
                    o.a.createElement(
                      'div',
                      { className: 'container' },
                      o.a.createElement(
                        'div',
                        { className: 'footer__line' },
                        o.a.createElement(y, { footer: !0, dark: !0 }),
                        o.a.createElement(
                          'p',
                          { className: 'footer__copyright' },
                          'Made by',
                          ' ',
                          o.a.createElement(
                            'a',
                            {
                              rel: 'noopener noreferrer',
                              href: t,
                              target: '_blank'
                            },
                            'Alexander Hrybushenkov'
                          )
                        ),
                        o.a.createElement(R, { footer: !0, socials: e })
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(o.a.Component)),
        F = a(19),
        x = a(6),
        C = a(43),
        G = function(e, t) {
          if ((console.log(e.data.errors), e.data.errors)) {
            var a = e.data.errors;
            for (var n in a) {
              var o = a[n];
              t[n].error = o.message;
            }
          }
        },
        I = function(e, t, a, n) {
          var o = Object(x.a)({}, n.state[t]),
            r = e.target.name;
          if ('file' === a)
            e.target.files[0]
              ? (o.inputs[r].file = e.target.files[0])
              : (o.inputs[r].file = null);
          else if ('checkbox' === a) {
            var s = o.inputs[r].settings.value;
            o.inputs[r].settings.value = !s;
          } else o.inputs[r].settings.value = e.target.value;
          n.setState(Object(F.a)({}, t, o));
        },
        P = a(25),
        D = a.n(P),
        B = function(e) {
          var t = e.el,
            a = e.label,
            n = e.settings,
            r = e.error,
            s = e.handleInputChange,
            l = e.file,
            i = '',
            c = 'file' === n.type,
            u = 'textarea' === t,
            m = N()('form__group', {
              'form__group--file': c,
              'form__group--textarea': u,
              loaded: c && null !== l
            });
          switch (t) {
            case 'input':
              i = o.a.createElement(
                'div',
                { className: m },
                o.a.createElement('label', { htmlFor: n.id }, a),
                o.a.createElement(
                  'div',
                  { className: 'form__group-input' },
                  c &&
                    o.a.createElement(
                      'span',
                      null,
                      null === l ? a : 'File loaded'
                    ),
                  o.a.createElement('input', Object.assign({ onChange: s }, n))
                ),
                r &&
                  o.a.createElement(
                    'p',
                    { className: 'form__group-message' },
                    r
                  )
              );
              break;
            case 'textarea':
              i = o.a.createElement(
                'div',
                { className: m },
                o.a.createElement('label', { htmlFor: n.id }, a),
                o.a.createElement(
                  'div',
                  { className: 'form__group-input' },
                  o.a.createElement(
                    'textarea',
                    Object.assign({ onChange: s }, n)
                  )
                ),
                r &&
                  o.a.createElement(
                    'p',
                    { className: 'form__group-message' },
                    r
                  )
              );
              break;
            case 'checkbox':
              i = o.a.createElement(
                'div',
                { className: m },
                o.a.createElement(
                  'label',
                  { className: 'checkbox' },
                  o.a.createElement('input', {
                    type: n.type,
                    name: n.name,
                    id: n.id,
                    onChange: s,
                    checked: n.value,
                    value: n.value
                  }),
                  o.a.createElement('span', null, a)
                )
              );
              break;
            default:
              i = '';
          }
          return o.a.createElement(o.a.Fragment, null, i);
        },
        V = (a(308),
        function(e) {
          var t = e.button,
            a = e.clickHandler,
            n = '',
            r = N()('btn', {
              'btn--accent': t.isAccent,
              'btn--form': t.isFormButton,
              'btn--link': t.isLinkButton,
              'btn--icon': t.isIconButton,
              'btn--danger': t.isDangerButton
            });
          switch (t.el) {
            case 'button':
              n = o.a.createElement(
                'button',
                { title: t.title ? t.title : null, onClick: a, className: r },
                t.text && t.text,
                t.icon && o.a.createElement(o.a.Fragment, null, A()(t.icon))
              );
              break;
            default:
              n = '';
          }
          return n;
        }),
        H = (a(309),
        function(e) {
          var t = e.form,
            a = e.bgForm,
            n = e.submit,
            r = e.toggleForm,
            s = e.handleInputChange,
            l = e.isMultiPartFormData,
            i = [],
            c = N()('form', { 'form--bg': a }),
            u = function(e) {
              var a = t.inputs[e];
              i.push(
                o.a.createElement(
                  B,
                  Object.assign(
                    {
                      handleInputChange: function(e) {
                        return s(e, t.name, a.settings.type);
                      },
                      key: a.settings.id
                    },
                    a
                  )
                )
              );
            };
          for (var m in t.inputs) u(m);
          return o.a.createElement(
            'form',
            {
              encType: l ? 'multipart/form-data' : null,
              className: c,
              onSubmit: function(e) {
                return n(e, t.name);
              }
            },
            t.caption &&
              o.a.createElement('p', { className: 'form__caption' }, t.caption),
            i && o.a.createElement('div', { className: 'form__inputs' }, i),
            t.toggler &&
              o.a.createElement(
                'div',
                { className: 'form__toggler' },
                o.a.createElement(
                  'span',
                  {
                    onClick: function() {
                      return r(t.toggler.target);
                    }
                  },
                  t.toggler.message
                )
              ),
            t.button && o.a.createElement(V, { button: t.button })
          );
        }),
        U = (a(310),
        function() {
          return o.a.createElement(
            'div',
            { className: 'spinner' },
            o.a.createElement('div', { className: 'spinner__icon' })
          );
        }),
        z = (a(311),
        (function(e) {
          function t() {
            var e, a;
            Object(u.a)(this, t);
            for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++)
              o[r] = arguments[r];
            return (
              ((a = Object(d.a)(
                this,
                (e = Object(p.a)(t)).call.apply(e, [this].concat(o))
              )).state = {
                showLoginForm: !0,
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
                    isAccent: !0,
                    isFormButton: !0
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
                    isAccent: !0,
                    isFormButton: !0
                  }
                }
              }),
              (a.submit = function(e, t) {
                e.preventDefault();
                var n = Object(x.a)({}, a.state[t]),
                  o = n.inputs,
                  r = new FormData(document.forms[0]);
                for (var s in o) o[s].error = null;
                if (a.state.showLoginForm)
                  a.props
                    .login(r)
                    .then(function(e) {
                      e.data.errors
                        ? (G(e, o), a.setState(Object(F.a)({}, t, n)))
                        : a.props.history.push('/profile');
                    })
                    .catch(function(e) {
                      return console.log(e);
                    });
                else {
                  var l = E.a.sign(
                    {
                      exp: Math.floor(Date.now() / 1e3) + 3600,
                      email: o.email.settings.value
                    },
                    f.SECRET
                  );
                  r.append('token', l),
                    r.set('photo', o.photo.file),
                    a.props
                      .createUser(r)
                      .then(function(e) {
                        e.data.errors
                          ? (G(e, o), a.setState(Object(F.a)({}, t, n)))
                          : a.props.history.push('/profile');
                      })
                      .catch(function(e) {
                        return console.log(e);
                      });
                }
              }),
              (a.show = function(e) {
                a.setState(function() {
                  return 'register' === e
                    ? { showLoginForm: !1 }
                    : { showLoginForm: !0 };
                });
              }),
              (a.changeInput = function(e, t, n) {
                I(e, t, n, Object(C.a)(a));
              }),
              a
            );
          }
          return (
            Object(g.a)(t, e),
            Object(m.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.state,
                    t = e.loginForm,
                    a = e.registerForm,
                    n = e.showLoginForm,
                    r = this.props.isAuthLoading;
                  return o.a.createElement(
                    'section',
                    { className: 'auth' },
                    o.a.createElement(
                      'div',
                      { className: 'container' },
                      o.a.createElement(
                        b.a,
                        {
                          in: n,
                          timeout: 450,
                          unmountOnExit: !0,
                          classNames: 'auth-form'
                        },
                        o.a.createElement(H, {
                          isMultiPartFormData: !0,
                          toggleForm: this.show,
                          submit: this.submit,
                          handleInputChange: this.changeInput,
                          form: t
                        })
                      ),
                      o.a.createElement(
                        b.a,
                        {
                          in: !n,
                          timeout: 450,
                          unmountOnExit: !0,
                          classNames: 'auth-form'
                        },
                        o.a.createElement(H, {
                          isMultiPartFormData: !0,
                          toggleForm: this.show,
                          submit: this.submit,
                          handleInputChange: this.changeInput,
                          form: a
                        })
                      ),
                      r && o.a.createElement(U, null)
                    )
                  );
                }
              }
            ]),
            t
          );
        })(o.a.Component)),
        K = Object(i.b)(
          function(e) {
            return { user: e.user, isAuthLoading: e.global.isAuthLoading };
          },
          function(e) {
            return {
              createUser: function(t) {
                return e(
                  (function(e) {
                    return function(t) {
                      var a = !0,
                        n = !1,
                        o = void 0;
                      try {
                        for (
                          var r, s = e.entries()[Symbol.iterator]();
                          !(a = (r = s.next()).done);
                          a = !0
                        ) {
                          var l = r.value;
                          console.log(''.concat(l[0], ' - ').concat(l[1]));
                        }
                      } catch (i) {
                        (n = !0), (o = i);
                      } finally {
                        try {
                          a || null == s.return || s.return();
                        } finally {
                          if (n) throw o;
                        }
                      }
                      return new Promise(function(a, n) {
                        t({ type: 'TOGGLE_SPINNER', payload: !0 }),
                          D.a
                            .post(''.concat(f.SERVER_URL, '/api/user'), e, {
                              headers: { 'Content-Type': 'multipart/form-data' }
                            })
                            .then(function(e) {
                              e.data.errors
                                ? a(e)
                                : t({ type: 'CREATE_USER', payload: e.data }),
                                a(e),
                                t({ type: 'TOGGLE_SPINNER', payload: !1 });
                            })
                            .catch(function(e) {
                              console.log(e),
                                t({ type: 'TOGGLE_SPINNER', payload: !1 }),
                                n(e);
                            });
                      });
                    };
                  })(t)
                );
              },
              login: function(t) {
                return e(
                  (function(e) {
                    return function(t) {
                      return new Promise(function(a, n) {
                        t({ type: 'TOGGLE_SPINNER', payload: !0 }),
                          D.a
                            .post(''.concat(f.SERVER_URL, '/api/login'), e, {
                              headers: { 'Content-Type': 'multipart/form-data' }
                            })
                            .then(function(e) {
                              a(e),
                                e.data.errors ||
                                  t({ type: 'GET_USER', payload: e.data }),
                                t({ type: 'TOGGLE_SPINNER', payload: !1 });
                            })
                            .catch(function(e) {
                              t({ type: 'TOGGLE_SPINNER', payload: !1 }), n(e);
                            });
                      });
                    };
                  })(t)
                );
              }
            };
          }
        )(Object(k.g)(z)),
        Y = (a(314),
        function(e) {
          var t = e.isAuth;
          return o.a.createElement(
            'section',
            { className: 'home' },
            o.a.createElement(
              'div',
              { className: 'container' },
              o.a.createElement(
                'div',
                { className: 'home__text' },
                o.a.createElement(
                  'p',
                  { className: 'home__text-title' },
                  'Todo List'
                ),
                t
                  ? o.a.createElement(
                      'p',
                      { className: 'home__text-description' },
                      'Go to ',
                      o.a.createElement(l.b, { to: '/tasks' }, 'your tasks'),
                      ' to begin'
                    )
                  : o.a.createElement(
                      'p',
                      { className: 'home__text-description' },
                      'Please, ',
                      o.a.createElement(l.b, { to: '/auth' }, 'login'),
                      ' to begin'
                    )
              )
            )
          );
        }),
        W = (a(315),
        function(e) {
          var t = e.user,
            a = t.tasks ? t.tasks.length : 0;
          return o.a.createElement(
            'section',
            { className: 'profile' },
            o.a.createElement(
              'div',
              { className: 'container' },
              o.a.createElement(
                'div',
                { className: 'profile__content' },
                o.a.createElement('div', {
                  className: 'profile__photo',
                  style: { backgroundImage: 'url('.concat(t.photo, ')') }
                }),
                o.a.createElement('p', { className: 'profile__name' }, t.name),
                o.a.createElement(
                  'p',
                  { className: 'profile__email' },
                  t.email
                ),
                o.a.createElement(
                  'div',
                  { className: 'profile__tasks' },
                  o.a.createElement(
                    'p',
                    { className: 'profile__tasks-count' },
                    'Total tasks: ',
                    o.a.createElement('span', null, a)
                  ),
                  o.a.createElement(
                    'p',
                    { className: 'profile__tasks-link' },
                    'Go to ',
                    o.a.createElement(l.b, { to: '/tasks' }, 'Your tasks')
                  )
                )
              )
            )
          );
        }),
        J = (a(316),
        function(e) {
          var t = e.title,
            a = e.children,
            n = e.closeModal,
            r = e.isOpen,
            s = N()('modal', { 'modal--open': r });
          return o.a.createElement(
            b.a,
            {
              in: r,
              timeout: 350,
              unmountOnExit: !0,
              classNames: 'modal-anim'
            },
            o.a.createElement(
              'div',
              { className: s },
              o.a.createElement('div', {
                onClick: function() {
                  return n();
                },
                className: 'modal__bg'
              }),
              o.a.createElement(
                'div',
                { className: 'modal__inner' },
                o.a.createElement(
                  'i',
                  {
                    onClick: function() {
                      return n();
                    },
                    className: 'modal__close'
                  },
                  o.a.createElement(
                    'svg',
                    {
                      xmlns: 'http://www.w3.org/2000/svg',
                      viewBox: '0 0 47.971 47.971'
                    },
                    o.a.createElement('path', {
                      d:
                        'M28.228 23.986L47.092 5.122a2.998 2.998 0 0 0 0-4.242 2.998 2.998 0 0 0-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 0 0-4.242 0 2.998 2.998 0 0 0 0 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 1 0 4.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 0 0 0-4.242L28.228 23.986z'
                    })
                  )
                ),
                t &&
                  o.a.createElement(
                    'div',
                    { className: 'modal__top' },
                    o.a.createElement('p', { className: 'modal__title' }, t)
                  ),
                o.a.createElement('div', { className: 'modal__body' }, a)
              )
            )
          );
        }),
        q = (a(317),
        function(e) {
          var t = e.task,
            a = e.editButton,
            n = e.deleteButton,
            r = e.onTaskEdit,
            s = e.onTaskDelete,
            l = N()('task', { 'task--finished': t.isFinished });
          return o.a.createElement(
            'div',
            { className: l },
            o.a.createElement('p', { className: 'task__title' }, t.title),
            o.a.createElement(
              'p',
              { className: 'task__description' },
              t.description
            ),
            o.a.createElement(
              'div',
              { className: 'task__bottom' },
              o.a.createElement(
                'p',
                { className: 'task__status' },
                t.isFinished ? 'Finished' : 'In process'
              ),
              o.a.createElement(
                'div',
                { className: 'task__actions' },
                o.a.createElement(V, {
                  button: a,
                  clickHandler: function() {
                    return r(t);
                  }
                }),
                o.a.createElement(V, {
                  button: n,
                  clickHandler: function() {
                    return s(t._id);
                  }
                })
              )
            )
          );
        }),
        Q = (a(318),
        (function(e) {
          function t() {
            var e, a;
            Object(u.a)(this, t);
            for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++)
              o[r] = arguments[r];
            return (
              ((a = Object(d.a)(
                this,
                (e = Object(p.a)(t)).call.apply(e, [this].concat(o))
              )).state = {
                showCreateTaskModal: !1,
                showEditTaskModal: !1,
                createTaskForm: {
                  name: 'createTaskForm',
                  caption: 'Create task',
                  inputs: {
                    title: {
                      settings: {
                        type: 'text',
                        id: 'create-title',
                        placeholder: 'Task title',
                        value: '',
                        name: 'title'
                      },
                      el: 'input',
                      label: 'Title'
                    },
                    description: {
                      settings: {
                        id: 'create-description',
                        placeholder: 'Task description',
                        value: '',
                        name: 'description'
                      },
                      el: 'textarea',
                      label: 'Description'
                    }
                  },
                  button: {
                    el: 'button',
                    text: 'Create',
                    isAccent: !0,
                    isFormButton: !0
                  }
                },
                toggleCreateTaskButton: {
                  isLinkButton: !0,
                  el: 'button',
                  text: 'Create task'
                },
                editButton: {
                  isIconButton: !0,
                  el: 'button',
                  title: 'Edit task',
                  icon:
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129"><path d="M119.2 114.3H9.8c-2.3 0-4.1 1.9-4.1 4.1s1.9 4.1 4.1 4.1h109.5c2.3 0 4.1-1.9 4.1-4.1s-1.9-4.1-4.2-4.1zM5.7 78l-.1 19.5c0 1.1.4 2.2 1.2 3 .8.8 1.8 1.2 2.9 1.2l19.4-.1c1.1 0 2.1-.4 2.9-1.2l67-67c1.6-1.6 1.6-4.2 0-5.9L79.8 8.1c-1.6-1.6-4.2-1.6-5.9 0L60.5 21.6 6.9 75.1c-.7.8-1.2 1.8-1.2 2.9zm71.2-61.1l13.5 13.5-7.6 7.6-13.5-13.5 7.6-7.6zM14 79.8l49.4-49.4 13.5 13.5-49.4 49.3-13.6.1.1-13.5z"/></svg>'
                },
                deleteButton: {
                  isIconButton: !0,
                  isDangerButton: !0,
                  el: 'button',
                  title: 'Delete task',
                  icon:
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489.6 489.6"><path d="M456.5 75.6h-103V51.5C353.5 23.1 330.4 0 302 0H187.6c-28.4 0-51.5 23.1-51.5 51.5v24.1h-103c-9.9 0-18 8.1-18 18s8.1 18 18 18h27.4v315.2c0 34.6 28.1 62.8 62.8 62.8h243.1c34.6 0 62.8-28.1 62.8-62.8V169.2c0-9.9-8.1-18-18-18s-18 8.1-18 18v257.6c0 14.8-12 26.8-26.8 26.8H123.2c-14.8 0-26.8-12-26.8-26.8V111.6h360c10 0 18.1-8.1 18.1-18s-8.1-18-18-18zm-138.9 0H172.1V51.5c0-8.5 6.9-15.5 15.5-15.5h114.5c8.5 0 15.5 6.9 15.5 15.5v24.1z"/><path d="M244.8 151.2c-9.9 0-18 8.1-18 18V396c0 9.9 8.1 18 18 18s18-8.1 18-18V169.2c0-9.9-8.1-18-18-18zM169.2 151.2c-9.9 0-18 8.1-18 18V396c0 9.9 8.1 18 18 18s18-8.1 18-18V169.2c0-9.9-8.1-18-18-18zM320.4 151.2c-9.9 0-18 8.1-18 18V396c0 9.9 8.1 18 18 18s18-8.1 18-18V169.2c0-9.9-8.1-18-18-18z"/></svg>'
                },
                editTaskForm: {
                  name: 'editTaskForm',
                  caption: 'Edit task',
                  inputs: {
                    title: {
                      settings: {
                        type: 'text',
                        id: 'edit-title',
                        placeholder: 'Task title',
                        value: '',
                        name: 'title'
                      },
                      el: 'input',
                      label: 'Title'
                    },
                    description: {
                      settings: {
                        id: 'edit-description',
                        placeholder: 'Task description',
                        value: '',
                        name: 'description'
                      },
                      el: 'textarea',
                      label: 'Description'
                    },
                    isFinished: {
                      settings: {
                        type: 'checkbox',
                        id: 'edit-finished',
                        value: '',
                        name: 'isFinished'
                      },
                      el: 'checkbox',
                      label: 'Finished'
                    }
                  },
                  button: {
                    el: 'button',
                    text: 'Edit',
                    isAccent: !0,
                    isFormButton: !0
                  }
                },
                taskToUpdate: null
              }),
              (a.changeInput = function(e, t, n) {
                I(e, t, n, Object(C.a)(a));
              }),
              (a.submit = function(e) {
                e.preventDefault();
                var t,
                  n,
                  o,
                  r = a.props.user,
                  s = a.state,
                  l = s.createTaskForm,
                  i = s.editTaskForm,
                  c = s.taskToUpdate;
                for (var u in (a.state.showCreateTaskModal
                  ? (n = l.inputs)
                  : a.state.showEditTaskModal && (n = i.inputs),
                n))
                  n[u].error = '';
                var m = new FormData(document.forms[0]);
                if ((m.append('creatorId', r._id), a.state.showCreateTaskModal))
                  o = a.props.createTask(m);
                else if (a.state.showEditTaskModal) {
                  m.append('_id', c._id),
                    !0 !== n.isFinished.settings.value &&
                      m.append('isFinished', !1),
                    (o = a.props.editTask(m));
                }
                o.then(function(e) {
                  if (e.errors) {
                    for (var o in e.errors) n[o].error = e.errors[o].message;
                    t = !0;
                  } else {
                    for (var r in n) n[r].settings.value = '';
                    t = !1;
                  }
                  a.state.showCreateTaskModal
                    ? a.setState({ createTaskForm: l, showCreateTaskModal: t })
                    : a.state.showEditTaskModal &&
                      a.setState({ editTaskForm: i, showEditTaskModal: t });
                }).catch(function(e) {
                  console.log(e);
                });
              }),
              (a.closeModal = function(e) {
                var t, n, o;
                'showCreateTaskModal' === e
                  ? ((n = a.state.createTaskForm), (o = 'createTaskForm'))
                  : 'showEditTaskModal' === e &&
                    ((n = a.state.editTaskForm), (o = 'editTaskForm'));
                var r = n.inputs;
                for (var s in r)
                  (r[s].error = null), (r[s].settings.value = '');
                a.setState(
                  ((t = {}), Object(F.a)(t, e, !1), Object(F.a)(t, o, n), t)
                );
              }),
              (a.openModal = function(e) {
                a.setState(Object(F.a)({}, e, !0));
              }),
              (a.editTaskHandler = function(e) {
                var t = a.state.editTaskForm,
                  n = t.inputs;
                (n.title.settings.value = e.title),
                  (n.description.settings.value = e.description),
                  (n.isFinished.settings.value = e.isFinished),
                  a.setState({
                    showEditTaskModal: !0,
                    editTaskForm: t,
                    taskToUpdate: e
                  });
              }),
              (a.deleteTaskHandler = function(e) {
                a.props.deleteTask(e);
              }),
              a
            );
          }
          return (
            Object(g.a)(t, e),
            Object(m.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.props,
                    a = t.user,
                    n = t.isModalTaskLoading,
                    r = t.isTasksLoading,
                    s = this.state,
                    l = s.createTaskForm,
                    i = s.editTaskForm,
                    c = s.showCreateTaskModal,
                    u = s.showEditTaskModal,
                    m = s.toggleCreateTaskButton,
                    d = s.editButton,
                    p = s.deleteButton,
                    g = a.tasks.map(function(t) {
                      return o.a.createElement(q, {
                        key: t._id,
                        task: t,
                        editButton: d,
                        deleteButton: p,
                        onTaskEdit: e.editTaskHandler,
                        onTaskDelete: e.deleteTaskHandler
                      });
                    }),
                    h = N()('tasks__items', {
                      'tasks__items--not-empty': g.length > 0
                    });
                  return o.a.createElement(
                    'section',
                    { className: 'tasks' },
                    o.a.createElement(
                      'div',
                      { className: 'container' },
                      o.a.createElement(
                        'div',
                        { className: 'tasks__content' },
                        o.a.createElement(
                          'p',
                          { className: 'tasks__title' },
                          'My Tasks'
                        ),
                        0 === g.length &&
                          o.a.createElement(
                            'p',
                            { className: 'tasks__empty' },
                            'No tasks created'
                          ),
                        o.a.createElement(
                          'div',
                          { className: 'tasks__buttons' },
                          o.a.createElement(V, {
                            clickHandler: function() {
                              return e.openModal('showCreateTaskModal');
                            },
                            button: m
                          }),
                          o.a.createElement(
                            J,
                            {
                              isOpen: c,
                              closeModal: function() {
                                return e.closeModal('showCreateTaskModal');
                              }
                            },
                            n && o.a.createElement(U, null),
                            o.a.createElement(H, {
                              bgForm: !0,
                              submit: this.submit,
                              handleInputChange: this.changeInput,
                              form: l,
                              isMultiPartFormData: !0
                            })
                          )
                        ),
                        o.a.createElement(
                          J,
                          {
                            isOpen: u,
                            closeModal: function() {
                              return e.closeModal('showEditTaskModal');
                            }
                          },
                          n && o.a.createElement(U, null),
                          o.a.createElement(H, {
                            bgForm: !0,
                            submit: this.submit,
                            handleInputChange: this.changeInput,
                            form: i,
                            isMultiPartFormData: !0
                          })
                        ),
                        o.a.createElement(
                          'div',
                          { className: h },
                          r && o.a.createElement(U, null),
                          g.length > 0 && g
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(o.a.Component)),
        X = Object(i.b)(
          function(e) {
            return {
              isModalTaskLoading: e.global.isModalTaskLoading,
              isTasksLoading: e.global.isTasksLoading
            };
          },
          function(e) {
            return {
              createTask: function(t) {
                return e(
                  (function(e) {
                    return function(t) {
                      return new Promise(function(a, n) {
                        t({ type: 'TOGGLE_MODAL_TASKS_SPINNER', payload: !0 }),
                          D.a
                            .post(''.concat(f.SERVER_URL, '/api/task'), e, {
                              headers: { 'Content-Type': 'multipart/form-data' }
                            })
                            .then(function(e) {
                              e.data.errors
                                ? a(e.data)
                                : (t({ type: 'CREATE_TASK', payload: e.data }),
                                  a(e.data)),
                                t({
                                  type: 'TOGGLE_MODAL_TASKS_SPINNER',
                                  payload: !1
                                });
                            })
                            .catch(function(e) {
                              console.log(e),
                                n(e),
                                t({
                                  type: 'TOGGLE_MODAL_TASKS_SPINNER',
                                  payload: !1
                                });
                            });
                      });
                    };
                  })(t)
                );
              },
              deleteTask: function(t) {
                return e(
                  (function(e) {
                    return function(t) {
                      t({ type: 'TOGGLE_TASKS_SPINNER', payload: !0 }),
                        D.a
                          .delete(
                            ''.concat(f.SERVER_URL, '/api/task/').concat(e)
                          )
                          .then(function(e) {
                            e.data.errors
                              ? console.log(e.data.errors)
                              : t({ type: 'DELETE_TASK', payload: e.data._id }),
                              t({ type: 'TOGGLE_TASKS_SPINNER', payload: !1 });
                          })
                          .catch(function(e) {
                            console.log(e),
                              t({ type: 'TOGGLE_TASKS_SPINNER', payload: !1 });
                          });
                    };
                  })(t)
                );
              },
              editTask: function(t) {
                return e(
                  (function(e) {
                    return function(t) {
                      return new Promise(function(a, n) {
                        t({ type: 'TOGGLE_MODAL_TASKS_SPINNER', payload: !0 }),
                          D.a
                            .put(''.concat(f.SERVER_URL, '/api/task'), e, {
                              headers: { 'Content-Type': 'multipart/form-data' }
                            })
                            .then(function(e) {
                              e.data.errors ||
                                t({ type: 'EDIT_TASK', payload: e.data }),
                                a(e.data),
                                t({
                                  type: 'TOGGLE_MODAL_TASKS_SPINNER',
                                  payload: !1
                                });
                            })
                            .catch(function(e) {
                              t({
                                type: 'TOGGLE_MODAL_TASKS_SPINNER',
                                payload: !1
                              }),
                                n(e),
                                console.log(e);
                            });
                      });
                    };
                  })(t)
                );
              }
            };
          }
        )(Q),
        Z = a(151),
        $ = function(e) {
          var t = e.component,
            a = Object(Z.a)(e, ['component']),
            n = null;
          switch (a.canVisitAsLoginned) {
            case null:
              n = o.a.createElement(
                k.b,
                Object.assign({}, a, {
                  render: function() {
                    return o.a.createElement(t, a);
                  }
                })
              );
              break;
            case !0:
              n = a.isAuth
                ? o.a.createElement(
                    k.b,
                    Object.assign({}, a, {
                      render: function() {
                        return o.a.createElement(t, a);
                      }
                    })
                  )
                : o.a.createElement(k.a, { to: a.to });
              break;
            case !1:
              n = a.isAuth
                ? o.a.createElement(k.a, { to: a.to })
                : o.a.createElement(
                    k.b,
                    Object.assign({}, a, {
                      render: function() {
                        return o.a.createElement(t, a);
                      }
                    })
                  );
              break;
            default:
              n = o.a.createElement('p', null, 'Wrong route passed');
          }
          return n;
        },
        ee = (a(319),
        (function(e) {
          function t() {
            var e, a;
            Object(u.a)(this, t);
            for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++)
              o[r] = arguments[r];
            return (
              ((a = Object(d.a)(
                this,
                (e = Object(p.a)(t)).call.apply(e, [this].concat(o))
              )).state = { isAuth: null }),
              (a.logoutHandler = function(e) {
                (0, a.props.logout)(e);
              }),
              a
            );
          }
          return (
            Object(g.a)(t, e),
            Object(m.a)(t, [
              {
                key: 'componentWillReceiveProps',
                value: function(e) {
                  var t = e.user,
                    a = this.props.cookies;
                  null === t && a.get('token') && a.remove('token'),
                    t &&
                      t.token &&
                      a.get('token') !== t.token &&
                      a.set('token', t.token),
                    this.setState({ isAuth: !!t });
                }
              },
              {
                key: 'componentDidMount',
                value: function() {
                  var e,
                    t,
                    a = this,
                    n = this.props,
                    o = n.cookies,
                    r = n.getUser,
                    s = o.get('token');
                  try {
                    void 0 !== s
                      ? ((t = E.a.verify(s, f.SECRET).email), (e = !0))
                      : (e = !1);
                  } catch (l) {
                    (e = !1),
                      console.log(l),
                      'TokenExpiredError' === l.name && o.remove('token');
                  }
                  e &&
                    r(t)
                      .then(function(e) {
                        e.email
                          ? a.setState({ isAuth: !0 })
                          : (console.log('No connection to db'),
                            a.setState({ isAuth: !1 }));
                      })
                      .catch(function(e) {
                        console.log(e), a.setState({ isAuth: !1 });
                      });
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.state.isAuth,
                    a = this.props.user;
                  return o.a.createElement(
                    'div',
                    { className: 'layout' },
                    o.a.createElement(S, {
                      logout: function() {
                        return e.logoutHandler(a);
                      },
                      isAuth: t
                    }),
                    o.a.createElement(
                      'main',
                      { className: 'main' },
                      o.a.createElement(k.b, {
                        render: function(e) {
                          var n = e.location;
                          return o.a.createElement(
                            v.a,
                            { component: null },
                            o.a.createElement(
                              b.a,
                              {
                                classNames: 'page-anim',
                                timeout: 450,
                                key: n.pathname
                              },
                              o.a.createElement(
                                k.d,
                                { location: n },
                                o.a.createElement($, {
                                  isAuth: t,
                                  canVisitAsLoginned: !1,
                                  to: '/profile',
                                  path: '/auth',
                                  exact: !0,
                                  component: K
                                }),
                                o.a.createElement($, {
                                  isAuth: t,
                                  canVisitAsLoginned: !0,
                                  to: '/auth',
                                  path: '/profile',
                                  exact: !0,
                                  user: a,
                                  component: W
                                }),
                                o.a.createElement($, {
                                  isAuth: t,
                                  canVisitAsLoginned: !0,
                                  to: '/auth',
                                  path: '/tasks',
                                  exact: !0,
                                  user: a,
                                  component: X
                                }),
                                o.a.createElement(k.b, {
                                  path: '/',
                                  render: function() {
                                    return o.a.createElement(Y, { isAuth: t });
                                  }
                                })
                              )
                            )
                          );
                        }
                      })
                    ),
                    o.a.createElement(j, null)
                  );
                }
              }
            ]),
            t
          );
        })(o.a.Component)),
        te = Object(i.b)(
          function(e) {
            return { user: e.user.user };
          },
          function(e) {
            return {
              getUser: function(t) {
                return e(
                  (function(e) {
                    return function(t) {
                      return new Promise(function(a, n) {
                        D.a
                          .get(''.concat(f.SERVER_URL, '/api/user/').concat(e))
                          .then(function(e) {
                            t({ type: 'GET_USER', payload: e.data }), a(e.data);
                          })
                          .catch(function(e) {
                            console.log(e), n(e);
                          });
                      });
                    };
                  })(t)
                );
              },
              logout: function(t) {
                e(
                  (function(e) {
                    return function(t) {
                      return new Promise(function(a, n) {
                        D.a
                          .post(
                            ''.concat(f.SERVER_URL, '/api/logout'),
                            Object(x.a)({}, e)
                          )
                          .then(function(e) {
                            e.data.email
                              ? (a(e.data), t({ type: 'LOGOUT' }))
                              : (console.log('Error while logout'),
                                n('Error while logout'));
                          })
                          .catch(function(e) {
                            console.log(e), n(e);
                          });
                      });
                    };
                  })(t)
                );
              }
            };
          }
        )(Object(c.b)(ee)),
        ae = (a(320), a(27)),
        ne = a(152),
        oe = a(153),
        re = a(67),
        se = { user: null },
        le = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : se,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = t.type,
            n = t.payload;
          switch (a) {
            case 'CREATE_USER':
            case 'GET_USER':
              return Object(x.a)({}, e, { user: n });
            case 'LOGOUT':
              return Object(x.a)({}, e, { user: null });
            case 'CREATE_TASK':
              return Object(x.a)({}, e, {
                user: Object(x.a)({}, e.user, {
                  tasks: [].concat(Object(re.a)(e.user.tasks), [n])
                })
              });
            case 'EDIT_TASK':
              var o = Object(re.a)(e.user.tasks).map(function(e) {
                return e._id === n._id ? n : e;
              });
              return Object(x.a)({}, e, {
                user: Object(x.a)({}, e.user, { tasks: Object(re.a)(o) })
              });
            case 'DELETE_TASK':
              return Object(x.a)({}, e, {
                user: Object(x.a)({}, e.user, {
                  tasks: e.user.tasks.filter(function(e) {
                    return e._id !== n;
                  })
                })
              });
            default:
              return e;
          }
        },
        ie = { isAuthLoading: !1, isTasksLoading: !1, isModalTaskLoading: !1 },
        ce = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : ie,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = t.type,
            n = t.payload;
          switch (a) {
            case 'TOGGLE_SPINNER':
              return Object(x.a)({}, e, { isAuthLoading: n });
            case 'TOGGLE_MODAL_TASKS_SPINNER':
              return Object(x.a)({}, e, { isModalTaskLoading: n });
            case 'TOGGLE_TASKS_SPINNER':
              return Object(x.a)({}, e, { isTasksLoading: n });
            default:
              return e;
          }
        },
        ue = Object(ae.combineReducers)({ user: le, global: ce }),
        me = [ne.a],
        de = Object(ae.createStore)(
          ue,
          Object(oe.composeWithDevTools)(ae.applyMiddleware.apply(void 0, me))
        );
      var pe = function() {
        return o.a.createElement(
          i.a,
          { store: de },
          o.a.createElement(
            c.a,
            null,
            o.a.createElement(l.a, null, o.a.createElement(te, null))
          )
        );
      };
      s.a.render(o.a.createElement(pe, null), document.getElementById('root'));
    }
  },
  [[156, 1, 2]]
]);
//# sourceMappingURL=main.4302d532.chunk.js.map
