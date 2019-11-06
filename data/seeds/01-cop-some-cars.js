
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    //.del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin: '133333333', make: 'classic', model:'nwe', mileage: '60000', transmissionType: 'supersonic', title: 'woow'},
      ]);
    });
};
