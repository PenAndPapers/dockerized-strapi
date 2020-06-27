module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        "client": "mysql",
        "host": "127.0.0.1",
        "port": 3366,
        "username": "root",
        "password": "nq2w6qMnYzGM7,b1*G>0",
        "database": "db_strapi"
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
