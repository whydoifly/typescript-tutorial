let greet: Function;

greet = () => {
    console.log('hello again, world');
}

const add = (a: number, b: number, c: number | string = 10): void => {
    console.log(a + b);
    console.log(c);
}

add(5, 10, 20);

const minus = (a: number, b: number) => {
    return a + b;
}

let result = minus(10, 7);