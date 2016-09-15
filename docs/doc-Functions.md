# 全局函数

- [trace()](#trace)
- [clear()](#clear)
- [parseInt()](#parseInt)
- [parseFloat()](#parseFloat)
- [timer()](#timer)
- [interval()](#interval)
- [foreach()](#foreach)
- [clone()](#clone)
- [load()](#load)

## trace()

**函数原型：**

```actionscript
function trace(s);
```

> 添加指定内容至日志中

**返回：** `void`

| 参数 | 类型 | 描述 |
|---|---|---|
| `s` | `String` | 要添加的内容 |

## clear()

**函数原型：**

```actionscript
function clear();
```

> 清空日志内容

**返回：** `void`

## parseInt()

**函数原型：**

```actionscript
function parseInt(str, [radix = 0]);
```

> 将字符串转换为整数。如果参数中指定的字符串不能转换为数字，则此函数返回 NaN。以 0x 开头的字符串被解释为十六进制数字。以 0 开头的整数不会被解释为八进制数字。必须指定 8 的基数才能解释为八进制数字。有效整数前面的空白和 0 以及后面的非数字字符将被忽略。

**返回：** 一个数字或 NaN（非数字）。 (`Number`)

| 参数 | 类型 | 描述 |
|---|---|---|
| `str` | `String` | 要转换为整数的字符串。 |
| `radix` | `uint` | 表示要分析的数字的基数（基）的整数。合法值为 2 到 36。 |

## parseFloat()

**函数原型：**

```actionscript
function parseFloat(str);
```

> 将字符串转换为浮点数。此函数读取或分析 并返回字符串中的数字，直到此函数遇到不是初始数字一部分的字符。如果字符串不是以可以分析的数字开头，parseFloat() 将返回 NaN。有效整数前面的空白将被忽略，有效整数后面的非数字字符也将被忽略。

**返回：** 一个数字或 NaN（非数字）。 (`Number`)

| 参数 | 类型 | 描述 |
|---|---|---|
| `str` | `String` | 要转换为整数的字符串。 |

## timer()

**函数原型：**

```actionscript
function timer(closure, delay);
```

> 在指定的延迟（以毫秒为单位）后运行指定的函数。

**返回：** 超时进程的唯一数字标识符。使用此标识符可通过调用 clearTimeout() 方法取消进程。 (`uint`)

| 参数 | 类型 | 描述 |
|---|---|---|
| `closure` | `Function` | 要执行的函数的名称。不要包括引号或圆括号，并且不要指定要调用的函数的参数。例如，使用 functionName，而不要使用 functionName() 或 functionName(param)。 |
| `delay` | `Number` | 执行函数之前的延迟时间（以毫秒为单位）。 |

## interval()

**函数原型：**

```actionscript
function interval(closure, delay, times);
```

> 在指定的延迟（以毫秒为单位）后运行指定的函数。

**返回：** 超时进程的唯一标识符。使用此标识符可通过调用 Timer.stop() 方法取消进程。 (`Timer`)

| 参数 | 类型 | 描述 |
|---|---|---|
| `closure` | `Function` | 要执行的函数的名称。不要包括引号或圆括号，并且不要指定要调用的函数的参数。例如，使用 functionName，而不要使用 functionName() 或 functionName(param)。 |
| `delay` | `Number` | 间隔（以毫秒为单位）。 |
| `times` | `Number` | 运行次数。 |

## foreach()

**函数原型：**

```actionscript
function foreach(loop, f);
```

> 遍历指定Object

**返回：** `void`

| 参数 | 类型 | 描述 |
|---|---|---|
| `loop` | `Object` | 被遍历的Object |
| `f` | `Function` | 遍历回调函数 |

**注：**

> 回调函数定义
>
> function foreachCallback(key : String, value : *) : void;
>
> ====回调函数参数定义====
>
> key : String : 键值名
>
> value : * : 值

## clone()

**函数原型：**

```actionscript
function clone(object);
```

> 复制指定Object

**返回：** `Object`

| 参数 | 类型 | 描述 |
|---|---|---|
| `object` | `Object` | 被复制的Object |

**注：**

> 此功能无法复制函数

## load()

**函数原型：**

```actionscript
function load(library, onComplete);
```

> 加载外部库

**返回：** `void`

| 参数 | 类型 | 描述 |
|---|---|---|
| `library` | `String` | 库名称 |
| `onComplete` | `Function` | 加载完成时执行的回调函数 |

