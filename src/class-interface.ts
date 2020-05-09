// 定义接口的约束 Fish
interface Fish {
  name: string,
  run(): void
}

// 实现接口
class GoldFish implements Fish {
  constructor (public name: string) {
    this.name = name
  }
  run() { console.log(this.name + ' swin') }
}

let fish = new GoldFish('金鱼')

console.log(fish)


// 接口的继承
interface Parent {
  name: string,
  pGene(): void
}

interface Child extends Parent {
  cGene(): void
}

interface Boy extends Parent, Child {
  bGene(): void
}

// 类 ChildMan 实现接口 Boy,必须声明接口约束的成员 bGene(), name, pGene(), cGene()

class ChildMan implements Boy {
  constructor (public name: string) {
  }
  pGene () {}
  bGene () {}
  cGene () {}
}



// 类继承接口
class You {
  type: string = 'you'
  constructor (public name: string) {
    this.name = name
  }
  showName () { console.log(this.name) }
  private showIt () { return this }
}

interface YouInterface extends You{

}

class SubYou extends You implements YouInterface {
  // 由于子类 SubYou 继承基类 You,所以在实现接口 YouInterface 时不必再定义 type,name,showName 等继承来的属性
}

// class threeYou implements YouInterface {
//   type = 'three you'
//   name = 'gaerg'
//   showName () {}
//   // 接口 YouInterface 包含所继承的私有成员 showIt()
//   // protected showIt () { return this } // 提示 showIt() 为 YouInterface 私有,不能在 threeYou.
// }