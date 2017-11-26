const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('model/db.json')
const db = low(adapter)
const fs = require('fs');

// add support for ids
const lodashId = require('lodash-id')
db._.mixin(lodashId)

// Set some defaults
db.defaults({ recipes: [] })
    .write()

// Create recipes array if not exists
const recipes = db.get('recipes').value()

// Seed if db is empty
if (recipes.length === 0){
    // Read the seed file
    const seedJSON = JSON.parse(fs.readFileSync('model/seed.json'))
    db.set('recipes', seedJSON.recipes)
      .write()
}

module.exports = db;