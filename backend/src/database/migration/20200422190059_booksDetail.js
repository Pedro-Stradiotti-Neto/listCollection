
exports.up = function (knex) {
    return knex.schema.createTable('booksDetail', function (table) {
        table.increments();
        table.string('titulo').notNullable;
        table.string('volumes').notNullable;
        table.string('possui').notNullable;

        table.string('users_id').notNullable;

        table.foreign('users_id').references('id').inTable('users');
    });
};


exports.down = function (knex) {
    return knex.schema.dropTable('booksDetail');
};
