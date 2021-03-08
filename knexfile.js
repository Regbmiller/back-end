// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/classes.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  },
  pool: {
    afterCreate: (conn, done) => {
      conn.run("PRAGMA foreign_keys = ON", done)
    },
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './tests/test.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './tests/migrations'
    },
    seeds: {
      directory: './test/seeds'
    }
  }
};
