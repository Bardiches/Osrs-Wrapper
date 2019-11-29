const axios = require('axios');

const constants = require('./constants');
const { createGetPlayers } = require('./player');
const { createGetRanks } = require('./rank');

const createHiscoresInterface = (axiosInstance) => ({
  getPlayers: createGetPlayers(axiosInstance),
  getRanks: createGetRanks(axiosInstance),
});

const createDefaultHiscoresInterface = () => createHiscoresInterface(axios.create());

module.exports = {
  createHiscoresInterface,
  createDefaultHiscoresInterface,
  constants,
};
