
exports.up = function(knex) {
    return knex.schema.createTable('classes', table => {
        table.increments("id");
        table.string("name").notNullable();
        table.string("location");
        table.float("price");
        table
          .integer("category_id")
          .notNullable()
          .references("name")
          .inTable("categories")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
        table.integer('user_id')
            .unsigned()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        table.timestamps(true, true);
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('classes');
};
