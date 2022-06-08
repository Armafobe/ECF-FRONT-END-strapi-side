module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "4ce743ee2639b6368c9078dd93c0102c"),
  },
});