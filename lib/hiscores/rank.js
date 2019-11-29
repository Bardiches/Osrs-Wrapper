const parseHtml = require('node-html-parser').parse;
const _ = require('lodash');

const PAGE_SIZE = 25;

// eslint-disable-line max-len
const createHiscorePageUrl = (playerType) => `http://services.runescape.com/m=hiscore_oldschool${(playerType === 'normal' || !playerType) ? '' : `_${playerType}`}/overall`;

const getHiscorePageHtml = async (axiosInstance, rankPage, playerType, hiscoreEntryType) => {
  const hiscorePageResponse = await axiosInstance.get(
    createHiscorePageUrl(playerType), {
      params: {
        category_type: hiscoreEntryType.category,
        table: hiscoreEntryType.table,
        page: rankPage + 1,
      },
    },
  );

  return hiscorePageResponse.data;
};

const parseNumber = (numberText) => parseInt(numberText.replace(/,/g, ''), 10);

const parseHiscoreEntryHtml = (hiscoreEntryHtml) => {
  const [rankHtml, nameHtml, scoreHtml, subscoreHtml] = hiscoreEntryHtml.querySelectorAll('td');

  const rank = parseNumber(rankHtml.rawText.trim());
  const name = nameHtml.rawText.trim();
  const score = parseNumber(scoreHtml.rawText.trim());
  const subscore = subscoreHtml === undefined
    ? undefined
    : parseNumber(subscoreHtml.rawText.trim());

  return {
    rank,
    name,
    score,
    subscore,
  };
};

const getRankPageIndexForRank = (rank) => Math.floor((rank - 1) / PAGE_SIZE);

const createGetRanks = (axiosInstance) => async ({
  rankRange,
  playerType,
  hiscoreEntryType,
} = {}) => {
  const rankPageIndexRange = {
    from: getRankPageIndexForRank(rankRange.from),
    to: getRankPageIndexForRank(rankRange.to),
  };

  const rankPages = await Promise.all(
    _.range(rankPageIndexRange.from, rankPageIndexRange.to + 1, 1)
      .map(async (rankPage) => {
        const hiscorePageHtml = await getHiscorePageHtml(
          axiosInstance,
          rankPage,
          playerType,
          hiscoreEntryType,
        );

        const hiscoreEntryHtmlList = parseHtml(hiscorePageHtml).querySelectorAll('.personal-hiscores__row');

        return hiscoreEntryHtmlList.map(parseHiscoreEntryHtml);
      }),
  );

  return _.flatten(rankPages);
};

module.exports = { createGetRanks };
