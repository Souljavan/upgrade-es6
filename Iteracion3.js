//3.1
const pointsList = [32, 54, 21, 64, 75, 43];
const newpointList=[...pointsList];
console.log(newpointList)

//3.2
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const newtoy={...toy}
console.log(newtoy)

//3.3
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

const mixpoints=[...pointsList,...pointsLis2];
console.log(mixpoints);

//3.4
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

constmixtoys={...toy,...toyUpdate};
console.log(constmixtoys);

//3.5
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const colorsfilter=[...colors.slice(0,2),...colors.slice(3)];
console.log(colorsfilter)

