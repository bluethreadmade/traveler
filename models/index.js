const Traveller = require('./Traveller');
const Location = require('./Location');
const Trip = require('./Trip');

Location.hasMany(Trip);

Traveller.hasMany(Trip, {
    foreignKey: "traveller_id",
});

Trip.belongsTo(Traveller, {
    foreignKey: "traveller_id",
});

Traveller.hasMany(Location, {
    foreignKey: "location_id",
});

Location.hasMany(Traveller, {
    foreignKey: "traveller_id"
});



module.exports = { Traveller, Location, Trip };

