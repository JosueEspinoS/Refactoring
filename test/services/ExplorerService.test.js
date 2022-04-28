const ExplorerService = require('./../../lib/services/ExplorerService')

describe("Test para ExplorerService", () => {
    test("Requerimiento 1: calcular todos los explorer con mission 'node'",() => {
        const explorers = [{mission: "node"},{mission: "Java"}]
        const explorerInNode = ExplorerService.filterByMission(explorers,"node")
        expect(explorerInNode.length).toBe(1)
    })
})