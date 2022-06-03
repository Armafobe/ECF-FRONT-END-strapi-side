module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "d1838bb10cede4205ad9420ae59ed191")
    }
  }
});