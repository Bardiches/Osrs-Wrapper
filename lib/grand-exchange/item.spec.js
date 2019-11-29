const chai = require('chai');
const chaiSpies = require('chai-spies');

chai.use(chaiSpies);

const { createGetItem, createGetGraph } = require('./item');

const { expect, spy } = chai;

describe('Item', () => {
  describe('getItem', () => {
    it('Should call the Grand Exchange API with the proper URL', async () => {
      const axiosMock = {
        get: () => Promise.resolve({ data: {} }),
      };
      const getSpy = spy.on(axiosMock, 'get');
      const getItem = createGetItem(axiosMock);

      await getItem(1);

      expect(getSpy).to.have.been.called.with('http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=1');
    });
  });

  describe('getGraph', () => {
    it('Should call the Grand Exchange API with the proper URL', async () => {
      const axiosMock = {
        get: () => Promise.resolve({ data: {} }),
      };
      const getSpy = spy.on(axiosMock, 'get');
      const getGraph = createGetGraph(axiosMock);

      await getGraph(1);

      expect(getSpy).to.have.been.called.with('http://services.runescape.com/m=itemdb_oldschool/api/graph/1.json');
    });
  });
});
