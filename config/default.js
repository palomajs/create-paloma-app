module.exports = {
  port: 3000,

  mongodb: {
    url: 'mongodb://localhost:27017/test'
  },

  redis: {
    host: 'localhost',
    port: 6379
  },

  jwt: {
    secret: 'xxx',
    issuer: 'xxx',
    expiresIn: '30d'
  },

  logger: {
    level: 'log'
  }
}
