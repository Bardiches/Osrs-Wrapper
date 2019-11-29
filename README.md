# osrs-api
[![npm](https://img.shields.io/npm/v/osrs-api.svg)](https://www.npmjs.com/package/osrs-api) [![travis-ci](https://travis-ci.org/Bardiches/osrs-api.svg?branch=master)](https://travis-ci.org/Bardiches/osrs-api)

A node.js-based wrapper for [OSRS](http://oldschool.runescape.com/)'s hiscores API and Grand Exchange API. Forked from [atjeff/Osrs-Wrapper](https://github.com/atjeff/Osrs-Wrapper).

## Installation 

### With npm

```
$ npm install --save osrs-api
```

### With yarn

```
$ yarn add osrs-api
```

## Usage

### Hiscores

#### `createHiscoresInterface(axiosInstance)`

Used to create an OSRS hiscores interface with a custom instance of [Axios](https://www.npmjs.com/package/axios). Useful if you need to customize how you make HTTP requests. Returns an OSRS hiscores interface.

##### Example

```javascript
const axios = require('axios');
const { hiscores: { createHiscoresInterface } } = require('osrs-api');

const hiscoresInterface = createHiscoresInterface(axios.create());
````

#### `createDefaultHiscoresInterface()`

Used to create an OSRS hiscores interface with a default instance of [Axios](https://www.npmjs.com/package/axios). Useful if you don't care about customizing how you make HTTP requests. Returns an OSRS hiscores interface.

##### Example

```javascript
const { hiscores: { createDefaultHiscoresInterface } } = require('osrs-api');

const hiscoresInterface = createDefaultHiscoresInterface();
```

#### `hiscoresInterface.getPlayers([{ playerName, playerType }, ...])`

Used to retrieve the stats and ranks for an array of players. Returns a promise containing an array of player stats and ranks.

##### Example

```javascript
const {
  hiscores: {
    constants: { playerTypes },
    createDefaultHiscoresInterface,
  }
} = require('osrs-api');

const hiscoresInterface = createDefaultHiscoresInterface();
const players = await hiscoresInterface.getPlayers([
  { name: 'Kate Micucci', type: playerTypes.hardcoreIronman }
]);

console.log(players);
```

##### Output

```javascript
[{
  name: 'Kate Micucci',
  type: 'hardcore_ironman',
  overall: { rank: 5399, level: 1200, experience: 7164307 },
  attack: { rank: 4891, level: 64, experience: 448334 },
  defence: { rank: 3799, level: 64, experience: 435491 },
  strength: { rank: 4006, level: 70, experience: 749071 },
  hitpoints: { rank: 5029, level: 66, experience: 538854 },
  ranged: { rank: 9132, level: 48, experience: 88163 },
  prayer: { rank: 7234, level: 44, experience: 56690 },
  magic: { rank: 7309, level: 60, experience: 283069 },
  cooking: { rank: 8854, level: 59, experience: 257180 },
  woodcutting: { rank: 2869, level: 72, experience: 911090 },
  fletching: { rank: 8171, level: 56, experience: 190596 },
  fishing: { rank: 4647, level: 70, experience: 772902 },
  firemaking: { rank: 19938, level: 61, experience: 312150 },
  crafting: { rank: 6371, level: 51, experience: 121833 },
  smithing: { rank: 4682, level: 52, experience: 124557 },
  mining: { rank: 1486, level: 73, experience: 1016912 },
  herblore: { rank: 3221, level: 50, experience: 106477 },
  agility: { rank: 7425, level: 66, experience: 533348 },
  thieving: { rank: 6968, level: 52, experience: 126391 },
  slayer: { rank: 11707, level: 26, experience: 9100 },
  farming: { rank: 3831, level: 45, experience: 66951 },
  runecrafting: { rank: 12438, level: 14, experience: 2225 },
  hunter: { rank: 25687, level: 9, experience: 1000 },
  construction: { rank: 7707, level: 28, experience: 11923 },
  leaguePoints: { rank: 1, score: 100 },
  bountyHunter: { rank: -1, score: -1 },
  bountyHunterRogues: { rank: -1, score: -1 },
  clueScrolls: { rank: -1, score: -1 },
  clueScrollBeginner: { rank: -1, score: -1 },
  clueScrollEasy: { rank: -1, score: -1 },
  clueScrollMedium: { rank: -1, score: -1 },
  clueScrollHard: { rank: -1, score: -1 },
  clueScrollElite: { rank: -1, score: -1 },
  clueScrollMaster: { rank: -1, score: -1 },
  lastManStanding: { rank: -1, score: -1 },
}]
```

#### `hiscoresInterface.getRanks({ rankRange: { from, to }, playerType, entryType })`

Used to retrieve the player rank information within a range of ranks for an account type and skill/minigame. Returns a promise containing an array of ranks.

**Disclaimer**: This is parsed from raw HTML on the hiscores page. This may break if Jagex significantly changes how the HTML on the page is structured.

##### Example

```javascript
const {
  hiscores: {
    constants: {
      playerTypes,
      hiscoreEntryTypes,
    },
    createDefaultHiscoresInterface,
  }
} = require('osrs-api');

const hiscoresInterface = createDefaultHiscoresInterface();
const ranks = await hiscoresInterface.getRanks({
  rankRange: { from: 1, to: 50 },
  playerType: playerTypes.seasonal,
  hiscoreEntryType: hiscoreEntryTypes.hunter,
});

console.log(ranks);
```

##### Output

```javascript
[
  { rank: 1, name: 'evezt', score: 99, subscore: 75073820 },
  { rank: 2, name: 'HC Rando', score: 99, subscore: 70000007 },
  { rank: 3, name: 'Crispylove', score: 99, subscore: 60710073 },
  { rank: 4, name: '73IQ', score: 99, subscore: 60463094 },
  { rank: 5, name: 'BlueMagikarp', score: 99, subscore: 50080993 },
  { rank: 6, name: 'HC P E K', score: 99, subscore: 41394612 },
  { rank: 7, name: 'Skyit', score: 99, subscore: 39828998 },
  { rank: 8, name: 'Auer', score: 99, subscore: 37273375 },
  { rank: 9, name: 'comfy', score: 99, subscore: 36255105 },
  { rank: 10, name: 'Marumi', score: 99, subscore: 34458323 },
  { rank: 11, name: 'Zeme returns', score: 99, subscore: 31594814 },
  { rank: 12, name: 'Number1 Bass', score: 99, subscore: 31216823 },
  { rank: 13, name: 'JTO II', score: 99, subscore: 31025194 },
  { rank: 14, name: 'SENPAI HEMP', score: 99, subscore: 30707733 },
  { rank: 15, name: 'Tunez', score: 99, subscore: 30357789 },
  { rank: 16, name: 'Big Ghenital', score: 99, subscore: 30000000 },
  { rank: 17, name: 'Ardy Laps', score: 99, subscore: 27659325 },
  { rank: 18, name: 'Im JSPACER', score: 99, subscore: 27636934 },
  { rank: 19, name: 'Such a Loser', score: 99, subscore: 27102599 },
  { rank: 20, name: 'OLY Krzanich', score: 99, subscore: 27010025 },
  { rank: 21, name: 'Osuu hyvin', score: 99, subscore: 26847463 },
  { rank: 22, name: 'Shampoo', score: 99, subscore: 25001457 },
  { rank: 23, name: 'Iam Hax', score: 99, subscore: 24644861 },
  { rank: 24, name: 'donnyr2hcim', score: 99, subscore: 24514921 },
  { rank: 25, name: 'RILEYYYYYY', score: 99, subscore: 24183248 },
  { rank: 26, name: 'Lydia Kenney', score: 99, subscore: 23839691 },
  { rank: 27, name: 'Katastrophie', score: 99, subscore: 23172148 },
  { rank: 28, name: 'Tomi', score: 99, subscore: 22639355 },
  { rank: 29, name: 'eXampL', score: 99, subscore: 22598198 },
  { rank: 30, name: 'Operation HC', score: 99, subscore: 21878951 },
  { rank: 31, name: 'Razer Elite', score: 99, subscore: 21847656 },
  { rank: 32, name: 'Visioo', score: 99, subscore: 21783260 },
  { rank: 33, name: 'AvengedXelha', score: 99, subscore: 21770401 },
  { rank: 34, name: 'Abundantoast', score: 99, subscore: 21698511 },
  { rank: 35, name: 'Qiyana', score: 99, subscore: 21450815 },
  { rank: 36, name: 'Tiffany', score: 99, subscore: 21415119 },
  { rank: 37, name: 'smiithy', score: 99, subscore: 20641749 },
  { rank: 38, name: 'Fortiqus', score: 99, subscore: 19968821 },
  { rank: 39, name: 'Hickster', score: 99, subscore: 19754950 },
  { rank: 40, name: 'DedVittu', score: 99, subscore: 19664180 },
  { rank: 41, name: 'Vr Kr', score: 99, subscore: 19655118 },
  { rank: 42, name: 'Guile', score: 99, subscore: 19524526 },
  { rank: 43, name: 'AyeZeee', score: 99, subscore: 19503164 },
  { rank: 44, name: 'Fax Machine', score: 99, subscore: 19449265 },
  { rank: 45, name: 'Softcor', score: 99, subscore: 19392241 },
  { rank: 46, name: '5th hcim LUL', score: 99, subscore: 19093823 },
  { rank: 47, name: 'Incel Core', score: 99, subscore: 18861566 },
  { rank: 48, name: 'Brah Im Hard', score: 99, subscore: 18779715 },
  { rank: 49, name: 'Sixty-Two', score: 99, subscore: 18717189 },
  { rank: 50, name: 'Lord Devil', score: 99, subscore: 18631683 },
]
```

#### `constants.hiscoreEntryTypes`

A map of different hiscore entry types like fishing, total clue scrolls complete, and overall level. Contains the name of the entry, the category (skill vs. minigame), and the table index of the entry.

##### Example

```javascript
const {
  hiscores: { constants: { hiscoreEntryTypes } },
} = require('osrs-api');

console.log(hiscoreEntryTypes);
```

##### Output

```javascript
{
  /* ... */
  fishing: {
    name: 'fishing',
    category: 0,
    table: 11,
  },
  /* ... */
  clueScrollsOverall: {
    name: 'clueScrollsOverall',
    category: 1,
    table: 3,
  },
  /* ... */
}
```

#### `constants.hiscoreSkillEntryTypeOrder`

An array of hiscore skill entries the order in which they're given by the hiscores API.

##### Example

```javascript
const {
  hiscores: { constants: { hiscoreSkillEntryTypeOrder } },
} = require('osrs-api');

console.log(hiscoreSkillEntryTypeOrder);
```

##### Output

```javascript
[
  { name: 'overall', category: 0, table: 0 },
  { name: 'attack', category: 0, table: 1 },
  /* ... */
  { name: 'construction': catrgory: 0, table: 23 },
]
```

#### `constants.hiscoreMinigameEntryTypeOrder`

An array of hiscore minigame entries the order in which they're given by the hiscores API.

##### Example

```javascript
const {
  hiscores: { constants: { hiscoreMinigameEntryTypeOrder } },
} = require('osrs-api');

console.log(hiscoreMinigameEntryTypeOrder);
```

##### Output

```javascript
[
  { name: 'leaguePoints', category: 1, table: 0 },
  { name: 'bountyHunter', category: 1, table: 1 },
  /* ... */
  { name: 'lastManStanding': catrgory: 1, table: 23 },
]
```

#### `constants.playerTypes`

A map of account/players types for use with the hiscores API.

##### Example

```javascript
const {
  hiscores: { constants: { playerTypes } },
} = require('osrs-api');

console.log(playerTypes);
```

##### Output

```javascript
{
  normal: 'normal',
  ironman: 'ironman',
  ultimateIronman: 'ultimate',
  hardcoreIronman: 'hardcore_ironman',
  deadman: 'deadman',
  seasonal: 'seasonal',
}
```

### Grand Exchange

#### `createGrandExchangeInterface(axiosInstance)`

Used to create an OSRS Grand Exchange interface with a custom instance of [Axios](https://www.npmjs.com/package/axios). Useful if you need to customize how you make HTTP requests. Returns an OSRS Grand Exchange interface.

##### Example

```javascript
const axios = require('axios');
const { grandExchange: { createGrandExchangeInterface } } = require('osrs-api');

const grandExchangeInterface = createGrandExchangeInterface(axios.create());
````

#### `createDefaultGrandExchangeInterface()`

Used to create an OSRS Grand Exchange interface with a default instance of [Axios](https://www.npmjs.com/package/axios). Useful if you don't care about customizing how you make HTTP requests. Returns an OSRS Grand Exchange interface.

##### Example

```javascript
const { grandExchange: { createDefaultGrandExchangeInterface } } = require('osrs-api');

const grandExchangeInterface = createDefaultGrandExchangeInterface();
```

#### `grandExchangeInterface.getItem(itemId)`

Used to retrieve an item's Grand Exchange details. Returns an item's Grand Exchange details.

##### Example

```javascript
const { grandExchange: { createDefaultGrandExchangeInterface } } = require('osrs-api');

const grandExchangeInterface = createDefaultGrandExchangeInterface();
const item = await grandExchange.getItem(2);

console.log(item);
```

##### Output

```javascript
{
  item: {
    icon: 'http://services.runescape.com/m=itemdb_oldschool/1522058952475_obj_sprite.gif?id=2',
    icon_large: 'http://services.runescape.com/m=itemdb_oldschool/1522058952475_obj_big.gif?id=2',
    id: 2,
    type: 'Default',
    typeIcon: 'http://www.runescape.com/img/categories/Default',
    name: 'Cannonball',
    description: 'Ammo for the Dwarf Cannon.',
    current: { trend: 'neutral', price: 166 },
    today: { trend: 'positive', price: '+2' },
    members: 'true',
    day30: { trend: 'negative', change: '-8.0%' },
    day90: { trend: 'negative', change: '-11.0%' },
    day180: { trend: 'negative', change: '-8.0%' },
  }
}
```

#### `grandExchangeInterface.getGraph(itemId)`

Used to retrieve an item's Grand Exchange price data for the last six months. Returns an item's Grand Exchange price data for the last six months.

##### Example

```javascript
const { grandExchange: { createDefaultGrandExchangeInterface } } = require('osrs-api');

const grandExchangeInterface = createDefaultGrandExchangeInterface();
const graph = await grandExchange.getGraph(2);

console.log(graph);
```

##### Output

```javascript
{
  daily: {
    1506729600000: 186,
    // ...
    1522195200000: 166
  },
  average: {
    1506729600000: 185,
    // ...
    1522195200000: 169
  }
}
```
## Future Improvements

1. Addition of utility functions for doing things like flattening player hiscore entries into an array rather than map
2. `getRanks` currently also retrieves ranks slightly outside of the desired range
3. Integration tests to check if schemas are changed