type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }

  add(word: Word) {
    // class를 타입처럼 사용
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }

  def(term: string) {
    return this.words[term];
  }

  deleteTerm(term: string) {
    if (this.words[term]) {
      delete this.words[term];
    }
  }

  update(word: Word, newDef: string) {
    if (this.words[word.term]) {
      this.words[word.term] = newDef;
    }
  }

  showAll(): void {
    for (const key of Object.keys(this.words)) {
      console.log(`${key} : ${this.words[key]}`);
    }
  }

  count() {
    return Object.keys(this.words).length;
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "한국의 음식");
const bibimbob = new Word("bibimbob", "밥에 나물과 재료를 넣어 비벼먹는 음식");
const dongchimi = new Word("dongchimi", "김치종류 중 하나");

const food = new Dict();
food.add(bibimbob);
food.add(kimchi);
food.add(dongchimi);
food.def("kimchi");

console.log(food.def("kimchi"));
console.log(food.showAll());
food.deleteTerm("bibimbob");
food.update(dongchimi, "동치미는 무로 만들었습니다");

console.log(food.showAll());
console.log(food.count());

