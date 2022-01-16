// Inicia em http://localhost:1234/

console.log('Hello World, TypeScript!');

// we can type our variables.
function sum(a: number, b: number) {
    return a + b;
}
sum(2, 2);

// Interfaces

interface IAnimal {
    name: string,
    type: 'terrestrial' | 'aquatic'
}

const animal: IAnimal = {
    name: 'Elefante',
    type: 'terrestrial'
};

interface IFeline extends IAnimal {
    nightVision: boolean,
    roar(level: number): void
};

interface ICanine extends IAnimal {
    isFriendly: boolean
}

const feline: IFeline = {
    name:'Leão',
    type: 'terrestrial',
    nightVision: false,

    roar: (level) => (`${level}dB`) 
}

feline.roar(10);

// type

type IDomestic = IFeline | ICanine; // can join too: &

const animal2: IDomestic = {
    name: 'Cachorro',
    type: 'terrestrial',
    isFriendly: true
}