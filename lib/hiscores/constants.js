const _ = require('lodash');

const SKILL_CATEGORY = 0;
const MINIGAME_CATEGORY = 1;

const hiscoreEntryTypes = {
  overall: {
    name: 'overall',
    category: SKILL_CATEGORY,
    table: 0,
  },
  attack: {
    name: 'attack',
    category: SKILL_CATEGORY,
    table: 1,
  },
  defence: {
    name: 'defence',
    category: SKILL_CATEGORY,
    table: 2,
  },
  strength: {
    name: 'strength',
    category: SKILL_CATEGORY,
    table: 3,
  },
  hitpoints: {
    name: 'hitpoints',
    category: SKILL_CATEGORY,
    table: 4,
  },
  ranged: {
    name: 'ranged',
    category: SKILL_CATEGORY,
    table: 5,
  },
  prayer: {
    name: 'prayer',
    category: SKILL_CATEGORY,
    table: 6,
  },
  magic: {
    name: 'magic',
    category: SKILL_CATEGORY,
    table: 7,
  },
  cooking: {
    name: 'cooking',
    category: SKILL_CATEGORY,
    table: 8,
  },
  woodcutting: {
    name: 'woodcutting',
    category: SKILL_CATEGORY,
    table: 9,
  },
  fletching: {
    name: 'fletching',
    category: SKILL_CATEGORY,
    table: 10,
  },
  fishing: {
    name: 'fishing',
    category: SKILL_CATEGORY,
    table: 11,
  },
  firemaking: {
    name: 'firemaking',
    category: SKILL_CATEGORY,
    table: 12,
  },
  crafting: {
    name: 'crafting',
    category: SKILL_CATEGORY,
    table: 13,
  },
  smithing: {
    name: 'smithing',
    category: SKILL_CATEGORY,
    table: 14,
  },
  mining: {
    name: 'mining',
    category: SKILL_CATEGORY,
    table: 15,
  },
  herblore: {
    name: 'herblore',
    category: SKILL_CATEGORY,
    table: 16,
  },
  agility: {
    name: 'agility',
    category: SKILL_CATEGORY,
    table: 17,
  },
  thieving: {
    name: 'thieving',
    category: SKILL_CATEGORY,
    table: 18,
  },
  slayer: {
    name: 'slayer',
    category: SKILL_CATEGORY,
    table: 19,
  },
  farming: {
    name: 'farming',
    category: SKILL_CATEGORY,
    table: 20,
  },
  runecrafting: {
    name: 'runecrafting',
    category: SKILL_CATEGORY,
    table: 21,
  },
  hunter: {
    name: 'hunter',
    category: SKILL_CATEGORY,
    table: 22,
  },
  construction: {
    name: 'construction',
    category: SKILL_CATEGORY,
    table: 23,
  },
  leaguePoints: {
    name: 'leaguePoints',
    category: MINIGAME_CATEGORY,
    table: 0,
  },
  bountyHunter: {
    name: 'bountyHunter',
    category: MINIGAME_CATEGORY,
    table: 1,
  },
  bountyHunterRogue: {
    name: 'bountyHunterRogue',
    category: MINIGAME_CATEGORY,
    table: 2,
  },
  clueScrollOverall: {
    name: 'clueScrollOverall',
    category: MINIGAME_CATEGORY,
    table: 3,
  },
  clueScrollBeginner: {
    name: 'clueScrollBeginner',
    category: MINIGAME_CATEGORY,
    table: 4,
  },
  clueScrollEasy: {
    name: 'clueScrollEasy',
    category: MINIGAME_CATEGORY,
    table: 5,
  },
  clueScrollMedium: {
    name: 'clueScrollMedium',
    category: MINIGAME_CATEGORY,
    table: 6,
  },
  clueScrollHard: {
    name: 'clueScrollHard',
    category: MINIGAME_CATEGORY,
    table: 7,
  },
  clueScrollElite: {
    name: 'clueScrollElite',
    category: MINIGAME_CATEGORY,
    table: 8,
  },
  clueScrollMaster: {
    name: 'clueScrollMaster',
    category: MINIGAME_CATEGORY,
    table: 9,
  },
  lastManStanding: {
    name: 'lastManStanding',
    category: MINIGAME_CATEGORY,
    table: 10,
  },
};

const getHiscoreEntryOrder = (category) => _.sortBy(
  _.filter(Object.values(hiscoreEntryTypes), { category }),
  ['table'],
);

const hiscoreSkillEntryTypeOrder = getHiscoreEntryOrder(SKILL_CATEGORY);
const hiscoreMinigameEntryTypeOrder = getHiscoreEntryOrder(MINIGAME_CATEGORY);

const playerTypes = {
  normal: 'normal',
  ironman: 'ironman',
  ultimateIronman: 'ultimate',
  hardcoreIronman: 'hardcore_ironman',
  deadman: 'deadman',
  seasonal: 'seasonal',
};

module.exports = {
  hiscoreEntryTypes,
  hiscoreSkillEntryTypeOrder,
  hiscoreMinigameEntryTypeOrder,
  playerTypes,
};
