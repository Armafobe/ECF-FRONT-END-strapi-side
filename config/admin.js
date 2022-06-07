module.exports = ({ env }) => ({
  apiToken: {
    salt: env('API_TOKEN_SALT', '8eab61a8-17fe-4ebf-8af6-7cf78888b16e'),
  },
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd1838bb10cede4205ad9420ae59ed191'),
  },
});