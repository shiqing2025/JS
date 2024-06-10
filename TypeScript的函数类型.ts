// 函数声明
{
  function hello(txt: string) {
    console.log('hello' + txt)
  }
}

// 如果变量被赋值为一个函数，变量的类型有两种写法
{
  // 写法1
  // TypeScript 会自动推断 add 的类型为 (x: number, y: number) => number
  // const add = (x: number, y: number): number => {
  //   return x + y;
  // };
  const add = (x: number, y: number) => {
    return x + y;
  };
}
{
  // 写法2
  // type命令为函数类型定义一个别名，便于指定给其他变量
  // 定义一个函数类型，它表示接受两个 number 类型的参数，并返回一个 number 类型的值
  type AddFunction = (x: number, y: number) => number;

  // 使用函数类型声明变量
  const add1: AddFunction = (a, b) => {
    return a + b;
  };

  // 等同于
  const add2: (x: number, y: number) => number = (a, b) => {
    return a + b
  }
}

type MyObj = {
  x: number;
  y: number,
};

// 在 JavaScript 语言内部，所有的数值属性名都会自动转为字符串属性名
type T1 = {
  [property: number]: string
}

const obj: T1 = {
  1: "one",
  2: "two",
  3: "three",
};

console.log(obj['1']); // 输出 "one"

{
  type Options = {
    a?: number;
    b?: number;
    c?: number;
    [x: string]: number|undefined;
  };

  const opts = { d: 123 };

  const obj: Options = opts;
}

{
  // 结构类型原则/鸭子类型原则
  interface Duck {
    walk: () => void;
    quack: () => void;
  }
  
  class MallardDuck {
    walk() {
      console.log("MallardDuck is walking");
    }
    quack() {
      console.log("MallardDuck is quacking");
    }
  }
  
  const duck: Duck = new MallardDuck(); // 类型检查通过，因为 MallardDuck 具有与 Duck 相同的结构
}

{
  class Point {
    x: number;
    y: number;
  
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
  }
  
  // 作为类型使用时，类名只能表示实例的类型，不能表示类的自身类型。
  // 要获得一个类的自身类型，一个简便的方法就是使用 typeof 运算符。
  // 注意，createPoint()的返回值类型是Point，代表实例类型
  function createPoint(PointClass: typeof Point, x: number, y: number): Point {
    return new PointClass(x, y);
  }
}


{
  // 字符串 Enum 作为一种类型，有限定函数参数的作用
  
  // 如果函数的参数类型是字符串 Enum，传参时就不能直接传入字符串，而要传入 Enum 成员
  enum MyEnum {
    One = "One",
    Two = "Two",
  }
  
  function f(arg: MyEnum) {
    return "arg is " + arg;
  }
  
  f(MyEnum.One); // 参数类型是MyEnum，直接传入字符串会报错
}

{
  interface T {
    0: boolean;
    a: string;
    b(): void;
  }
  
  type KeyT = keyof T;
}