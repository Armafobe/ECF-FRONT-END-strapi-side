module.exports = ({ env }) => ({
  apiToken: {
    salt: env("API_TOKEN_SALT", "12345678987654321"),
  },
  auth: {
    secret: env("ADMIN_JWT_SECRET", "98765432123456789"),
  },
});