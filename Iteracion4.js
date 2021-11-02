//4.1
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const usernames=users.map(function(x){return(x.name)});
console.log(usernames)

//4.2
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
const userfiltered=users.map(function(x){
    let temp = Object.assign({}, x);
    if (temp.name.startsWith('A')){
        temp.name='Anacleto';
        
    }
    return(temp)
    
})
console.log(userfiltered)

//4.3

const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const citieschanged=cities.map(function(x){
	let temp = Object.assign({}, x);
  if (temp.isVisited==true){
  temp.name=temp.name+'-Visitado'
  }
  return(temp)
})

console.log(citieschanged);
