
exports.up = function (knex) {
    return knex.schema.createTable('books', function (table) {
        table.increments();
        table.string('tipo').notNullable;
        table.string('titulo').notNullable;
        table.string('volumes').notNullable;
        table.string('distribuidora').notNullable;
        table.string('status').notNullable;

        table.string('users_id').notNullable;

        table.foreign('users_id').references('id').inTable('users');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('books');
};
