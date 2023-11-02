require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
  override: true,
});

export default () => {
  return {
    logger: {
      levels: ['error', 'warn', 'info', 'debug'],
    },
    cookieSecret: 'xxx',
    sessionPrefix: ''
  }
};