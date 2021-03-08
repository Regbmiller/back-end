
exports.seed = function(knex) {
  return knex('categories').del()
    .then(function () {
      return knex('categories').insert([
        { name: "Running" },
        { name: "Yoga" },
        { name: "Boxing" },
      ]);
    });
};
