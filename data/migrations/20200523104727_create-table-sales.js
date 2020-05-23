
exports.up = function(knex) {
    return knex.schema.createTable('sales', tbl => {
        tbl.increments()
        tbl.integer('carId').unsigned().notNullable().references('id').inTable('cars')
        tbl.text('VIN').unsigned().notNullable().references('VIN').inTable('cars')
        tbl.integer('SalePrice').notNullable()
        tbl.boolean('Financed').notNullable()
        tbl.text('SalesPerson').notNullable()
        tbl.text('email')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('sales')
};
