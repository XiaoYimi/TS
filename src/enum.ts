console.log('enum.ts')

enum enumRole {
  Reader,
  Writer,
  Adminer
}
console.log(enumRole)

// 异构枚举
enum enumBool {
  N,
  Y = 'Yes'
}
console.log(enumBool)

// 枚举分类 (const, computed)
// const 

enum enumConst {
  a,
  b = 'ok',
  c = 45
}
console.log(enumConst)

enum enumComputed {
  a = Math.random(),
  b = 'str'.length
}
console.log(enumComputed)


// 枚举类型
enum enumUnTypes {
  a,
  b
}

enum enumNumbers {
  a = 12,
  b = 24
}

enum numChar {
  a = 'str a',
  b = 'str b'
}

let enumA : enumUnTypes.a = 110
let enumB : enumNumbers.a = 120

// enumA === enumB // (不是同个枚举下的成员类型)

let enumC : enumNumbers.a = 123
let enumD : enumNumbers.b = 456
let enumE : enumNumbers.b = 789
// enumC === enumD // (不是同个枚举下的成员类型)
console.log(enumD === enumE) // 同个枚举下的枚举成员类型