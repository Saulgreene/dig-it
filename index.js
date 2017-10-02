'use strict';
// const $ = require('jQuery');

function findLong(long){
  let long2;
  long < 0 ? long2 = (long + 180) : long2 = (long - 180);
  return long2;
}

function findLat(lat){
  let lat2;
  lat < 0 ? lat2 = (Math.abs(lat)) : lat2 = (lat - (lat * 2));
  return lat2;
}




console.log('Longitude: ' + (findLong(20.7658)));
console.log('Latiutude: ' + (findLat(-60.7789)));
