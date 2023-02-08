const planets = require('../../models/planets.model')

// use return to make sure only one response is given and where the function stops executing
const getAllPlanets = (req, res) => {
  return res.status(200).json(planets);
}

module.exports = {
  getAllPlanets,
}
