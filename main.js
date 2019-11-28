const roleMinion = require('role.minion')

module.exports.loop = () => {
    let spawn = Game.spawns['Spawn1']

    let creepsNameArr = []
    let creepsArr = []

    if (creepsNameArr < 1) {
        for (var name in Game.creeps) {
            creepsNameArr.push(name)
        }
    }
    


    if (creepsArr.length < 1) {
        newCreepName = Array(10).map(x => Math.random.toString(36).substring(7))
        newCreep = spawn.spawnCreep([WORK, CARRY, MOVE], newCreepName, {memory: {role: 'minion'}})
        if (newCreep >= 0) {
            creepsNameArr.push(newCreepName)
            creepsArr.push(newCreep) 
        }
        
    }


    for (var name in Game.creeps) {
        let creep = Game.creeps[name]
        if (creep.memory.role == 'minion') {
            roleMinion.run(creep)
        }
    }
    console.log(creepsArr)
    console.log(creepsNameArr)

    console.log("yee")


}