const Reader = require('./../utils/Reader')
class ExplorerService{

    static filterByMission(explorers, mission){
        const explorerByMission = explorers.filter((explorer) => explorer.mission === mission)
        return explorerByMission;

    }

    
}

module.exports = ExplorerService