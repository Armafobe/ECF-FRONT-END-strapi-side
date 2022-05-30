module.exports = ({ env }) => ({
  'users-permissions': {
      jwtSecret: 'f581b65f3c1546eba899874d1ff681ad0cbc0034d226fee518af73bd66165b16'
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