module.exports = {
  SECRET: 'SOME_SECRET_STRING',
  SALT_ROUNDS: 10,
  SERVER_URL:
    process.env.NODE_ENV === 'production'
      ? 'https://alex-todolist.herokuapp.com'
      : 'http://localhost:5000'
};
