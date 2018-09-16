module.exports = {
    port: process.env.PORT || 5432,
    db: {
      database: process.env.DB_NAME || 'alj',
      user: process.env.DB_USER || 'riwandy',
      password: process.env.DB_PASSWORD || "dTOed*1s",
      options: {
        dialect: process.env.DIALECT || 'postgres',
        host: process.env.HOST || 'localhost'
      }
    },
    authentication : {
      jwtSecret: process.env.JWT_SECRET || 'secretss'
    }
  }
