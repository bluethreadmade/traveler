const Traveller = require('./Traveller');
const Location = require('./Location');
const Trips = require('./Trips');

Traveller.hasMany(Trips, {
    foreignKey: "traveller_id",
});

Trips.belongsTo(Traveller, {
    foreignKey: "traveller_id",
});

Location.belongsTo(Trips, {
    foreignKey: "location_id",
});

module.exports = { Traveller, Location, Trips };

