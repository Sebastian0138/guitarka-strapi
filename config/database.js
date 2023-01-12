module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cevvo1sgqg4cnpil5djg-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_663g'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'Jxvp0TwECxM81jq5YlWTrFahW2MYAXPU'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
