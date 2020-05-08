// 类的实现与继承以及修饰符

class ClsDog {
  constructor (public name: string, protected color: string) {
    // 类的实例属性
    this.name = name
  }
  showName () { console.log(this.name) }
  // 私有成员
  private priClass () { console.log('private ClsDog') }
  // 受保护的成员
  protected proClass () { console.log('protected ClsDog') }

  readonly attr: string = '只读属性'

  static author: string = '晨风不可依米'
}

const dog1 = new ClsDog('dog1', 'red')
console.log(dog1) // 实例
console.log(ClsDog.prototype) // 原型对象
// console.log(dog1.priClass()) // 提示只能类本身访问, 实例无法访问
// console.log(dog1.proClass()) // 提示只能类本身和子类可访问, 实例无法访问
console.log(dog1.attr)
// console.log(dog1.author) // 提示为静态成员,实例无法访问
console.log(ClsDog.author)

class ClsHusky extends ClsDog {
  constructor (public name: string, protected color: string) {
    super(name, color)
    this.color = color

    // this.priClass() //提示子类无法访问,只能由类 ClsDog 访问
    this.proClass() // 子类可访问基类的受保护成员
    console.log(this.attr)
    // console.log(super.author) // 无法通过 super 访问静态;可理解 super 为基类的实例化对象
  }
}

const husky = new ClsHusky('husky', 'yellow')
// husky.priClass() //提示子类实例无法访问,只能由类 ClsDog 访问
// console.log(husky.proClass()) //提示子类实例无法访问,只能由类本身或子类访问
console.log(husky.attr) // 类的只读属性可被子类实例属性访问
console.log(ClsHusky.author)


