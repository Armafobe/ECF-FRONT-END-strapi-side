module.exports = ({ env }) => ({
  'users-permissions': {
      jwt: process.env.JWT_SECRET || 'uTEK+1KkTFyO71kWT7saOA=='
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