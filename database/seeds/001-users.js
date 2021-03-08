
exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        { username: 'user1', password: "pass1" },
        { username: 'user2', password: "pass2" },
        { username: 'user3', password: "pass3" },
        { username: 'user4', password: "pass4" },
        { username: 'user5', password: "pass5" },
      ]);
    });
};
