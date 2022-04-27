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