const config = require('config.json');
const db = require('boardhorde/db');
const Events = db.events;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await Events.find().select('-hash');
}

async function getById(id) {
    return await Events.findById(id).select('-hash');
}

async function create(eventParam) {
    // Validation
    if (await Events.findOne({ name: eventParam.name })) {
        throw 'Event Name "' + eventParam.name + '" is already taken';
    }

    const event = new Event(eventParam);

    // Save event
    await event.save();
}

async function update(id, eventParam) {
    const event = await Events.findById(id);

    // Validation
    if (!event) throw 'Event not found';
    if (event.name !== eventParam.name && await Event.findOne({ name: eventParam.name })) {
        throw 'Event Name "' + eventParam.name + '" is already taken';
    }

    // Copy eventParam properties to event
    Object.assign(event, eventParam);

    await event.save();
}

async function _delete(id) {
    await Event.findByIdAndRemove(id);
}