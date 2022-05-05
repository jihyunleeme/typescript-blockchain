// # 01~02의 내용
const player : {
    name: string, 
    age?: number
} = {
    name: 'nico'
}

// 1. optional 
// (property)? age: number | undefined

if (player.age  && player.age < 10 ) {
    // do something;
}

// 2. type alias
type Player = {
    name: string, 
    age?: number
}

const nico1 : Player = { 
    name : 'nico'
} 

// 3. function에 types 넣어보기
function playMaker(name:string) : Player{
    return {
        name
    }
}

// 3.1 arrow function으로 작성
// const playMaker = (name:string) : Player => ({name})

const nico2 = playMaker('nico');
nico2.age = 12

// 4. readonly
const animal : {
    readonly name: string,
    speak?: string
} = {
    name: 'happy'
}

// 5. 정해진 갯수의 요소를 갖는 array, 순서에 맞는 type을 가져야함
const emplyee: [string, number, boolean] = ['nico', 1, true]

// 6. type checker
// 6.1 unknown 변수의 타입을 모를 때, ex) api 

let a:unknown;
if (typeof a === 'number') {
    let b = a + 1;
}

if (typeof a === 'string') {
    let b = a.toUpperCase();
}

// 6.2 void 아무것도 return 하지 않는 함수
function hello():void { // 꼭 기입해줘야 할 필요는 없음
    console.log('x');
}

// error - void일때 불가능
const a = hello();
a.toUpperCase();


// 6.3 never 
// 함수의 리턴 타입으로 사용. 함수가 예외를 throw 하거나 프로그램 실행 종료를 의미. 리턴 값을 절대로 내보내지 않음.
function fail(msg:string):never {
    throw new Error(msg);
}

// 사용빈도 : void > unknown >>> never