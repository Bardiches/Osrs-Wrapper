const axios = require('axios');

const { createGetItem, createGetGraph } = require('./item');

const createGrandExchangeInterface = (axiosInstance) => ({
  getItem: createGetItem(axiosInstance),
  getGraph: createGetGraph(axiosInstance),
});

const createDefaultGrandExchangeInterface = () => createGrandExchangeInterface(axios.create());

module.exports = {
  createGrandExchangeInterface,
  createDefaultGrandExchangeInterface,
};
