const roleMinion = require('role.minion')

function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}


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
        newCreepName = create_UUID()
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



}