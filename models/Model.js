const mongoose = require('mongoose')

const TimelineSchema = new mongoose.Schema({

})

const GamesSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: Image,
    year: Number,
    console: String,

})

const CharacterSchema = new mongoose.Schema({
    name: String,
    image: Image,
    description: String,
    race: String,
    age: Number,
    appearance: String,

})

const HistorySchema = new mongoose.Schema({

})

const Timeline = mongoose.model('Timeline', TimelineSchema )
const Games = mongoose.model('Games', GamesSchema )
const Characters = mongoose.model('Character', CharacterSchema )
const History = mongoose.model('History', HistorySchema )

module.exports =  Timeline, Games, Characters, History