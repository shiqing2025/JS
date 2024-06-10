type EventCallback<T = any> = (payload: T) => void; // 定义一个事件回调函数类型 

// 这是一个泛型类，T 是类型参数，约束条件是 T 必须是一个对象类型，其属性名为字符串类型，属性值可以是任何类型。
class EventBus<T extends Record<string, any>> {
  private events: Map<keyof T, EventCallback[]>;

  constructor() {
    this.events = new Map();
  }

  on<K extends keyof T>(eventName: K, callback: EventCallback<T[K]>): void {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }
    this.events.get(eventName)?.push(callback);
  }

  once<K extends keyof T>(eventName: K, callback: EventCallback<T[K]>): void {
    const wrappedCallback: EventCallback<T[K]> = (payload) => {
      callback(payload);
      this.off(eventName, wrappedCallback);
    };
    this.on(eventName, wrappedCallback);
  }

  off<K extends keyof T>(eventName: K, callback: EventCallback<T[K]>): void {
    const callbacks = this.events.get(eventName);
    if (callbacks) {
      this.events.set(
        eventName,
        callbacks.filter((cb) => cb !== callback)
      );
    }
  }

  emit<K extends keyof T>(eventName: K, payload: T[K]): void {
    this.events.get(eventName)?.forEach((callback) => callback(payload));
  }
}

// 使用示例
interface Events {
  test: string;
}

const eventBus = new EventBus<Events>();

const callback = (payload: string) => {
  console.log('Event received:', payload);
};

eventBus.on('test', callback);
eventBus.emit('test', 'Hello, EventBus!'); // 输出：Event received: Hello, EventBus!

eventBus.off('test', callback);
eventBus.emit('test', 'Hello, EventBus!'); // 不会有任何输出

eventBus.once('test', callback);
eventBus.emit('test', 'Hello, EventBus!'); // 输出：Event received: Hello, EventBus!
eventBus.emit('test', 'Hello, EventBus!'); // 不会有任何输出