module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          account_config: {
            cloud_name: env('CLOUDINARY_NAME'),
            api_key: env('CLOUDINARY_KEY'),
            api_secret: env('CLOUDINARY_SECRET'),
        },
          uploadStream: {
            folder: env('CLOUDINARY_FOLDER'),
        }
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
  });