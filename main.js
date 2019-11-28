module.exports.loop = () => {
    let spawn = Game.spawns['Spawn1']

    creepsNameArr = []
    creepsArr = []
    if (creepsArr.length < 1) {
        newCreepName = Array(10).map(x => Math.random.toString(36).substring(7))
        newCreep = spawn.spawnCreep([WORK, CARRY, MOVE], newCreepName, {memory: {role: 'minion'}})
        creepsNameArr.push(newCreepName)
        creepsArr.push(newCreep)
    }
    print(creepsArr)
    print(creepsNameArr)

    console.log("yee")


}