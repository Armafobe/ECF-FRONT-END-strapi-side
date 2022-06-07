module.exports = ({ env }) => ({
  apiToken: {
    salt: process.env.API_TOKEN_SALT,
  },
  auth: {
    secret: process.env.ADMIN_JWT_SECRET,
  },
});