module.exports = ({ env }) => ({
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: "hgy127cen",
      api_key: "454849887759814",
      api_secret: "SIrs0XobiGUpc365lXo_pOAOi2c",
    },
    actionOptions: {
      upload: {},
      delete: {},
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