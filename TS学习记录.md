https://wangdoc.com/typescript/intro



1. 基本类型：number, string, boolean, null, undefined, symbol, bigint 等
2. 复合类型：object, array, tuple, function 等
3. 类型别名：使用 `type` 关键字为一个类型起一个别名
4. 联合类型：使用 `|` 符号表示一个值可以是多种类型之一
5. 交叉类型：使用 `&` 符号表示一个值必须同时满足多种类型
6. 类型断言：使用 `as` 关键字强制将一个类型转换为另一个类型
7. 类型保护(类型缩小)：通过特定的条件判断，缩小类型的范围
8. 类型推断：TypeScript 根据变量的使用情况自动推断其类型
9. 映射类型：使用 `keyof` 和 `in` 操作符创建新类型，它们是基于另一个类型的属性进行映射的
10. 条件类型：使用 `extends` 和 `?` 操作符根据条件创建新类型
11. 索引类型：使用 `keyof` 和 `IndexedAccessType` 获取对象类型的属性类型
12. 工具类型：TypeScript 内置了一些常用的工具类型，如 `Partial`, `Required`, `Readonly`, `Exclude`, `Extract`, `Omit` 等
13. 类型约束：通过关键字 `extend` 进行约束，不同于在 `class` 后使用 `extends` 的继承作用，**泛型内使用的主要作用是对泛型加以约束**



## 1、TS 语言简介

1. 概述

   > TS 对 Js 添加的最主要部分，就是一个**独立的类型系统**。

2. 类型的概念

   > **类型是人为添加的一种编程约束和用法提示**
   >
   > **类型的本质是一种约束和描述，它定义了变量、参数或函数返回值所期望的数据结构和形状。**
   >
   > - 帮助我们在编写代码时捕获潜在的类型错误，提高代码的健壮性和可维护性。
   > - 为编辑器和 IDE 提供了更好的智能提示和自动补全功能，提高了开发效率。
   > - 帮助我们更清晰地表达代码的意图，提高代码的可读性。

3. 动态类型和静态类型

   > JS 的类型系统非常弱，而且没有使用限制，运算符可以接受各种类型的值。在语法上，JS 属于动态类型语言。

   > TypeScript 引入了一个更强大、更严格的类型系统，属于静态类型语言。

4. 静态类型的优点

   > - 有利于代码的静态分析。
   > - 有利于发现错误。
   > - 更好的 IDE 支持，做到语法提示和自动补全。
   > - 提供了代码文档。
   > - 有助于代码重构。

5. 静态类型的缺点

   > - 丧失了动态类型的代码灵活性。
   > - 增加了编程工作量。
   > - 更高的学习成本。
   > - 引入了独立的编译步骤。
   > - 兼容性问题。

6. TS的历史

   > 2012年，微软公司宣布推出 TypeScript 语言，设计者是著名的编程语言设计大师 Anders Hejlsberg，他也是 C# 和 .NET 的设计师。
   >
   > ... 
   >
   > 2023年，TypeScript 5.0 版本发布。

7. 如何学习

   > 学习 TypeScript，必须先了解 JavaScript 的语法。因为真正的实际功能都是 JavaScript 引擎完成的，TypeScript 只是添加了一个类型系统。
   >
   > > 不完全是的。TypeScript 不仅添加了静态类型检查，还添加了许多新的语言特性，比如枚举、泛型、命名空间、装饰器等。此外，TypeScript 还支持最新的 ECMAScript 标准特性，包括模块、箭头函数、类等。因此，TypeScript 可以被视为 JavaScript 的一个超集。-- from GPT



## 2、TS 基本用法

1. 类型声明

   > TypeScript 允许在变量、函数参数和返回值、对象属性等地方声明类型。这样，TypeScript 编译器就可以检查代码中的类型是否匹配。类型声明可以使用内置类型（如 `number`、`string`、`boolean` 等）或自定义类型（如接口、类）
   >
   > ```js
   > let num: number = 42;
   > function greet(name: string): string {
   >   return `Hello, ${name}!`;
   > }
   > ```

2. 类型推断

   > TypeScript 编译器可以根据变量的初始值、函数的返回值等信息自动推断出类型。这样，开发者可以省略部分类型声明，让代码更简洁

3. TS的编译

   > TypeScript 代码需要编译成 JavaScript 代码才能在浏览器或 Node.js 环境中运行。TypeScript **编译器（`tsc`）**会检查代码中的类型错误、语法错误等问题，并根据配置生成对应版本的 JavaScript 代码

4. 值与类型

   > TypeScript 中的值（例如变量、函数、对象等）都有对应的类型。类型定义了值的结构和允许的操作。例如，`number` 类型的值可以进行加减乘除等数学运算，而 `string` 类型的值可以进行字符串拼接、查找子串等操作

5. TS Playground

   > TS Playground 是一个在线的 TypeScript 编辑器，允许开发者在网页中编写、运行和分享 TypeScript 代码。TS Playground 还提供了类型检查、代码提示等功能，帮助开发者更轻松地学习和使用 TypeScript。网址：https://www.typescriptlang.org/play

6. tsc 编译器

   > `tsc`（TypeScript Compiler）是 TypeScript 的官方编译器，用于将 TypeScript 代码编译成 JavaScript 代码。`tsc` 支持多种编译选项，例如设置目标 JavaScript 版本、模块系统、源映射等。`tsc` 通常通过命令行或配置文件（`tsconfig.json`）使用

7. ts-node 模块

   > `ts-node` 是一个第三方模块，用于在 Node.js 环境中直接运行 TypeScript 代码，而无需先编译成 JavaScript 代码。`ts-node` 非常适合在开发过程中快速测试 TypeScript 代码。



## 3、any unknown never 类型

TypeScript 有两个“顶层类型”（`any`和`unknown`），唯一一个“底层类型”`never`

1. any 类型

   > `any` 类型是 TypeScript 中最宽泛的类型，表示任何可能的值。使用 `any` 类型的变量可以进行任何操作，而不会产生类型错误。
   >
   > 虽然 `any` 类型可以提高代码的灵活性，但它也会削弱 TypeScript 的类型检查能力。因此，尽量避免在代码中使用 `any` 类型
   >
   > - 类型推断问题
   > - 污染问题
   >   - `any`类型除了关闭类型检查，还有一个很大的问题，就是它会“污染”其他变量。它可以**赋值给其他任何类型的变量（因为没有类型检查），导致其他变量出错。**

   > ⚠️ 在 TypeScript（以及 JavaScript）中，使用 `const` 声明的变量被称为常量。
   >
   > **常量在声明时必须进行初始化（赋值）**，并且在之后的代码中不能再次赋值。这样可以确保常量的值在整个程序生命周期内保持不变。

2. unknown 类型

   > `unknown` 类型表示未知类型的值。与 `any` 类型不同，`unknown` 类型的变量在没有类型断言或类型细化(就是“类型缩小”，比如经过 typeof 运算以后 确定实际类型是什么，即将一个不确定的类型缩小为更明确的类型)的情况下不能进行任何操作。这样可以确保类型安全性。`unknown` 类型通常用于表示函数参数或返回值的类型
   >
   > ```js
   > function processValue(value: unknown) {
   >   if (typeof value === "string") {
   >     // 在这个代码块中，TypeScript 知道 value 的类型是 string
   >     console.log(value.toUpperCase());
   >   } else if (typeof value === "number") {
   >     // 在这个代码块中，TypeScript 知道 value 的类型是 number
   >     console.log(value.toFixed(2));
   >   }
   > }
   > ```
   >
   > 总之，`unknown`可以看作是更安全的`any`。一般来说，凡是需要设为`any`类型的地方，通常都应该优先考虑设为`unknown`类型
   >
   > - **解决类型推断问题。** 不能直接调用`unknown`类型变量的方法和属性(`unknown`类型变量能够进行的运算是有限的，只能进行比较运算（运算符`==`、`===`、`!=`、`!==`、`||`、`&&`、`?`）、取反运算（运算符`!`）、`typeof`运算符和`instanceof`运算符这几种，其他运算都会报错。)
   > - **解决“污染”其他变量问题。** `unknown`类型的变量，不能直接赋值给其他类型的变量（除了`any`类型和`unknown`类型）

3. never 类型

   > `never` 类型表示永远不会发生的值。例如，一个抛出异常或陷入死循环的函数的返回值类型就是 `never`。`never` 类型可以赋值给任何类型，但不能将任何类型赋值给 `never` 类型（除非是另一个 `never` 类型的值）。`never` 类型在实际开发中较少直接使用，但它可以帮助 TypeScript 编译器捕获一些潜在的错误。
   >
   > ```js
   > function throwError(message: string): never {
   >   throw new Error(message);
   > }
   > 
   > function infiniteLoop(): never {
   >   while (true) {}
   > }
   > ```



## 4、TS 的类型系统

1. 基本类型

   > TypeScript 中的基本类型包括 `number`、`string`、`boolean`、`null`、`undefined`、`symbol` 、 `bigint` 和` object` 8种类型

2. 包装对象类型

   > JavaScript 的8种类型之中，`undefined`和`null`其实是两个特殊值，`object`属于复合类型，剩下的**五种属于原始类型（primitive value）**，代表最基本的、不可再分的值。
   >
   > 这些包装对象类型提供了一些方法和属性，用于操作原始值。
   >
   > - boolean
   > - string
   > - number
   > - bigint
   > - symbol
   >
   > 上面这五种原始类型的值，都有对应的包装对象（wrapper object）。所谓“包装对象”，指的是这些值在需要时，会自动产生的对象。
   >
   > **五种包装对象之中，symbol 类型和 bigint 类型无法直接获取它们的包装对象**（即`Symbol()`和`BigInt()`不能作为构造函数使用），但是剩下三种可以。
   >
   > - `Boolean()`
   > - `String()`
   > - `Number()`
   >
   > 以上三个构造函数，执行后可以直接获取某个原始类型值的包装对象。

3. Object 类型与 object 类型

   > **`Object` 类型与 `object` 类型：**
   >
   > 在 TypeScript 中，`Object` 类型表示所有非原始值类型的对象，包括函数、数组、类的实例等; `object` 类型表示所有通过字面量或构造函数创建的对象。
   >
   > `Object` 类型是一个泛型类型，可以用于表示任何类型的对象。`object` 类型相对更具体，只表示非原始值类型的对象。

4. undefined 和 null 的特殊性

   > 在 TypeScript 中，`undefined` 和 `null` 是特殊的基本类型，分别表示未定义的值和空值。`undefined` 和 `null` 可以赋值给任何类型的变量。
   >
   > 在严格模式（`strictNullChecks` 选项开启）下，只有 `undefined` 类型的变量可以接受 `undefined` 值，只有 `null` 类型的变量可以接受 `null` 值

5. 值类型

   > TypeScript 规定，单个值也是一种类型，称为“值类型”。
   >
   > 值类型可能会出现一些很奇怪的报错。
   >
   > ```js
   > const x:5 = 4 + 1; // 报错
   > ```
   >
   > 上面示例中，**等号左侧的类型是数值`5`**，等号右侧`4 + 1`的类型，TypeScript 推测为`number`。由于`5`是`number`的子类型，`number`是`5`的父类型，父类型不能赋值给子类型，所以报错了
   >
   > 但是，反过来是可以的，子类型可以赋值给父类型。
   >
   > ```js
   > let x:5 = 5;
   > let y:number = 4 + 1;
   > 
   > x = y; // 报错
   > y = x; // 正确
   > ```
   >
   > 上面示例中，变量`x`属于子类型，变量`y`属于父类型。子类型`x`不能赋值为父类型`y`，但是反过来是可以的。

6. 联合类型

   > 联合类型表示一个值可以是多种类型之一。在 TypeScript 中，联合类型使用 `|` 分隔符表示。
   >
   > “类型缩小”是 TypeScript 处理联合类型的标准方法，凡是遇到可能为多种类型的场合，都需要先**缩小类型，再进行处理**。实际上，联合类型本身可以看成是一种“类型放大”（type widening），处理时就需要“类型缩小”（type narrowing）。

7. 交叉类型

   > 交叉类型（intersection types）指的多个类型组成的一个新类型，使用符号`&`表示。
   >
   > 交叉类型常常用来为对象类型添加新属性。
   >
   > ```js
   > interface A {
   >   a: string;
   > }
   > interface B {
   >   b: number;
   > }
   > type AB = A & B;
   > let ab: AB = { a: "Hello, world!", b: 42 };
   > ```

8. type 命令

   > **`type` 命令用于定义类型别名。**类型别名可以用于简化复杂类型的表示，或将多个类型组合成一个新类型。例如：
   >
   > ```typescript
   > type Point = {
   >   x: number;
   >   y: number;
   > };
   > ```

   > 别名可以让类型的名字变得更有意义，也能增加代码的可读性，还可以使复杂类型用起来更方便，便于以后修改变量的类型。
   >
   > - 别名不允许重名
   > - 别名的作用域是块级作用域
   > - 别名支持使用表达式, 也支持别名嵌套别名
   > - `type`命令属于类型相关的代码，编译成 JavaScript 的时候，会被全部删除

9. typeof 运算符

   > `typeof` 运算符用于获取一个值的类型。`typeof` 运算符可以用于类型断言、类型保护等场景.

10. 块级类型声明

    > 在 TypeScript 中，类型声明可以放在一个独立的块中，用于限制类型的**作用范围**。块级类型声明可以用于模块、命名空间、函数等.

11. 类型的兼容

    > TypeScript 的类型存在兼容关系，某些类型可以兼容其他类型。比如联合类型可以兼容其子类型



## 5、数组

JavaScript 数组在 TypeScript 里面分成两种类型，分别是数组（array）和元组（tuple）

1. 简介

   > 数组的类型有两种写法。
   >
   > - 第一种写法是在数组成员的类型后面，加上一对方括号。
   >
   > ```js
   > let arr:number[] = [1, 2, 3]; 
   > let arr:(number|string)[];
   > ```
   >
   > - 数组类型的第二种写法是使用 TypeScript 内置的 Array 接口
   >
   >   ```js
   >   let arr:Array<number> = [1, 2, 3];
   >   let arr:Array<number|string>;
   >   ```
   >
   >   > **在TS中，`Array`是一个内置的泛型接口，用于描述JS数组的结构和方法。**
   >   >
   >   > 这个接口表示一个数组，数组的元素类型由泛型参数`T`指定。当你创建一个数组时，TypeScript会根据这个接口自动推断数组的类型和可用的方法。
   >   >
   >   > `Array`接口的定义如下：
   >   >
   >   > ```typescript
   >   > interface Array<T> {
   >   >     // 数组的长度
   >   >     length: number;
   >   >     // 根据索引获取元素
   >   >     [index: number]: T;
   >   >     // 其他数组方法，如 push, pop, slice, map 等
   >   >     // ...
   >   > }
   >   > ```
   >   >
   >   > 这个接口描述了数组的基本结构，包括数组的长度属性（`length`）和用于访问元素的索引签名（`[index: number]: T`）。此外，这个接口还包括了许多数组方法，如`push`、`pop`、`slice`、`map`等。
   >   >
   >   > 当你创建一个数组时，例如`let arr: Array<number> = [1, 2, 3]`，TypeScript会根据`Array`接口自动推断数组的类型（`Array<number>`）以及可用的方法。这意味着你可以在数组上调用所有在`Array`接口中定义的方法，如`arr.push(4)`、`arr.slice(0, 2)`等。

2. 数组的类型推断

   >  如果数组变量没有声明类型，TypeScript 就会推断数组成员的类型。这时，推断行为会因为值的不同，而有所不同。
   >
   > 如果变量的初始值是空数组，那么 TypeScript 会推断数组类型是`any[]`。后面，为这个数组赋值时，TypeScript 会自动更新类型推断。
   >
   > ⚠️ 类型推断的自动更新只发生初始值为空数组的情况。如果初始值不是空数组，类型推断就不会更新。

3. 只读数组，const 断言

   > `const`命令声明的数组变量是可以改变成员的, 若不允许变动数组成员，可声明为只读数组
   >
   > - 在数组类型前面加上`readonly`关键字
   > - 两个专门的泛型，用来生成只读数组的类型
   > - 使用“const 断言”
   >
   > ```js
   > const arr:readonly number[] = [0, 1];
   > // or
   > const a1:ReadonlyArray<number> = [0, 1];
   > const a2:Readonly<number[]> = [0, 1];
   > // or
   > const arr = [0, 1] as const;
   > ```

4. 多维数组

   > TypeScript 使用`T[][]`的形式，表示二维数组，`T`是最底层数组成员的类型

   

## 6、元组

1. 简介：
   元组（Tuple）是TypeScript中的一种特殊的类型，它允许你创建一个已知元素数量和类型的数组，各元素的类型并不必相同。例如，你可以定义一个包含`string`和`number`类型的元组。

```typescript
let tuple: [string, number];
tuple = ['hello', 10]; // OK
tuple = [10, 'hello']; // Error
```

2. 只读元组：
   TypeScript也支持只读元组，一旦被初始化后，元组中的元素就不能被改变。你可以使用`readonly`关键字来定义只读元组。

```typescript
let ro: readonly [string, number] = ['hello', 10];
ro[0] = 'world'; // Error
```

3. 成员数量的推断：
   TypeScript编译器会根据元组的定义推断出元组的成员数量，如果你试图访问不存在的元素或添加超过定义数量的元素，TypeScript将给出错误提示。

```typescript
let tuple: [string, number] = ['hello', 10];
console.log(tuple[2]); // Error
tuple[2] = 'world'; // Error
```

4. 扩展运算符与成员数量：
   如果你在元组类型中使用扩展运算符（`...`），那么元组将变为一个无限长度的元组。这意味着你可以添加任意数量的元素，只要它们的类型与扩展运算符后的类型相同。

```typescript
let tuple: [string, ...number[]] = ['hello', 10, 20, 30];
tuple = ['world', 40, 50]; // OK
tuple.push(60); // OK
```

在这个例子中，`tuple`是一个无限长度的元组，它包含一个`string`类型的元素和任意数量的`number`类型的元素。



## 7、symbol 类型

在TypeScript中，`symbol`是一种特殊的原始类型，它表示一个唯一的、不可变的值。`symbol`类型主要用于创建对象的唯一属性名，以避免属性名冲突。以下是关于TypeScript中`symbol`类型的详细介绍：

1. 简介：

   使用`Symbol()`函数可以创建一个新的`symbol`值。每个新创建的`symbol`都是唯一的，即使它们的描述相同。

```typescript
const symbol1 = Symbol('mySymbol');
const symbol2 = Symbol('mySymbol');

console.log(symbol1 === symbol2); // 输出: false
```

2. `unique symbol`：

   在TypeScript中，`unique symbol`是`symbol`类型的一个子类型，它表示一个具有唯一类型的`symbol`值。要创建一个`unique symbol`，你可以使用`const`断言。

```typescript
const symbol1 = Symbol('mySymbol') as const;
const symbol2 = Symbol('mySymbol') as const;

// 类型错误，因为symbol1和symbol2具有唯一的类型
// const symbol3: typeof symbol1 = symbol2;
```

3. 类型推断：

   TypeScript会自动推断`symbol`值的类型。当你使用`Symbol()`函数创建一个`symbol`值时，TypeScript会推断出它的类型为`symbol`。当你使用`const`断言创建一个`unique symbol`时，TypeScript会推断出它的类型为`unique symbol`。

```typescript
const symbol1 = Symbol('mySymbol');
type SymbolType1 = typeof symbol1; // symbol

const symbol2 = Symbol('mySymbol') as const;
type SymbolType2 = typeof symbol2; // unique symbol
```

在TypeScript中使用`symbol`类型时，要注意以下几点：

- `symbol`类型的值不能与其他类型的值进行运算。
- 使用`symbol`作为对象的属性名时，需要使用`[]`语法。
- 为了在不同模块或作用域中共享`symbol`值，可以使用`Symbol.for()`和`Symbol.keyFor()`函数。

```typescript
// 使用symbol作为对象的属性名
const mySymbol = Symbol('mySymbol');
const obj = {
  [mySymbol]: 'Hello, world!',
};

console.log(obj[mySymbol]); // 输出: Hello, world!

// 共享symbol值
const sharedSymbol = Symbol.for('sharedSymbol');
const sharedSymbol2 = Symbol.for('sharedSymbol');

console.log(sharedSymbol === sharedSymbol2); // 输出: true
console.log(Symbol.keyFor(sharedSymbol)); // 输出: sharedSymbol
```

> **扩展：`Symbol.for()`和`Symbol.keyFor()`函数**
>
> `Symbol.for()`和`Symbol.keyFor()`函数是JavaScript中的全局`Symbol`注册表相关的方法。它们允许你在不同模块或作用域中共享和查找`symbol`值。以下是关于这两个函数的详细介绍：
>
> 1. `Symbol.for(key: string): symbol`：
>
>    `Symbol.for()`函数接受一个字符串参数`key`，并在全局`Symbol`注册表中查找具有相同`key`的`symbol`值。如果找到了一个匹配的`symbol`值，该函数将返回该值；否则，它将创建一个新的`symbol`值，并使用给定的`key`将其添加到全局注册表中。
>
>    这意味着，当你多次调用`Symbol.for()`函数并传入相同的`key`时，它将返回相同的`symbol`值。这使得你可以在不同模块或作用域中共享`symbol`值。
>
> ```javascript
> const symbol1 = Symbol.for('mySymbol');
> const symbol2 = Symbol.for('mySymbol');
> 
> console.log(symbol1 === symbol2); // 输出: true
> ```
>
> 2. `Symbol.keyFor(sym: symbol): string | undefined`：
>
>    `Symbol.keyFor()`函数接受一个`symbol`参数`sym`，并在全局`Symbol`注册表中查找与之关联的`key`。如果找到了匹配的`key`，该函数将返回该`key`；否则，它将返回`undefined`。
>
>    这使得你可以根据`symbol`值查找其在全局注册表中的`key`。
>
> ```javascript
> const symbol = Symbol.for('mySymbol');
> const key = Symbol.keyFor(symbol);
> 
> console.log(key); // 输出: mySymbol
> ```
>
> 需要注意的是，`Symbol.keyFor()`函数只能用于查找通过`Symbol.for()`函数创建的`symbol`值。对于直接使用`Symbol()`函数创建的`symbol`值，`Symbol.keyFor()`将返回`undefined`。
>
> ```javascript
> const symbol = Symbol('mySymbol');
> const key = Symbol.keyFor(symbol);
> 
> console.log(key); // 输出: undefined
> ```



## 8、函数

> 在 TypeScript 中，函数是一种特殊的对象，它可以被调用。TypeScript 提供了丰富的语法和特性来描述和使用函数。以下是关于 TypeScript 函数类型的详细介绍：
>
> **简介**
>
> TypeScript 提供了多种方式来描述函数类型，包括函数声明、函数表达式、箭头函数等。函数类型包括参数类型和返回值类型。
>
> **Function 类型**
>
> 在 TypeScript 中，你可以使用接口或类型别名来描述函数类型。函数类型包括参数类型列表和返回值类型。
>
> ```typescript
> type GreetFunction = (name: string) => string;
> ```
>
> **箭头函数**
>
> 箭头函数是 ES6 引入的一种新的函数语法，它更简洁，且不绑定自己的 `this`。在 TypeScript 中，你可以使用箭头函数，并为参数和返回值添加类型注解。
>
> ```typescript
> const greet: GreetFunction = (name) => `Hello, ${name}`;
> ```
>
> **可选参数**
>
> 在 TypeScript 中，你可以使用 `?` 来标记函数的可选参数。
>
> ```typescript
> function greet(name?: string) {
>   // ...
> }
> ```
>
> **参数默认值**
>
> 在 TypeScript 中，你可以为函数参数提供默认值。
>
> ```typescript
> function greet(name = "World") {
>   // ...
> }
> ```
>
> **参数解构**
>
> 在 TypeScript 中，你可以使用解构语法来解构函数的参数。
>
> ```typescript
> function greet({ name }: { name: string }) {
>   // ...
> }
> ```
>
> **rest 参数**
>
> 在 TypeScript 中，你可以使用 `...` 语法来定义 rest 参数，它表示函数的剩余参数。
>
> ```typescript
> function greet(name: string, ...args: string[]) {
>   // ...
> }
> ```
>
> **readonly 只读参数**
>
> 在 TypeScript 中，你可以使用 `readonly` 关键字来标记只读参数。
>
> ```typescript
> function greet(readonly name: string) {
>   // ...
> }
> ```
>
> **void 类型**
>
> `void` 类型表示函数没有返回值。
>
> ```typescript
> function greet(name: string): void {
>   console.log(`Hello, ${name}`);
> }
> ```
>
> **never 类型**
>
> `never` 类型表示函数永远不会返回。
>
> ```typescript
> function error(message: string): never {
>   throw new Error(message);
> }
> ```
>
> **局部类型**
>
> 在 TypeScript 中，你可以在函数内部定义类型。
>
> ```typescript
> function greet(name: string) {
>   type Greeting = string;
>   // ...
> }
> ```
>
> **高阶函数**
>
> 高阶函数是接受函数作为参数或返回函数的函数。
>
> ```typescript
> function createGreet(greeting: string): GreetFunction {
>   return (name) => `${greeting}, ${name}`;
> }
> ```
>
> **函数重载**
>
> 函数重载允许你为同一个函数提供多个函数类型定义。
>
> ```typescript
> function greet(name: string): string;
> function greet(): void;
> function greet(name?: string) {
>   // ...
> }
> ```
>
> **构造函数**
>
> 在 TypeScript 中，你可以使用 `new` 关键字来定义构造函数类型。
>
> ```typescript
> type AnimalConstructor = new () => Animal;
> ```
>
> 以上就是 TypeScript 函数类型的详细介绍。TypeScript 提供了丰富的语法和特性来描述和使用函数，使得我们可以更灵活和准确地表达函数的行为。



## 9、对象

1. **简介**

在 TypeScript 中，对象类型用于描述对象的结构，包括对象的属性名、属性值类型以及方法。对象类型可以使用接口（Interfaces）或类型别名（Type Aliases）来定义。以下是一个使用接口定义对象类型的示例：

```typescript
interface Person {
  name: string;
  age: number;
}
```

2. **可选属性**

在对象类型中，可以使用 `?` 标记可选属性。可选属性表示对象的该属性可能不存在。

```typescript
interface Person {
  name: string;
  age?: number; // 可选属性
}
```

3. **只读属性**

使用 `readonly` 关键字可以将对象类型的属性标记为只读。只读属性在对象创建后不能被修改。

```typescript
interface Person {
  readonly name: string;
  age: number;
}
```

4. **属性名的索引类型**

索引类型允许您使用索引签名来描述对象属性的类型。索引签名定义了属性名的类型（通常为 `string` 或 `number`）和属性值的类型。

```typescript
interface StringDictionary {
  [key: string]: string;
}
```

5. **解构赋值**

解构赋值允许您从对象中提取属性并将其赋值给变量。在 TypeScript 中，解构赋值会根据对象类型检查类型的正确性。

```typescript
const person: Person = { name: "Alice", age: 30 };
const { name, age } = person;
```

6. **结构类型原则**

TypeScript 使用结构类型原则（也称为鸭子类型）来进行类型检查。这意味着只要两个对象具有相同的结构（即相同的属性名和属性值类型），它们就被认为是相同的类型。

```typescript
interface Person {
  name: string;
  age: number;
}

const person = { name: "Alice", age: 30 }; // 结构与 Person 相同
const p: Person = person; // 类型检查通过
```

7. **严格字面量检查**

在 TypeScript 的严格模式下（`strict` 配置项为 `true`），对象字面量会进行额外的类型检查，以确保对象具有声明的类型。这可能导致一些看似合理的代码在类型检查时报错。

```typescript
interface Person {
  name: string;
  age: number;
}

const p: Person = { name: "Alice", age: 30, gender: "female" }; // 类型检查错误，因为存在未声明的属性 gender
```

8. **最小可选属性规则**

在 TypeScript 中，对象类型的可选属性遵循最小可选属性规则。这意味着当一个对象类型具有可选属性时，只要满足必需属性的要求，就可以将具有更少属性的对象赋值给该类型。

```typescript
interface Person {
  name: string;
  age?: number;
}

const p: Person = { name: "Alice" }; // 类型检查通过，尽管缺少可选属性 age
```

9. **空对象**

空对象类型表示一个没有任何属性的对象。在 TypeScript 中，可以使用 `{}` 类型表示空对象类型。

```typescript
type EmptyObject = {};

const empty: EmptyObject = {}; // 空对象类型示例
```

对象类型是 TypeScript 中的一个核心概念，它允许您准确地**描述对象的结构，包括属性名、属性值类型以及方法**。通过了解这些知识点，可以更有效地使用 TypeScript 进行类型安全的编程。

> 扩展： 为什么 结构类型原则也称为鸭子类型？
>
> 结构类型原则（Structural Typing）也称为鸭子类型（Duck Typing），这个术语来源于一个叫做“鸭子测试”的概念：“如果它看起来像一只鸭子，游起来像一只鸭子，叫起来也像一只鸭子，那么它很可能就是一只鸭子。”
>
> 在编程语言中，鸭子类型是一种动态类型的子类，它关注对象的行为，而不关注对象所属的具体类或继承关系。换句话说，鸭子类型关注对象“能做什么”，而不是对象“是什么”。
>
> **TypeScript 使用结构类型原则进行类型检查，这意味着只要两个对象具有相同的结构（即相同的属性名和属性值类型），它们就被认为是相同的类型，而不管它们的类或接口定义如何。**这种类型检查方式与鸭子类型的概念相似，因此也称为鸭子类型。
>
> 以下是一个 TypeScript 中的鸭子类型示例：
>
> ```typescript
> interface Duck {
>   walk: () => void;
>   quack: () => void;
> }
> 
> class MallardDuck {
>   walk() {
>     console.log("MallardDuck is walking");
>   }
>   quack() {
>     console.log("MallardDuck is quacking");
>   }
> }
> 
> const duck: Duck = new MallardDuck(); // 类型检查通过，因为 MallardDuck 具有与 Duck 相同的结构
> ```
>
> 在这个例子中，尽管 `MallardDuck` 类没有显式地实现 `Duck` 接口，但它具有与 `Duck` 接口相同的结构（即相同的 `walk` 和 `quack` 方法），因此可以将 `MallardDuck` 的实例赋值给 `Duck` 类型的变量。这就是 TypeScript 中鸭子类型的体现。



## 10、interface

### **概念**

在 TypeScript 中，接口（`interface`）是一种强大的方式来定义和描述对象或函数的类型。接口可以帮助我们确保对象或函数具有特定的结构和行为，使得我们的代码更加健壮和可维护。

### **interface 的继承**

接口可以使用 `extends` 关键字来扩展其他接口、类型别名（`type`）或类（`class`）。这意味着接口可以继承其他接口中的属性和方法。

1. **interface 继承 interface**

接口可以继承其他接口，从而扩展其属性和方法。

```typescript
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  position: string;
}
```

2. **interface 继承 type**

接口可以继承类型别名（`type`），从而扩展其属性和方法。

```typescript
type Person = {
  name: string;
  age: number;
};

interface Employee extends Person {
  position: string;
}
```

3. **interface 继承 class**

接口可以继承类（`class`），从而扩展其属性和方法。

```typescript
class Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  position: string;
}
```

### **接口合并**

在 TypeScript 中，具有相同名称的接口会自动合并。这意味着如果在多个地方声明相同名称的接口，它们的属性和方法将被合并到一个接口中。

```typescript
interface Box {
  height: number;
  width: number;
}

interface Box {
  depth: number;
}

// Box 接口已合并，包含 height、width 和 depth 属性
const box: Box = { height: 10, width: 20, depth: 30 };
```

### **interface 与 type 的异同**

接口（`interface`）和类型别名（`type`）都可以用于描述对象类型、函数类型等。然而，它们之间存在一些差异和特性，这使得在不同的场景下可能会选择使用其中之一。

- 相同点：它们都可以用于描述对象类型、函数类型等，支持泛型，可以扩展其他类型。
- 不同点：
  - 接口可以通过声明合并进行扩展，类型别名则不支持这种扩展。
  - 类可以实现（`implements`）接口，但不能实现类型别名。
  - 接口只能用于描述对象和函数类型，而类型别名可以用于表示任何类型，包括基本类型、联合类型、交叉类型等。

根据具体需求和场景选择使用接口或类型别名。一般来说，如果需要描述一个对象或函数类型，并且需要扩展或实现这个类型，那么接口可能是更好的选择。如果需要表示一个复杂的类型，如联合类型、交叉类型或递归类型，那么类型别名可能更适合。



## 11、类

### **简介**

在 TypeScript 中，类（Class）是一种用于定义对象的蓝图，它描述了对象的属性（数据）和方法（行为）。类提供了面向对象编程（OOP）的特性，如封装、继承和多态。

#### **属性的类型**

类的属性可以具有类型注解，用于指定属性的类型。类型注解可以确保实例化类时正确地设置属性值。

```typescript
class Person {
  name: string;
  age: number;
}
```

#### **readonly 修饰符**

使用 `readonly` 关键字可以将类属性标记为只读。只读属性在对象创建后不能被修改。

```typescript
class Person {
  readonly name: string;
  age: number;
}
```

#### **方法的类型**

类的方法也可以具有类型注解，用于指定方法的参数类型和返回值类型。

```typescript
class Person {
  greet(name: string): string {
    return `Hello, ${name}`;
  }
}
```

#### **存取器方法**

类可以包含存取器方法（getter 和 setter），用于获取和设置属性值。存取器方法可以具有类型注解。

```typescript
class Person {
  private _age: number;
  get age(): number {
    return this._age;
  }
  set age(value: number) {
    this._age = value;
  }
}
```

#### **属性索引**

类可以具有索引签名，用于描述类属性的类型。

```typescript
class MyClass {
  [key: string]: number;
}
```

### **类的 interface 接口**

类可以实现接口，从而确保类具有接口中定义的属性和方法。

#### **implements 关键字**

使用 `implements` 关键字实现接口。实现接口时，类必须具有接口中定义的所有属性和方法。

```typescript
interface Greetable {
  greet(): void;
}
class Person implements Greetable {
  greet() {
    console.log("Hello");
  }
}
```

#### **实现多个接口**

类可以实现多个接口，用逗号分隔。

```typescript
interface Greetable {
  greet(): void;
}
interface Walkable {
  walk(): void;
}

class Person implements Greetable, Walkable {
  greet() {
    console.log("Hello");
  }
  walk() {
    console.log("Walking");
  }
}
```

#### **类与接口的合并**

在 TypeScript 中，具有相同名称的类和接口会自动合并。这意味着如果在多个地方声明相同名称的类和接口，它们的属性和方法将被合并到一个类中。

```typescript
interface Box {
  height: number;
}
class Box {
  width: number;
}

const box: Box = { height: 10, width: 20 }; // 类型检查通过，因为类和接口已合并
```

### **Class 类型**

类本身可以作为类型，用于约束类的实例。

```typescript
class Person {
  name: string;
}

const p: Person = new Person(); // 类型检查通过
```

#### **实例类型**

类的实例类型是指由类构造函数创建的对象的类型。实例类型由类的属性和方法组成。

```typescript
class Person {
  name: string;
  greet() {
    console.log("Hello");
  }
}

const p: Person = new Person(); // p 的类型是 Person 的实例类型
```

#### **类的自身类型**

类的自身类型是指类本身的类型，也称为构造函数类型。类的自身类型由类的静态成员和构造函数签名组成。

```typescript
class Person {
  static version = "1.0";
  constructor(public name: string) {}
}

const PersonConstructor: typeof Person = Person; // PersonConstructor 的类型是 Person 的自身类型
```

#### **结构类型原则**

TypeScript 使用结构类型原则（也称为鸭子类型）来进行类型检查。这意味着只要两个对象具有相同的结构（即相同的属性名和属性值类型），它们就被认为是相同的类型。

```typescript
class Person {
  constructor(public name: string
```

### **类的继承**

在 TypeScript 中，使用 `extends` 关键字实现类的继承。子类继承父类的属性和方法，并可以覆盖或扩展它们。

```typescript
class Person {
  constructor(public name: string, public age: number) {}

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Employee extends Person {
  constructor(name: string, age: number, public position: string) {
    super(name, age);
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm a ${this.position}`);
  }
}
```

### **可访问性修饰符**

TypeScript 支持三种可访问性修饰符：`public`（默认）、`private` 和 `protected`。可访问性修饰符用于控制类成员的可见性。

- `public`：类成员默认为 `public`，可以在任何地方访问。

```typescript
class Person {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}
```

- `private`：私有成员只能在类内部访问，不能在子类或类外部访问。

```typescript
class Person {
  private age: number;

  constructor(age: number) {
    this.age = age;
  }
}
```

- `protected`：受保护成员可以在类内部和子类中访问，但不能在类外部访问。

```typescript
class Person {
  protected address: string;

  constructor(address: string) {
    this.address = address;
  }
}

class Employee extends Person {
  printAddress() {
    console.log(this.address); // 可以访问受保护成员 address
  }
}
```

**实例属性的简写形式**

在构造函数参数中使用访问修饰符，可以自动创建并初始化类属性。

```typescript
class Person {
  constructor(public name: string, private age: number) {}
}
```

### **静态成员**

类可以具有静态成员，这些成员属于类本身，而不是类的实例。静态成员使用 `static` 关键字定义。

```typescript
class MyClass {
  static version = "1.0";

  static printVersion() {
    console.log(MyClass.version);
  }
}
```

### **泛型类**

类可以具有泛型参数，用于表示类属性或方法的类型。泛型参数在类名后面的尖括号（`<>`）中指定。

```typescript
class Container<T> {
  private items: T[] = [];

  addItem(item: T) {
    this.items.push(item);
  }

  getItem(index: number): T {
    return this.items[index];
  }
}
```

### **抽象类，抽象成员**

使用 `abstract` 关键字定义抽象类。抽象类不能实例化，只能被其他类继承。抽象类可以包含抽象方法，这些方法在子类中必须被实现。

```typescript
abstract class Animal {
  abstract makeSound(): void;

  move() {
    console.log("The animal is moving");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Woof!");
  }
}
```

### **this 问题**

在 TypeScript 类中，`this` 关键字用于引用类的实例。然而，在事件处理程序或回调函数中，`this` 可能会意外地引用错误的对象。为了解决这个问题，可以使用箭头函数或 `bind` 方法来绑定正确的 `this` 值。

```typescript
class MyClass {
  name = "MyClass";

  printName() {
    console.log(this.name);
  }

  registerEvent() {
    // 使用箭头函数
    document.addEventListener("click", () => {
      this.printName(); // 正确的 this 值
    });

    // 或者使用 bind
    document.addEventListener("click", this.printName.bind(this));
  }
}
```



## 12、泛型

泛型可以理解成一段类型逻辑，需要类型参数来表达。有了类型参数以后，可以**在输入类型与输出类型之间，建立一一对应关系**。

> 泛型（Generics）是 TypeScript 中的一个重要特性，它允许你编写可重用且类型安全的代码。泛型的本质是参数化类型，这意味着在定义函数、接口或类时，可以使用类型参数（Type Parameter）来表示未知的类型。这些类型参数在实际使用时会被具体的类型替换，从而实现类型安全的代码复用。
>
> 以下是关于 TypeScript 泛型的一些重要概念：
>
> 1. **泛型函数**：泛型函数是指使用类型参数定义的函数。类型参数在函数名后面的尖括号（`<>`）中指定。
>
> ```typescript
> function identity<T>(value: T): T {
>   return value;
> }
> 
> const num = identity<number>(42); // 类型参数为 number
> const str = identity<string>("hello"); // 类型参数为 string
> ```
>
> 2. **泛型接口**：泛型接口是指使用类型参数定义的接口。类型参数在接口名后面的尖括号（`<>`）中指定。
>
> ```typescript
> interface Container<T> {
>   value: T;
> }
> 
> const numContainer: Container<number> = { value: 42 }; // 类型参数为 number
> const strContainer: Container<string> = { value: "hello" }; // 类型参数为 string
> ```
>
> 3. **泛型类**：泛型类是指使用类型参数定义的类。类型参数在类名后面的尖括号（`<>`）中指定。
>
> ```typescript
> class Container<T> {
>   constructor(public value: T) {}
> }
> 
> const numContainer = new Container<number>(42); // 类型参数为 number
> const strContainer = new Container<string>("hello"); // 类型参数为 string
> ```
>
> 4. **泛型约束**：泛型约束用于限制泛型参数的类型。泛型约束使用 `extends` 关键字定义。
>
> ```typescript
> interface Lengthwise {
>   length: number;
> }
> 
> function logLength<T extends Lengthwise>(value: T): void {
>   console.log(value.length);
> }
> 
> logLength("hello"); // 类型参数为 string，满足泛型约束
> logLength([1, 2, 3]); // 类型参数为 number[]，满足泛型约束
> ```
>

### **简介**

泛型是 TypeScript 中的一个重要特性，用于创建可重用的组件，同时能保持类型的准确性。泛型的本质是**参数化类型，这意味着在定义函数、接口或类时，可以使用类型参数来表示未知的类型。这些类型参数在实际使用时会被具体的类型替换。**

### **泛型的写法**

泛型使用尖括号（`<>`）中的大写字母（如 `T`、`U`、`V` 等）表示类型参数。例如，`Array<T>` 表示一个元素类型为 `T` 的数组。

#### **函数的泛型写法**

在函数中，泛型类型参数位于函数名后面，用于表示函数参数和返回值的类型。

```typescript
function identity<T>(arg: T): T {
  return arg;
}
```

#### **接口的泛型写法**

在接口中，泛型类型参数位于接口名后面，用于表示接口属性或方法的类型。

```typescript
interface GenericIdentityFn<T> {
  (arg: T): T;
}
```

#### **类的泛型写法**

在类中，泛型类型参数位于类名后面，用于表示类属性或方法的类型。

```typescript
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}
```

#### **类型别名的泛型写法**

在类型别名中，泛型类型参数位于别名名后面，用于表示别名的类型。

```typescript
type Container<T> = { value: T };
```

### **类型参数的默认值**

类型参数可以有默认值，当在使用时没有提供类型参数，那么默认值就会被使用。

```typescript
function createArray<T = number>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}
```

### **数组的泛型表示**

数组的类型可以使用泛型表示，例如 `Array<T>` 或 `T[]` 表示元素类型为 `T` 的数组。

### **类型参数的约束条件**

类型参数可以有约束条件，这是通过 `extends` 关键字实现的。约束条件可以确保类型参数具有特定的属性或方法。

```typescript
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);  // Now we know it has a .length property, so no more error
  return arg;
}
```

### **使用注意点**

在使用泛型时，需要注意以下几点：

- 在使用泛型函数或泛型类时，需要提供类型参数。如果没有提供类型参数，TypeScript 编译器会尝试推断类型参数，但在复杂的情况下可能无法正确推断。
- 类型参数可以有约束条件，但不能使用实例类型作为约束条件。例如，不能使用 `T extends new () => MyClass` 作为约束条件。
- 类型参数可以在多个地方使用，这意味着所有使用相同类型参数的地方都会使用相同的类型。例如，在 `function pair<T>(x: T, y: T): [T, T]` 中，`x`、`y` 和返回值的类型都是 `T`。
- 尽量少用泛型。泛型可以提高代码的可重用性和类型安全性，但过度使用泛型可能会导致代码难以理解和维护。因此，需要在保持代码简洁和提高代码复用之间找到平衡。
- 泛型可以嵌套。



## 13、Enum 类型

### 概念

TypeScript 的枚举（Enum）是一种特殊的数据类型，它允许我们为一组有名字的数字值赋予友好的名称。枚举在编程中经常被用作表示一组有限的常量值，例如表示一周的日子、颜色等。

###  Enum 成员的值

Enum 成员有一个初始值，从 0 开始自动递增。我们也可以手动为每个成员指定一个数值。例如：

```typescript
enum Days {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}
```

### 同名 Enum 的合并

TypeScript 支持同名枚举的合并，即在声明多个同名的枚举时，会将它们合并为一个枚举，成员为所有枚举成员的并集。

```typescript
enum Color {
  Red,
  Green,
}

enum Color {
  Blue,
}

// 合并后的 Color 包含 Red、Green 和 Blue 成员
```

### 字符串 Enum

除了数值枚举，TypeScript 还支持字符串枚举。字符串枚举允许我们为枚举成员指定字符串值。例如：

```typescript
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}
```

### keyof 运算符

`keyof` 是 TypeScript 中的一个类型运算符，它可以用来获取某个类型的所有键名（key names）。在枚举类型中，我们可以使用 `keyof` 运算符获取枚举成员的名称。例如：

```typescript
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}

type ColorKeys = keyof typeof Color; // "Red" | "Green" | "Blue"
```

### 反向映射

数值枚举类型具有反向映射的特性，即我们可以通过枚举值获取到对应的枚举成员名称。例如：

```typescript
enum Color {
  Red = 1,
  Green,
  Blue,
}

const colorName = Color[1]; // "Red"
```

需要注意的是，字符串枚举不具备反向映射的特性。



## 14、类型断言

> <>  as \ as const \  ! \ asserts .. is \ asserts

1. ### 简介

类型断言（Type Assertion）是 TypeScript 中的一个概念，它允许我们在编译时期显式地告诉编译器，我们对某个值的类型有更确切的了解。**类型断言并不会改变值的类型，它只是一种类型提示，用于告诉 TypeScript 编译器如何处理这个值。**类型断言不会在运行时产生任何额外的开销，因为它仅在编译时期起作用。

2. ### 类型断言的条件

类型断言有两种语法：

- 尖括号语法：`<Type>value`
- as 语法：`value as Type`

需要注意的是，类型断言并不能改变值的实际类型，它只是告诉编译器如何处理这个值。因此，在使用类型断言时，我们需要确保自己对值的类型有足够的把握，以避免因为类型不匹配而导致的运行时错误。

3. ### as const 断言

`as const` 是 TypeScript 3.4 引入的一种特殊类型断言，它用于创建一个不可变的类型。当我们使用 `as const` 断言时，TypeScript 会将值视为只读，且不会对值进行类型推断。这在我们需要创建一个不可变对象时非常有用。

```typescript
const example = {
  a: 1,
  b: 2,
} as const;

// example 的类型为：
// {
//   readonly a: 1;
//   readonly b: 2;
// }
```

4. ### 非空断言

非空断言（Non-null Assertion）是 TypeScript 中的一种特殊类型断言，它用于告诉编译器某个值不会为 `null` 或 `undefined`。非空断言使用一个感叹号（!）表示。

```typescript
function myFunc(value: string | null | undefined) {
  const str: string = value!; // 使用非空断言告诉编译器 value 不会为 null 或 undefined
}
```

5. ### 断言函数

断言函数是 TypeScript 中的一种高级用法，它允许我们在函数中进行类型断言。断言函数通常用于在运行时检查值的类型，并在类型不匹配时抛出错误。

```typescript
function assertIsNumber(value: any): asserts value is number {
  if (typeof value !== "number") {
    throw new Error("Value is not a number");
  }
}

function myFunc(value: any) {
  assertIsNumber(value); // 使用断言函数检查 value 的类型
  const num: number = value; // 编译器知道 value 是一个 number 类型
}
```

通过使用断言函数，我们可以在运行时进行类型检查，并确保值的类型与我们期望的类型相匹配。



## 15、模块

1. ### 简介

TypeScript 模块是一种组织和封装代码的方式。一个模块就是一个文件，它可以定义变量、函数、类等，并通过 `export` 关键字导出这些成员。其他模块可以通过 `import` 关键字导入这些成员并使用。模块的主要作用是避免命名冲突、提高代码的复用性、便于代码的维护和管理。

2. ### import type 语句

**`import type` 语句用于仅导入类型**，而不导入值。这在仅需要类型信息的情况下可以减少生成的 JavaScript 代码量。

```typescript
import type { SomeInterface } from "./someModule";
```

3. ### importsNotUsedAsValues 编译设置

`importsNotUsedAsValues` 是 TypeScript 编译器选项，它用于控制导入类型时是否生成 JavaScript 代码。它有三个可选值：`remove`、`preserve` 和 `error`。

4. ### CommonJS 模块

**CommonJS 是 Node.js 使用的模块规范**。TypeScript 支持将 ES6 模块编译为 CommonJS 模块。这可以通过设置 `module` 编译选项为 `CommonJS` 实现。

#### import = 语句

`import =` 语句是 TypeScript 中的一种特殊导入语法，用于导入 CommonJS 或其他非 ES6 模块。

```typescript
import fs = require("fs");
```

#### export = 语句

`export =` 语句是 TypeScript 中的一种特殊导出语法，用于导出 CommonJS 或其他非 ES6 模块。

```typescript
const value = 42;
export = value;
```

5. ### 模块定位

模块定位是 TypeScript 编译器在解析模块时查找模块文件的过程。模块定位有两种方法：Classic 和 Node。

#### 相对模块，非相对模块

相对模块是以 `./`、`../` 或 `./` 开头的模块。非相对模块是不以这些字符开头的模块。相对模块通常用于导入项目内的模块，非相对模块通常用于导入外部依赖。

#### Classic 方法

Classic 方法是 TypeScript 最早的模块定位方法。它首先尝试查找相对模块，然后查找非相对模块。非相对模块会在当前目录及其祖先目录中查找。

#### Node 方法

Node 方法是 TypeScript 中的另一种模块定位方法，它模拟了 Node.js 的模块解析算法。它会在 `node_modules` 目录中查找模块。

#### 路径映射

路径映射是 TypeScript 中的一种模块定位配置，它允许我们为模块路径设置别名。例如：

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "utilities/*": ["src/utilities/*"]
    }
  }
}
```

#### tsc 的--traceResolution 参数

`--traceResolution` 是一个 tsc 编译器参数，它会在编译时输出模块解析过程的详细信息，有助于调试模块解析问题。

#### tsc 的--noResolve 参数

`--noResolve` 是一个 tsc 编译器参数，它会禁止模块解析, 只考虑命令行传入的模块。这意味着编译器不会尝试查找和解析模块。这个选项通常用于调试和排除模块解析问题。



## 16、namespace

1. ### 基本用法

在 TypeScript 中，命名空间是通过 `namespace` 关键字定义的。命名空间可以包含类、接口、函数和变量等。为了在命名空间外部使用这些成员，我们需要使用 `export` 关键字将它们导出。

```typescript
namespace Animals {
    export class Dog {
        constructor(public name: string) {}

        public bark(): void {
            console.log(`${this.name} is barking.`);
        }
    }

    export class Cat {
        constructor(public name: string) {}

        public meow(): void {
            console.log(`${this.name} is meowing.`);
        }
    }
}
```

在这个示例中，我们定义了一个名为 `Animals` 的命名空间，其中包含两个类 `Dog` 和 `Cat`。我们使用 `export` 关键字将它们导出，以便在命名空间外部使用它们。

2. ### namespace 的输出

要在命名空间外部访问这些成员，我们需要使用完全限定名称。完全限定名称由命名空间名称和成员名称组成，中间用点号（.）分隔。

```typescript
let dog = new Animals.Dog("Buddy");
dog.bark();

let cat = new Animals.Cat("Whiskers");
cat.meow();
```

在这个示例中，我们使用 `Animals.Dog` 和 `Animals.Cat` 创建了两个实例，并调用了它们的方法。

3. ### namespace 的合并

如果在同一个文件或不同文件中定义了具有相同名称的命名空间，TypeScript 会将它们合并为一个命名空间。这可以用来将相关的代码分散在多个文件中，然后通过命名空间将它们组织在一起。

例如，我们可以将 `Animals` 命名空间拆分为两个文件：

```typescript
// animals-dog.ts
namespace Animals {
    export class Dog {
        // ...
    }
}

// animals-cat.ts
namespace Animals {
    export class Cat {
        // ...
    }
}
```

在这个示例中，我们将 `Dog` 类和 `Cat` 类分别放在不同的文件中，但它们仍然属于同一个命名空间 `Animals`。当我们在项目中使用这些文件时，TypeScript 会将这两个命名空间合并为一个。

注意：要在多个文件中使用命名空间，需要使用 `/// <reference path="..."/>` 指令引用相关文件，或者使用模块加载器（如 CommonJS、AMD 或 SystemJS）来加载和合并这些文件。在实际项目中，我们通常**更推荐使用 ES6 模块（`import` 和 `export` 语法）来组织和管理代码，因为它们具有更好的模块化特性和工具支持**。



## 17、装饰器

TypeScript 装饰器（Decorator）是一种特殊类型的声明，它可以附加到类、方法、访问器、属性或参数上。装饰器使用 `@` 符号表示，后面紧跟一个表达式。装饰器的主要目的是在不修改其代码的情况下，为类或类的成员添加额外的功能或行为。

要启用装饰器，需要在 TypeScript 配置文件（`tsconfig.json`）中将 `experimentalDecorators` 选项设置为 `true`。

下面是一个简单的装饰器示例：

```typescript
// 装饰器函数
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Calling method ${propertyKey} with arguments:`, args);
        const result = originalMethod.apply(this, args);
        console.log(`Method ${propertyKey} returned:`, result);
        return result;
    };
}

class Calculator {
    @log
    public add(x: number, y: number): number {
        return x + y;
    }
}

const calculator = new Calculator();
calculator.add(1, 2); // 输出：Calling method add with arguments: [1, 2]
                     // 输出：Method add returned: 3
```

在这个示例中，我们定义了一个名为 `log` 的装饰器函数。这个函数接收三个参数：`target`（被装饰的类的原型对象）、`propertyKey`（被装饰的方法的名称）和 `descriptor`（被装饰的方法的属性描述符）。我们修改了 `descriptor.value`（即方法本身），在调用原始方法之前和之后添加了日志输出。

然后，我们使用 `@log` 装饰器将 `log` 函数应用于 `Calculator` 类的 `add` 方法。现在，当我们调用 `calculator.add(1, 2)` 时，会输出方法调用和返回值的日志。

总之，TypeScript 装饰器是一种强大的特性，可以**用来在不修改类或类成员代码的情况下，为它们添加额外的功能或行为。装饰器在很多场景中非常有用，例如日志、缓存、权限控制和依赖注入等。**

## 18、装饰器（旧语法）



## 19、declare 关键字

> **declare 关键字用来告诉编译器，某个类型是存在的，可以在当前文件中使用**。
>
> 它的主要作用，就是让当前文件可以使用其他文件声明的类型。举例来说，自己的脚本使用外部库定义的函数，编译器会因为不知道外部函数的类型定义而报错，这时就可以在自己的脚本里面使用`declare`关键字，告诉编译器外部函数的类型。这样的话，编译单个脚本就不会因为使用了外部类型而报错。
>
> declare 关键字可以描述以下类型。
>
> - 变量（const、let、var 命令声明）
> - type 或者 interface 命令声明的类型
> - class
> - enum
> - 函数（function）
> - 模块（module）
> - 命名空间（namespace）
>
> declare 关键字的重要特点是，它只是通知编译器某个类型是存在的，不用给出具体实现。比如，只描述函数的类型，不给出函数的实现，如果不使用`declare`，这是做不到的。
>
> declare 只能用来描述已经存在的变量和数据结构，不能用来声明新的变量和数据结构。另外，所有 declare 语句都不会出现在编译后的文件里面。

> 通常情况下**会在 .d.ts（声明文件）中使用 `declare` 关键字**。声明文件的主要作用是帮助 TypeScript 理解 JavaScript 库的类型，从而提供类型检查和代码补全等功能。

1. ### 简介

在 TypeScript 中，`declare` 是一个关键字，用于声明某些变量、函数、类等存在，但其实现并不在当前文件或项目中，可能是在其他的 JavaScript 文件或者库中。

2. ### declare variable

`declare var` 用于声明全局变量的类型。例如：

```typescript
declare var jQuery: (selector: string) => any;
```

这里我们声明了一个全局变量 `jQuery`，它是一个函数，接收一个字符串参数，返回任意类型的值。

3. ### declare function

`declare function` 用于声明全局函数的类型。例如：

```typescript
declare function greet(name: string): void;
```

这里我们声明了一个函数 `greet`，它接收一个字符串参数，没有返回值。

4. ### declare class

`declare class` 用于声明全局类的类型。例如：

```typescript
declare class MyClass {
    constructor(s: string);
    echo(): string;
}
```

这里我们声明了一个类 `MyClass`，它有一个构造函数和一个方法 `echo`。

5. ### declare module，declare namespace

`declare module` 和 `declare namespace` 用于声明模块或命名空间的类型。例如：

```typescript
declare module 'my-module' {
    export function foo(bar: number): string;
}
```

这里我们声明了一个模块 `my-module`，它导出一个函数 `foo`，这个函数接收一个数字参数，返回一个字符串。

6. ### declare global

`declare global` 用于在模块内部添加全局变量或扩展全局对象的类型。例如：

```typescript
declare global {
    interface String {
        myExtensionMethod(): string;
    }
}
```

这里我们扩展了全局的 `String` 接口，添加了一个 `myExtensionMethod` 方法。

7. ### declare enum

`declare enum` 用于声明全局枚举的类型。例如：

```typescript
declare enum Directions {
    Up,
    Down,
    Left,
    Right
}
```

这里我们声明了一个枚举 `Directions`，它有四个成员：`Up`、`Down`、`Left` 和 `Right`。

8. ### declare module 用于类型声明文件

在类型声明文件（`.d.ts` 文件）中，我们通常会使用 `declare module` 来声明模块的类型。例如：

```typescript
declare module 'my-library' {
    export function myFunction(a: number): void;
}
```

这里我们声明了一个模块 `my-library`，它导出一个函数 `myFunction`。这样，在 TypeScript 代码中导入和使用这个库时，就能得到类型检查和代码补全等功能。



## 20、d.ts 类型声明文件

1. ### 简介

类型声明文件（`.d.ts` 文件）是 TypeScript 的一种特殊文件，用于描述 JavaScript 库的类型信息。

类型声明文件的主要作用是帮助 TypeScript 理解 JavaScript 库的类型，从而提供类型检查和代码补全等功能。

2. ### 类型声明文件的来源

类型声明文件可以有以下几种来源：

- 库作者提供的官方类型声明文件
- 社区维护的类型声明文件，例如 [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) 项目
- 自己编写的类型声明文件

#### 自动生成

某些情况下，可以使用工具自动生成类型声明文件。例如，当我们使用 TypeScript 编写一个库时，可以通过设置 `declaration` 选项为 `true`，让 TypeScript 编译器自动生成类型声明文件。

#### 内置声明文件

TypeScript 本身包含了一些内置的类型声明文件，用于描述 JavaScript 标准库和 DOM API 的类型。这些内置声明文件位于 TypeScript 安装目录的 `lib` 文件夹中。

#### 外部类型声明文件

外部类型声明文件通常用于描述第三方 JavaScript 库的类型。这些文件可以通过 `npm` 安装，例如：

```
npm install --save-dev @types/jquery
```

3. ### declare 关键字

类型声明文件中通常会使用 `declare` 关键字来声明全局变量、函数、类、模块等的类型。例如：

```typescript
declare module 'my-library' {
    export function myFunction(a: number): void;
}
```

4. ### 模块发布

当我们编写一个 TypeScript 库并准备发布到 npm 时，需要在 `package.json` 文件中设置 `types` 或 `typings` 字段，指向库的主类型声明文件。例如：

```json
{
    "name": "my-library",
    "version": "1.0.0",
    "main": "index.js",
    "types": "index.d.ts"
}
```

5. ### 三斜杠命令

三斜杠命令（triple-slash directives）是一种特殊的注释，用于指示 TypeScript 编译器引用其他类型声明文件或设置编译选项。三斜杠命令以 `///` 开头，后面紧跟一个 XML 标签。

**/// <reference path="" />**

`/// <reference path="" />` 命令用于引用其他类型声明文件。例如：

```typescript
/// <reference path="my-library.d.ts" />
```

注意：在大多数情况下，我们不再需要使用这种方式引用类型声明文件，因为 TypeScript 编译器会自动解析项目中的类型声明文件。

**/// <reference types="" />**

`/// <reference types="" />` 命令用于引用一个类型声明包。例如：

```typescript
/// <reference types="jquery" />
```

这个命令告诉 TypeScript 编译器引用 `@types/jquery` 包中的类型声明。

**/// <reference lib="" />**

`/// <reference lib="" />` 命令用于引用内置的类型声明文件。例如：

```typescript
/// <reference lib="es2017" />
/// <reference lib="dom" />
```

这个命令告诉 TypeScript 编译器引用 ES2017 和 DOM 的类型声明。



## 21、 类型运算符

> keyof 运算符
> in 运算符
> 方括号运算符
> extends...?: 条件运算符
> infer 关键字
> is 运算符
> 模板字符串
> satisfies 运算符

1. ### keyof 运算符

`keyof` 是 TypeScript 中的一个类型查询运算符，它可以获取某个类型的所有属性名组成一个联合类型。例如：

```typescript
interface Person {
    name: string;
    age: number;
}

type PersonKeys = keyof Person; // "name" | "age"
```

在这个示例中，`keyof Person` 结果为 `"name" | "age"`，表示 `PersonKeys` 类型可以是 `"name"` 或 `"age"`。

2. ### in 运算符

`in` 运算符用于遍历联合类型，创建一个新的类型。例如：

```typescript
type Keys = "a" | "b" | "c";

type Obj = {
    [K in Keys]: number;
};

// 等价于：
type Obj = {
    a: number;
    b: number;
    c: number;
};
```

在这个示例中，我们使用 `in` 运算符遍历 `Keys` 类型，并为每个键创建一个属性，值的类型为 `number`。

3. ### 方括号运算符

方括号运算符（`[]`）用于访问某个类型的属性类型。例如：

```typescript
interface Person {
    name: string;
    age: number;
}

type NameType = Person["name"]; // string
```

在这个示例中，`Person["name"]` 结果为 `string`，表示 `NameType` 类型是 `string`。

4. ### extends...?: 条件运算符

条件类型（`T extends U ? X : Y`）允许我们根据一个类型是否可以赋值给另一个类型来选择类型。例如：

```typescript
type TypeName<T> = T extends string
    ? "string"
    : T extends number
    ? "number"
    : T extends boolean
    ? "boolean"
    : "unknown";

type T1 = TypeName<string>; // "string"
type T2 = TypeName<number>; // "number"
type T3 = TypeName<boolean>; // "boolean"
type T4 = TypeName<{}>; // "unknown"
```

在这个示例中，我们定义了一个条件类型 `TypeName`，它根据输入类型 `T` 的类型选择一个字符串字面量类型。

5. ### infer 关键字

`infer` 关键字用于在条件类型中推断某个类型。例如：

```typescript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

type T1 = ReturnType<() => string>; // string
type T2 = ReturnType<(x: number) => boolean>; // boolean
```

在这个示例中，我们定义了一个条件类型 `ReturnType`，它可以从函数类型中推断返回值类型。

6. ### is 运算符

函数返回布尔值的时候，可以使用`is`运算符，限定返回值与参数之间的关系。

```typescript
type A = { a: string };
type B = { b: string };

function isTypeA(x: A|B): x is A {
  if ('a' in x) return true;
  return false;
}
```

7. ### 模板字符串

在 TypeScript 4.1 及更高版本中，我们可以使用模板字符串类型来操作字符串字面量类型。例如：

```typescript
type World = "world";
type Greeting = `hello ${World}`; // "hello world"
```

在这个示例中，我们定义了一个模板字符串类型 `Greeting`，它根据 `World` 类型构造一个新的字符串字面量类型。

8. ### satisfies 运算符

`satisfies`运算符用来检测某个值是否符合指定类型。有时候，不方便将某个值指定为某种类型，但是希望这个值符合类型条件，这时候就可以用`satisfies`运算符对其进行检测。[TypeScript 4.9](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#the-satisfies-operator)添加了这个运算符。

```typescript
type Colors = "red" | "green" | "blue";
type RGB = [number, number, number];

const palette = {
  red: [255, 0, 0],
  green: "#00ff00",
  bleu: [0, 0, 255] // 报错
} satisfies Record<Colors, string|RGB>;

const greenComponent = palette.green.substring(1); // 不报错
```



## 22、类型映射

1. ### 简介 

类型映射（Mapped Types）是 TypeScript 中的一种高级类型，它允许我们根据一个类型的属性（键/值）生成一个新的类型。类型映射的语法形式如下：

```typescript
type MappedType = {
    [K in keyof BaseType]: NewType;
};
```

其中，`BaseType` 是一个已存在的类型，`K` 是一个类型变量，用于表示 `BaseType` 的每个属性名。`NewType` 是一个根据 `K` 生成的新类型。

2. ### 映射修饰符

在类型映射中，我们可以使用映射修饰符 `+` 和 `-` 来添加或删除属性的可选/只读修饰符。

- `+`修饰符：写成`+?`或`+readonly`，为映射属性添加`?`修饰符或`readonly`修饰符。
- `–`修饰符：写成`-?`或`-readonly`，为映射属性移除`?`修饰符或`readonly`修饰符。

```typescript
type ReadonlyType<T> = {
    readonly [K in keyof T]: T[K];
};

type MutableType<T> = {
    -readonly [K in keyof T]: T[K];
};
```

在这个示例中，`ReadonlyType` 将一个类型的所有属性变为只读，而 `MutableType` 则将一个类型的所有只读属性变为可写。

3. ### 键名重映射

键名重映射（Key Remapping）是 TypeScript 4.1 及更高版本中的一种新特性，它允许我们在类型映射中修改属性名。

3.1 语法

键名重映射的语法形式如下：

```typescript
type RemappedType = {
    [K in keyof BaseType as NewKey]: NewType;
};
```

其中，`NewKey` 是一个根据 `K` 生成的新属性名。

3.2 属性过滤

我们可以通过键名重映射来过滤类型的属性。例如，我们可以只保留那些值类型为 `string` 的属性：

```typescript
type StringKeysOnly<T> = {
    [K in keyof T as T[K] extends string ? K : never]: T[K];
};

type Example = {
    a: string;
    b: number;
    c: boolean;
};

type StringKeys = StringKeysOnly<Example>; // { a: string }
```

在这个示例中，`StringKeysOnly` 类型映射根据条件类型 `T[K] extends string ? K : never` 过滤了类型 `Example` 的属性，只保留了值类型为 `string` 的属性。

3.3 联合类型的映射

我们还可以将键名重映射应用于联合类型。例如，我们可以将一个对象类型的联合类型转换为一个嵌套的对象类型：

```typescript
type UnionToObject<T> = {
    [K in keyof T]: T[K];
};

type Union = { a: number } | { b: string };

type NestedObject = UnionToObject<Union>; // { a: number; b: string; }
```

在这个示例中，`UnionToObject` 类型映射将一个对象类型的联合类型 `Union` 转换为一个嵌套的对象类型 `NestedObject`。



## 23、类型工具

- [`Awaited`](https://wangdoc.com/typescript/utility#awaitedtype)
- [`ConstructorParameters`](https://wangdoc.com/typescript/utility#constructorparameterstype)
- [`Exclude`](https://wangdoc.com/typescript/utility#excludeuniontype-excludedmembers)
- [`Extract`](https://wangdoc.com/typescript/utility#extracttype-union)
- [`InstanceType`](https://wangdoc.com/typescript/utility#instancetypetype)
- [`NonNullable`](https://wangdoc.com/typescript/utility#nonnullabletype)
- [`Omit`](https://wangdoc.com/typescript/utility#omittype-keys)
- [`OmitThisParameter`](https://wangdoc.com/typescript/utility#omitthisparametertype)
- [`Parameters`](https://wangdoc.com/typescript/utility#parameterstype)
- [`Partial`](https://wangdoc.com/typescript/utility#partialtype)
- [`Pick`](https://wangdoc.com/typescript/utility#picktype-keys)
- [`Readonly`](https://wangdoc.com/typescript/utility#readonlytype)
- [`Record`](https://wangdoc.com/typescript/utility#recordkeys-type)
- [`Required`](https://wangdoc.com/typescript/utility#requiredtype)
- [`ReadonlyArray`](https://wangdoc.com/typescript/utility#readonlyarraytype)
- [`ReturnType`](https://wangdoc.com/typescript/utility#returntypetype)
- [`ThisParameterType`](https://wangdoc.com/typescript/utility#thisparametertypetype)
- [`ThisType`](https://wangdoc.com/typescript/utility#thistypetype)
- 字符串类型工具
  - [`Uppercase`](https://wangdoc.com/typescript/utility#uppercasestringtype)
  - [`Lowercase`](https://wangdoc.com/typescript/utility#lowercasestringtype)
  - [`Capitalize`](https://wangdoc.com/typescript/utility#capitalizestringtype)
  - [`Uncapitalize`](https://wangdoc.com/typescript/utility#uncapitalizestringtype)

## 24、注释指令

TypeScript 注释指令是一种特殊的注释，用于向 TypeScript 编译器提供额外的指示。这些指令可以控制编译器的行为，例如忽略错误或警告，或者设置类型检查的配置。以下是一些常用的 TypeScript 注释指令：

1. `@ts-ignore`：此指令用于告诉编译器忽略下一行代码中的所有错误。

   ```typescript
   // @ts-ignore
   const x: number = "this is not a number"; // 编译器将忽略这行代码中的类型错误
   ```
   
2. `@ts-nocheck`：此指令用于告诉编译器在当前文件中禁用类型检查。将此指令添加到文件的任意位置，编译器将忽略整个文件中的所有错误。

   ```typescript
   // @ts-nocheck
   const x: number = "this is not a number"; // 编译器将忽略整个文件中的所有类型错误
   const y: string = 123; // 这行代码中的类型错误也将被忽略
   ```
   
3. `@ts-check`：此指令用于告诉编译器在当前 JavaScript 文件中启用类型检查。将此指令添加到 `.js` 文件的任意位置，编译器将对整个文件执行类型检查。

   ```javascript
   // @ts-check
   const x = "hello";
   x.foo(); // 编译器将报告类型错误，因为字符串类型没有 'foo' 方法
   ```
   
4. `@ts-expect-error`：此指令用于告诉编译器预期下一行代码中存在错误。如果下一行代码没有错误，编译器将报告一个错误，表示预期的错误没有发生。这在测试类型错误时非常有用。

   ```typescript
   // @ts-expect-error
   const x: number = "this is not a number"; // 编译器将不会报告这行代码中的类型错误，因为它是预期的
   ```

这些 TypeScript 注释指令可以帮助你在需要时更好地控制编译器的行为。需要注意的是，虽然这些指令在某些情况下可能很有用，但过度使用它们可能会导致代码中的潜在错误被忽略。因此，在使用这些指令时要谨慎。

## 25、tsconfig.json 文件

1. 简介

   > `tsconfig.json` 文件是一个存储在项目根目录下的配置文件，用于指定 TypeScript 编译器的编译选项。
   >
   > 通过使用 `tsconfig.json` 文件，可以在**不使用命令行参数的情况下配置 TypeScript 项目的编译过程**。编译器会在执行 `tsc` 命令时自动查找并读取 `tsconfig.json` 文件中的配置。

2. 常用选项

   ```bash
   tsc --init // TypeScript编译器将在当前目录下创建一个新的tsconfig.json文件，并自动填充一些默认的编译选项
   ```

   > ```json
   > {
   >   "compilerOptions": {
   >     "target": "es5",
   >     "module": "commonjs",
   >     "strict": true,
   >     "outDir": "./dist",
   >     "sourceMap": true
   >   },
   >   "include": ["src/**/*"],
   >   "exclude": ["node_modules"]
   > }
   > ```
   >
   > `include` 和 `exclude` 选项用于指定要编译的 TypeScript 文件和要排除的文件
   >
   > ` compilerOptions` 选项内容较多，主要包括以下几个方面
   >
   > > `tsconfig.json` 文件中的选项主要分为几个大类，每一类选项控制了 TypeScript 编译器的不同方面：
   > >
   > > 1. **Projects**：此类选项用于配置 TypeScript 项目引用和增量编译。例如，`incremental` 选项可以开启增量编译，`composite` 选项可以启用项目引用。
   > >
   > > 2. **Language and Environment**：此类选项用于配置编译器的语言特性和运行环境。例如，`target` 选项用于设置目标 ECMAScript 版本，`lib` 选项用于指定运行环境的库文件。
   > >
   > > 3. **Modules**：此类选项用于配置模块相关的行为。例如，`module` 选项用于设置模块系统，`baseUrl` 和 `paths` 选项用于设置模块解析路径。
   > >
   > > 4. **JavaScript Support**：此类选项用于配置 JavaScript 文件的处理方式。例如，`allowJs` 选项可以允许编译器处理 JavaScript 文件，`checkJs` 选项可以开启对 JavaScript 文件的类型检查。
   > >
   > > 5. **Emit**：此类选项用于配置输出文件的行为。例如，`outDir` 选项用于设置输出目录，`sourceMap` 选项可以开启 source map 文件的生成。
   > >
   > > 6. **Interop Constraints**：此类选项用于配置模块间的互操作行为。例如，`esModuleInterop` 选项可以改善 CommonJS 和 ES Modules 间的互操作性。
   > >
   > > 7. **Type Checking**：此类选项用于配置类型检查的行为。例如，`strict` 选项可以开启所有严格的类型检查选项，`noImplicitAny` 选项可以禁止隐式的 `any` 类型。
   > >
   > > 8. **Completeness**：此类选项用于配置编译器的完整性检查。例如，`skipLibCheck` 选项可以跳过对所有 `.d.ts` 文件的类型检查。
   > >
   > > `tsconfig.json` 文件中的每一个选项都有详细的注释说明，可以根据这些注释来理解和设置这些选项。如果需要更详细的信息，也可以参考 [TypeScript 官方文档](https://www.typescriptlang.org/tsconfig)。

## 26、tsc命令

1. 简介

   > tsc 是 TypeScript 官方的命令行编译器，用来检查代码，并将其编译成 JavaScript 代码。
   >
   > tsc 默认使用当前目录下的配置文件`tsconfig.json`，但也可以接受独立的命令行参数。命令行参数会覆盖`tsconfig.json`，比如命令行指定了所要编译的文件，那么 tsc 就会忽略`tsconfig.json`的`files`属性。

   ```bash
   # 使用 tsconfig.json 的配置
   $ tsc
   
   # 只编译 index.ts
   $ tsc index.ts
   
   # 编译 src 目录的所有 .ts 文件
   $ tsc src/*.ts
   
   # 指定编译配置文件
   $ tsc --project tsconfig.production.json
   
   # 只生成类型声明文件，不编译出 JS 文件
   $ tsc index.js --declaration --emitDeclarationOnly
   
   # 多个 TS 文件编译成单个 JS 文件
   $ tsc app.ts util.ts --target esnext --outfile index.js
   ```

   

2. 命令行参数

   > - --help：打印出所有可用的tsc命令行选项。
   > - --version：打印出编译器的版本。
   > - --project：编译指定的项目。你可以通过这个选项指定一个包含tsconfig.json文件的目录，或者直接指定一个.json文件。
   > - --target：指定ECMAScript目标版本。默认值是"ES3"。你可以设置为"ES5"，"ES2015"，"ES2016"，"ES2017"，"ES2018"，"ES2019"，"ES2020"，"ESNext"。
   > - --module：指定模块代码生成。可选值有"None"，"CommonJS"，"AMD"，"System"，"UMD"，"ES6"，"ES2015"，"ES2020"或"ESNext"。
   > - --outFile：将输出文件合并为一个文件。
   > - --outDir：重定向输出结构到目录。
   > - --watch：在输入文件更改时运行编译器。
   > - --sourceMap：生成对应的'.map'文件。