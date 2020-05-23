
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: '1A1', Make: 'Dodge', Model: 'Ram', Mileage: 10000, TransmissionType: 'v8', TitleStatus: 'Clean'},
        {VIN: '2B2', Make: 'Honda', Model: 'Civic', Mileage: 18080, TitleStatus: 'Salvage'},
        {VIN: '3C3', Make: 'Ford', Model: 'F150', Mileage: 191919, TransmissionType: 'v10'}
      ]);
    });
};
