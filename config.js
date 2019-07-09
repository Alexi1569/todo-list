module.exports = {
  DB: 'mongodb://admin:admin123@ds231517.mlab.com:31517/todo-list',
  SECRET: 'SOME_SECRET_STRING',
  SALT_ROUNDS: 10,
  SERVER_URL:
    process.env.NODE_ENV === 'production'
      ? 'https://alex-todolist.herokuapp.com'
      : 'http://localhost:5000'
};
