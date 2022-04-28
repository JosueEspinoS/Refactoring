const Reader = require('./lib/utils/Reader');
const ExplorerService = require('./lib/services/ExplorerService')
// Part 1 Read json file ===========================
const explorers = Reader.readJsonFile('explorers.json');
console.log(explorers);

// Part 2: Get the quantity of explorers names in node
console.log(ExplorerService.filterByMission(explorers,"node"));
