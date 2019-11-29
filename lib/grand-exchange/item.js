const createItemDetailUrl = (itemId) => `http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=${itemId}`;
const createItemGraphUrl = (itemId) => `http://services.runescape.com/m=itemdb_oldschool/api/graph/${itemId}.json`;

const createGetItem = (axiosInstance) => async (itemId) => {
  const grandExchangeResponse = await axiosInstance.get(createItemDetailUrl(itemId));
  return grandExchangeResponse.data;
};

const createGetGraph = (axiosInstance) => async (itemId) => {
  const grandExchangeResponse = await axiosInstance.get(createItemGraphUrl(itemId));
  return grandExchangeResponse.data;
};

module.exports = {
  createGetItem,
  createGetGraph,
};
