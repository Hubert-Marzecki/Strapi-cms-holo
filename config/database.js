module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'ec2-50-37-231-192.compute-2.amazonaws.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'd516fp1u21ph7b'),
        username: env('DATABASE_USERNAME', 'ebitxebvixeeqd'),
        password: env('DATABASE_PASSWORD', 'dc59b16dedb3a1eef84d4999a0be041bd419c474cd4a0973efc7c9339afb4baf'),
      },
      options: {
        ssl: false,
      },
    },
  },
});
