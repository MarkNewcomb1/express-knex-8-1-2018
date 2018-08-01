
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cat_breeds').del()
    .then(function () {
      // Inserts seed entries
      return knex('cat_breeds').insert([
        {
          breed: 'Tabby',
          popularity: 0
        },
        {
          breed: 'Persian',
          popularity: 10
        },
        {
          breed: 'Bengal',
          popularity: 0
        }
      ]);
    });
};
