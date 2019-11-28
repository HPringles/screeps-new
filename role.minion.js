module.exports = {
    run: function(creep) {
        console.log("!")
        console.log(creep.store)
        console.log(Game.spawns['Spawn1'].store.getFreeCapacity(RESOURCE_ENERGY))
        if(creep.store.getFreeCapacity(RESOURCE_ENERGY) >= 1) {
            console.log("hyear")
            let sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }
        else if (Game.spawns['Spawn1'].store.getFreeCapacity(RESOURCE_ENERGY) >= 1) {
            if (creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns['Spawn1'])
            }
        }
    }
}