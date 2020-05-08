// 抽象类与多态
abstract class Animal {
  run () { console.log('it is running') }
  abstract eat (): void // 抽象方法(不指定具体实现)
}

// console.log(new Animal()) // 无法创建实例

class Dog extends Animal {
  readonly type: string = 'Dog'
  constructor (public name: string) {
    super()
    this.name = name
  }
  eat () { console.log('dog eat bones') }
}

class Cat extends Animal {
  readonly type: string = 'Cat'
  constructor (public name: string) {
    super()
    this.name = name
  }
  eat () { console.log('cat eat fish') }
}
const dog = new Dog('husky')
const cat = new Cat('bule cat')

const animals: Animal[] = [dog, cat]

animals.forEach(item => item.eat())


// this 与 链式调用
class Todo {
  do1 () {
    console.log('to do 1')
    return this
  }

  do2 () {
    console.log('to do 2')
    return this
  }
}

const todo = new Todo()
todo.do1().do2()


class Work extends Todo {
  constructor () {
    super()
  }
  work1 () {
    console.log('work 1')
    return this
  }
  work2 () {
    console.log('work 2')
    return this
  }
}