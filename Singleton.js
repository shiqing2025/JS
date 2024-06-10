// 实现单例模式
var Singleton = /** @class */ (function () {
    function Singleton() {
    } // 私有的构造函数，只能在类内部调用。这意味着不能使用 new Singleton() 来创建新的 Singleton 实例
    Singleton.prototype.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        else {
            return Singleton.instance;
        }
    };
    return Singleton;
}());
