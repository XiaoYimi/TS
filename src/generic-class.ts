// 泛型类与泛型约束

// 泛型类(泛型类无法约束 static 成员)
class Log<T> {
  constructor () {

  }
  run (val: T) {
    console.log(val)
    return val
  }
  // static swin (val: T) { return val } // 报错,泛型不能约束静态成员
}

// 不指定类型
let myLog = new Log()
myLog.run(123456)
myLog.run('aegr')
myLog.run({a: 1})

// 指定类型
let myLog1 = new Log<number>()
myLog1.run(76531)


// 泛型约束

interface Length {
  length: number
}

function Obj<T extends Length>(val: T): T {
  console.log(val, val.length)
  return val
}

Obj([12,456])
Obj('htrs4g56')