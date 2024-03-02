import allNeighborhoodsData from './allNeighborhoodsData.json' with {type: 'json'}

console.log(allNeighborhoodsData.reduce((acc, cur) => acc + cur.units.length, 0))