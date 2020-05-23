
exports.up = function(knex) {
    // creating a table 
    return knex.schema.createTable('cars', tbl => {
        tbl.increments()
        tbl.text('VIN').unique().notNullable()
        tbl.text('Make').notNullable()
        tbl.text('Model').notNullable()
        tbl.integer('Mileage', 7).notNullable()
        tbl.text('TransmissionType')
        tbl.text('TitleStatus')
    })
};

exports.down = function(knex) {
    // removing a table
    return knex.schema.dropTableIfExists('cars')
};
