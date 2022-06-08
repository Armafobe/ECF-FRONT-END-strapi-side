module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  'users-permissions': {
    config: {
      jwtSecret: env("JWT_SECRET", "zq5x/Q8aw5qNQRwfKqYco13Pv3zUPzBi"),
      jwt: {
        expiresIn: '7d',
      },
    },
  },
  // ...*/
})