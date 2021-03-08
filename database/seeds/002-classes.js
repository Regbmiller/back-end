
exports.seed = function(knex) {
  return knex('classes').del()
    .then(function () {
      return knex('classes').insert([
        { name: "Running 1", location: "1st street", price: "$10.00", category_id: 1 },
        { name: "Running 2", location: "2nd street", price: "$15.00", category_id: 1 },
        { name: "Yoga 1", location: "3rd street", price: "$20.00", category_id: 2 },
        { name: "Yoga 2", location: "4th street", price: "$20.00", category_id: 2 },
        { name: "Boxing 1", location: "5th street", price: "$15.00", category_id: 3 },
        { name: "Boxing 2", location: "6th street", price: "$30.00", category_id: 3 },
      ]);
    });
};
