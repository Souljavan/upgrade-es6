//5.1
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const agesfiltered=ages.filter(ages => ages>18)
console.log(agesfiltered)

//5.2
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const agespar=ages.filter(ages => ages%2===0)
console.log(agespar)

//5.3
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const streamerslol=streamers.filter(streamers => streamers.gameMorePlayed=='League of Legends')
console.log(streamerslol);

//5.4
const streamers54 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const streamersconu=streamers54.filter(streamers54 => streamers54.name.includes('u'))
console.log(streamersconu);

//5.5
const streamers55 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const streamersmodif55=streamers55.filter(function (x){
    if (x.gameMorePlayed.includes('Legends')){
    	if (x.age>35){
      x.gameMorePlayed=x.gameMorePlayed.toUpperCase()
      }
      return (x)
    }
 
})
console.log(streamersmodif55)