const path = require('path');

module.exports = ({ env }) => ({
  defaultConnection: "default",
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "bank"),
      username: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "0000"),
      schema: env("DATABASE_SCHEMA", "public"),
    },
  }
});
  /*if (process.env.NODE_ENV === "production") {
    return {
      connection: {
        client: "postgres",
        connection: {
          connectionString: process.env.DATABASE_URL,
          ssl: { rejectUnauthorized: false },
          host: env("DATABASE_HOST", "127.0.0.1"),
          port: env.int("DATABASE_PORT", 5432),
          database: env("DATABASE_NAME", "strapi"),
          user: env("DATABASE_USERNAME", "strapi"),
          password: env("DATABASE_PASSWORD", "strapi"),
          ssl: {
            rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
          },
        },
        debug: false,
      },
    };
  }

    return {
      connection: {
        client: 'sqlite',
        connection: {
          filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
        },
        useNullAsDefault: true,
      },
    };
  };*/
