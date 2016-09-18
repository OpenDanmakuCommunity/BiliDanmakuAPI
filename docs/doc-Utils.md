# Utils

*Utils class*

- [Utils.delay()](#utilsdelay)
- [Utils.distance()](#utilsdistance)
- [Utils.formatTimes()](#utilsformattimes)
- [Utils.hue()](#utilshue)
- [Utils.interval()](#utilsinterval)
- [Utils.rand()](#utilsrand)
- [Utils.rgb()](#utilsrgb)

## Utils.delay()

**函数原型：**

```actionscript
function delay(f, time);
```

> 延迟执行
>
> 延迟执行函数

**返回：** `void`

| 参数 | 类型 | 描述 |
|---|---|---|
| `f` | `Function` | 要延迟执行的函数 |
| `time` | `Number` | 以毫秒为单位的延迟时间 |

**注：**

> 此函数不会因播放器暂停而终止执行

## Utils.distance()

**函数原型：**

```actionscript
function distance(x1, y1, x2, y2);
```

> 计算距离
>
> 计算坐标距离

**返回：** 以像素为单位的座标距离 (`Number`)

| 参数 | 类型 | 描述 |
|---|---|---|
| `x1` | `Number` | 计算起始坐标X轴 |
| `y1` | `Number` | 计算起始坐标Y轴 |
| `x2` | `Number` | 计算结束坐标X轴 |
| `y2` | `Number` | 计算结束坐标Y轴 |

## Utils.formatTimes()

**函数原型：**

```actionscript
function formatTimes(time);
```

> 格式化时间
>
> 格式化播放时间

**返回：** 格式化后的播放时间 (`String`)

| 参数 | 类型 | 描述 |
|---|---|---|
| `time` | `Number` | 以秒为单位的播放时间 |

## Utils.hue()

**函数原型：**

```actionscript
function hue(v);
```

> 映射色相
>
> 将0-360的值映射到色相环上,例如
0 -> 0x0000ff
120 -> 0xff0000
240 -> 0x00ff00

**返回：** 一个色彩代码 (`int`)

| 参数 | 类型 | 描述 |
|---|---|---|
| `v` | `int` | 一个整数 |

## Utils.interval()

**函数原型：**

```actionscript
function interval(f, [time = 1000], [times = 1]);
```

> 定时执行
>
> 定时执行函数

**返回：** `void`

| 参数 | 类型 | 描述 |
|---|---|---|
| `f` | `Function` | 要定时执行的函数 |
| `time` | `Number` | 以毫秒为单位的定时时间 |
| `times` | `uint` | 以次为单位的执行次数 0为无限次 |

## Utils.rand()

**函数原型：**

```actionscript
function rand(min, max);
```

> 生成随机数
>
> 返回一个伪随机数 n，其中 min <= n > max。因为该计算不可避免地包含某些非随机的成分，所以返回的数字以保密方式计算且为“伪随机数”。

**返回：** 伪随机数 n，其中 min <= n > max (`Number`)

| 参数 | 类型 | 描述 |
|---|---|---|
| `min` | `Number` | 伪随机数最小值 |
| `max` | `Number` | 伪随机数最大值 |

## Utils.rgb()

**函数原型：**

```actionscript
function rgb(r, g, b);
```

> 映射色彩值
>
> 将RGB值映射到色彩值上

**返回：** 一个色彩代码 (`int`)

| 参数 | 类型 | 描述 |
|---|---|---|
| `r` | `int` | 一个整数 RED |
| `g` | `int` | 一个整数 GREEN |
| `b` | `int` | 一个整数 BLUE |

