/* # 4.0 Classes */
abstract class User {
  constructor(
    protected firstName: string,
    protected lastName: string,
    nickname: string // public
  ) {}
  abstract getNickName(): void; // 추상 메서드

  public getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Player extends User {
  getNickName() {
    console.log(this.nickname);
  }
}

const nico = new Player("nico", "las", "니꼬");

// nico.firstName //property 'firstname' is private and only accessible within class 'Player'
nico.nickname;

// 추상클래스로 새로운 인스턴스 생성 불가
// 상속만 가능

console.log(nico.getFullName());

// private 클래스 밖에서 불가능, 상속한 자식 클래서에서 접근 불가능
// protected 클래스 밖에서 불가능하지만, 자식 클래스에서 접근 가능!

