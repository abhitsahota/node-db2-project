
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sales').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('sales').insert([
        {carId: 1, SalePrice: 123, Financed: true, SalesPerson: 'Bob'},
        {carId: 3, SalePrice: 312123, Financed: true, SalesPerson: 'George', email: 'qq@qq.com'},
      ]);
    });
};
