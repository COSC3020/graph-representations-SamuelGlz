const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');


JSON.stringify(convertToAdjList([[0,1,0],[1,0,0],[1,1,0]])) == JSON.stringify([[2],[1],[1,2]]);
 
JSON.stringify(convertToAdjList([[0,1],[0,0]])) == JSON.stringify([[2],[]]);
 
JSON.stringify(convertToAdjList([])) == JSON.stringify([]);

JSON.stringify(convertToAdjList([[0,1,8],[0,0]])) == JSON.stringify([[2],[]]);
