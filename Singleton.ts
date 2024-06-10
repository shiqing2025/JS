// 实现单例模式

class Singleton {
  private static instance?: Singleton // 私有的静态属性，用于存储 Singleton 类的唯一实例。类型为 Singleton，可选（? 表示可能为 undefined）

  private constructor() {} // 私有的构造函数，只能在类内部调用。这意味着不能使用 new Singleton() 来创建新的 Singleton 实例

  getInstance(){
    if(!Singleton.instance){
      Singleton.instance = new Singleton()
    } else {
      return Singleton.instance;
    }
  }
}