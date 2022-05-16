module.exports = {
  // Insira aqui seus dados do banco NA NUVEM AZURE

  production: {
    username: 'BENTEATS',
    password: '#Fgrupo9',
    database: 'BD_Benteats',
    host: 'benteats.database.windows.net',
    dialect: 'mssql',
    xuse_env_variable: 'DATABASE_URL',
    dialectOptions: {
      options: {
        encrypt: true
      }
    },
    pool: { 
      max: 5,
      min: 1,
      acquire: 5000,
      idle: 30000,
      connectTimeout: 5000
    }
  },

  // Insira aqui seus dados do banco LOCAL - MySQL Workbench
  // dev: {
  //   username: 'root',
  //   password: 'bandtec',
  //   database: 'BENTEATS',
  //   host: '127.0.0.1',
  //   dialect: 'mysql',
  //   xuse_env_variable: 'DATABASE_URL',
  //   dialectOptions: {
  //     options: {
  //       encrypt: true
  //     }
  //   },
  //   pool: { 
  //     max: 5,
  //     min: 1,
  //     acquire: 5000,
  //     idle: 30000,
  //     connectTimeout: 5000
  //   }
  // },
};