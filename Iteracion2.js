//2.1

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}
let {title: titulo,gender: genero,year:anno} = game

console.log(titulo)
console.log(genero)
console.log(anno)

//2.2
const fruits = ['Banana', 'Strawberry', 'Orange'];

let [fruit1,fruit2,fruit3]= fruits

console.log(fruit1)
console.log(fruit2)
console.log(fruit3)

//2.3
const animalFunction = () => {
    const animales={name: 'Bengal Tiger', race: 'Tiger'};
    const {name,race} = animales;
    return ([name,race])
};

console.log(animalFunction())

//2.4
const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }
const {name,itv}=car;
const [ano1,ano2,ano3]=car.itv;
console.log(name);
console.log(ano1,ano2,ano3)
