module.exports = ({ env }) => ({
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: env('ddpzg3wel'),
      api_key: env('292863883274299'),
      api_secret: env('Wx_822oHzus9ESEk1etSpe-Z_iI'),
    },
  },
});