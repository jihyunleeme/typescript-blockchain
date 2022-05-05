// #03. call signatures
function add01(a:number, b:number) {
    return a + b
}

const add02 = (a:number, b:number) => a+ b

type Add = (a:number, b:number) => number;

const add03:Add = (a, b) => a+b;

// #3.1 overloading
type Muliply = {
    (a:number, b:number): number
    (a:number, b:string): number
}

const multiply:Muliply = (a, b) => {
    if (typeof b === 'string') return a
    return a * b;
}

type Config = {
    path: string,
    state: object,
}

type Push = {
    (path:string):void
    (config:Config):void
}

const push:Push = (config) => {
    if (typeof config === 'string') { console.log(config) }
    else { console.log(config.path, config.state)}
}

// # 3.2 Polymorphism 다형성
type SuperPrint = {
    <TypePlaceHolder>(arr: TypePlaceHolder[]): TypePlaceHolder;
}

const superPrint: SuperPrint = (arr) => arr[0];

const x = superPrint([1,2,3])
const y = superPrint(['1','2','3'])
const z = superPrint([1, true, false, 'hello'])

// #3.3 Generics Recap
type SuperPrint2 = {
    <T, M>(arr: T[], b:M): T;
}

const superPrint2: SuperPrint2 = (arr) => arr[0];

const m = superPrint2([1,2,3], 'hello') 

// # 3.4 conclusion
function superPrint3(T)(a: T[]) {
    return a[0]
}