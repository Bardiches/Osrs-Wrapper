const {
  hiscoreSkillEntryTypeOrder,
  hiscoreMinigameEntryTypeOrder,
} = require('./constants');

const csvTo2dArray = (csv) => csv.split('\n').map((line) => line.split(','));

const parseNumber = (numberText) => parseInt(numberText.replace(/,/g, ''), 10);

const mapSkill = (skill) => ({
  rank: parseNumber(skill[0]),
  level: parseNumber(skill[1]),
  experience: parseNumber(skill[2]),
});
const mapMinigame = (minigame) => ({
  rank: parseNumber(minigame[0]),
  score: parseNumber(minigame[1]),
});

const statMapping = hiscoreSkillEntryTypeOrder.map((skill) => ({
  name: skill.name,
  mappingFunction: mapSkill,
}))
  .concat(hiscoreMinigameEntryTypeOrder.map((minigame) => ({
    name: minigame.name,
    mappingFunction: mapMinigame,
  })));

const mapPlayerStats = (playerStats) => playerStats.reduce((
  mappedPlayerStats,
  playerStat,
  playerStatIndex,
) => {
  const stat = statMapping[playerStatIndex];
  return stat
    ? ({
      ...mappedPlayerStats,
      [stat.name]: stat.mappingFunction(playerStat),
    })
    : mappedPlayerStats;
}, {});

const appendPlayer = (playerStats, player) => ({ ...playerStats, ...player });

// eslint-disable-line max-len
const createHiscoreUrl = (playerType) => `http://services.runescape.com/m=hiscore_oldschool${(playerType === 'normal' || !playerType) ? '' : `_${playerType}`}/index_lite.ws`; // TODO: Make this cleaner

const createGetPlayer = (axiosInstance) => async ({ name = '', type = '' } = {}) => {
  const hiscoreResponse = await axiosInstance.get(createHiscoreUrl(type), {
    params: { player: name },
  });

  return appendPlayer(mapPlayerStats(csvTo2dArray(hiscoreResponse.data)), { name, type });
};

const createGetPlayers = (axiosInstance) => async (players = []) => Promise.all(
  players.map(createGetPlayer(axiosInstance)),
);

module.exports = { createGetPlayers };
