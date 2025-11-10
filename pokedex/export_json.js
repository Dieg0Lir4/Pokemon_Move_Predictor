const fs = require('fs');
const { Pokedex } = require('./pokedex_data.js');

fs.writeFileSync('pokedex.json', JSON.stringify(Pokedex, null, 2));
