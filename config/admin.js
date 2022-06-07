module.exports = ({ env }) => ({
  apiToken: {
    salt: env('API_TOKEN_SALT', 'dqz54384f8348fsf4s39fs2fs3ef51s8e4'),
  },
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd1838bb10cede4205ad9420ae59ed191'),
  },
});