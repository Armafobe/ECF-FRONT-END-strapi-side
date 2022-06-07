module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "06ed529f2589296a9c5713be8a399c8edb51cb7f1d10685ac89e2180a0524aefbd5e1f6f7555e3b013e9a09c28bef82970ce3c5f5345598d0989e65427fb282e04dc9fa4f691602352c8bb421f6aa9c84a4bd7e6559f68f9a10b2aecaaea6d4868176d456ba7af754a3b7bb60d34226cd297890ad38fe7b86e957aad01db1d9e"),
    },
  },
});