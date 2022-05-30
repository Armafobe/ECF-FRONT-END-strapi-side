module.exports = ({ env }) => ({
  'users-premissions': {
    config: {
      jwtSecret: process.env.JWT_SECRET || 'dh24b928-5028d-47cd-b517-fbbf1a6ae696'
    }
  },
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: env('CLOUDINARY_NAME'),
      api_key: env('CLOUDINARY_KEY'),
      api_secret: env('CLOUDINARY_SECRET'),
    },
    actionOptions: {
      upload: {},
      delete: {},
    },
  },
})