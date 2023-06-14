const http = require('http');
const data = require('./utils/data.js')

http.createServer((req,res) => {
  
  res.setHeader('Access-Control-Allow-Origin', '*');
  const { url } = req;


  if( url.includes('/rickandmorty/character')){
    const id = url.split('/').pop();

    const characterId = Number(id);

    const character = data.find((character) => character.id === characterId);

    res.writeHead(200, {'Content-Type' : 'application/json'})
    return res.end( JSON.stringify(character));
  } 

}).listen(3001, 'localhost');