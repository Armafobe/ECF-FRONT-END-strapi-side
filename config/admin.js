module.exports = ({ env }) => ({
  apiToken: {
    salt: env("API_TOKEN_SALT", "GO9uzn93KRmYj3fHzgihH7UYIk3aJS++")
  },
  auth: {
    secret: env("ADMIN_JWT_SECRET", "i8CqqilM9Gn2/RWME/XlQLxNJdR7WoTE"),
  },
});