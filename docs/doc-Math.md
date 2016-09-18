# Math

*Math class*

- [Math.abs()](#mathabs)
- [Math.acos()](#mathacos)
- [Math.asin()](#mathasin)
- [Math.atan()](#mathatan)
- [Math.atan2()](#mathatan2)
- [Math.ceil()](#mathceil)
- [Math.cos()](#mathcos)
- [Math.E](#mathe)
- [Math.exp()](#mathexp)
- [Math.floor()](#mathfloor)
- [Math.log()](#mathlog)
- [Math.max()](#mathmax)
- [Math.min()](#mathmin)
- [Math.PI](#mathpi)
- [Math.pow()](#mathpow)
- [Math.random()](#mathrandom)
- [Math.round()](#mathround)
- [Math.sin()](#mathsin)
- [Math.sqrt()](#mathsqrt)
- [Math.tan()](#mathtan)

## Math.abs()

**函数原型：**

```actionscript
function abs(val);
```

> 获取绝对值
>
> 计算并返回由参数 val 指定的数字的绝对值。

**返回：** 指定参数的绝对值。 (`Number`)

| 参数 | 类型 | 描述 |
|---|---|---|
| `val` | `Number` | 要返回绝对值的数字。 |

## Math.acos()

**函数原型：**

```actionscript
function acos(val);
```

> 反余弦
>
> 以弧度为单位计算并返回由参数 val 指定的数字的反余弦值。

**返回：** 参数 val 的反余弦值。 (`Number`)

| 参数 | 类型 | 描述 |
|---|---|---|
| `val` | `Number` | -1.0 到 1.0 之间的一个数字。 |

## Math.asin()

**函数原型：**

```actionscript
function asin(val);
```

> 反正弦
>
> 以弧度为单位计算并返回由参数 val 指定的数字的反正弦值。

**返回：** 参数 val 的正余弦值。 (`Number`)

| 参数 | 类型 | 描述 |
|---|---|---|
| `val` | `Number` | -1.0 到 1.0 之间的一个数字。 |

## Math.atan()

**函数原型：**

```actionscript
function atan(val);
```

> 反正切
>
> 以弧度为单位计算并返回角度值，该角度的正切值已由参数 val 指定。返回值介于负二分之 pi 和正二分之 pi 之间。

**返回：** 介于负二分之 pi 和正二分之 pi 之间的一个数字。 (`Number`)

| 参数 | 类型 | 描述 |
|---|---|---|
| `val` | `Number` | 表示角的正切值的一个数字。 |

## Math.atan2()

**函数原型：**

```actionscript
function atan2(y, x);
```

> 反正切
>
> 以弧度为单位计算并返回点 y/x 的角度，该角度从圆的 x 轴（其中，0,0 表示圆心）沿逆时针方向测量。返回值介于正 pi 和负 pi 之间。请注意，atan2 的第一个参数始终是 y 坐标。

**返回：** 一个数字。 (`Number`)

| 参数 | 类型 | 描述 |
|---|---|---|
| `y` | `Number` | 该点的 y 坐标。 |
| `x` | `Number` | 该点的 x 坐标。 |

## Math.ceil()

**函数原型：**

```actionscript
function ceil(val);
```

> 返回上限整数
>
> 返回指定数字或表达式的上限值。数字的上限值是大于等于该数字的最接近的整数。

**返回：** 最接近且大于等于参数 val 的整数。 (`Number`)

| 参数 | 类型 | 描述 |
|---|---|---|
| `val` | `Number` | 一个数字或表达式。 |

## Math.cos()

**函数原型：**

```actionscript
function cos(angleRadians);
```

> 余弦
>
> 以弧度为单位计算并返回指定角度的余弦值。要计算弧度，请参阅 Math 类的概述。

**返回：** -1.0 到 1.0 之间的一个数字。 (`Number`)

| 参数 | 类型 | 描述 |
|---|---|---|
| `angleRadians` | `Number` | 一个数字，它表示一个以弧度为单位的角度。 |

## Math.E

> 自然对数底数

**返回：** `Number`

## Math.exp()

**函数原型：**

```actionscript
function exp(val);
```

> 以e为底的指数
>
> 返回自然对数的底 (e) 的 x 次幂的值，x 由参数 x 指定。常量 Math.E 可以提供 e 的值。

**返回：** e 的 x 次幂，x 由参数 val 指定。 (`Number`)

| 参数 | 类型 | 描述 |
|---|---|---|
| `val` | `Number` | 指数；一个数字或表达式。 |

## Math.floor()

**函数原型：**

```actionscript
function floor(val);
```

> 返回下限整数
>
> 返回由参数 val 指定的数字或表达式的下限值。下限值是小于等于指定数字或表达式的最接近的整数。

**返回：** 最接近且小于等于参数 val 的整数。 (`Number`)

| 参数 | 类型 | 描述 |
|---|---|---|
| `val` | `Number` | 一个数字或表达式。 |

## Math.log()

**函数原型：**

```actionscript
function log(val);
```

> 自然对数
>
> 返回参数 val 的自然对数。

**返回：** 参数 val 的自然对数。 (`Number`)

| 参数 | 类型 | 描述 |
|---|---|---|
| `val` | `Number` | 其值大于 0 的数字或表达式。 |

## Math.max()

**函数原型：**

```actionscript
function max(val1, val2, [... rest]);
```

> 返回最大值
>
> 计算 val1 和 val2（或更多的值）并返回最大值。

**返回：** 参数 val1 和 val2（或更多值）的最大值。 (`Number`)

| 参数 | 类型 | 描述 |
|---|---|---|
| `val1` | `Number` | 一个数字或表达式。 |
| `val2` | `Number` | 一个数字或表达式。 |
| `... rest` | `Number` | 一个数字或表达式。Math.max() 可以接受多个参数。 |

## Math.min()

**函数原型：**

```actionscript
function min(val1, val2, [... rest]);
```

> 返回最大值
>
> 计算 val1 和 val2（或更多的值）并返回最小值。

**返回：** 参数 val1 和 val2（或更多值）的最小值。 (`Number`)

| 参数 | 类型 | 描述 |
|---|---|---|
| `val1` | `Number` | 一个数字或表达式。 |
| `val2` | `Number` | 一个数字或表达式。 |
| `... rest` | `Number` | 一个数字或表达式。Math.min() 可以接受多个参数。 |

## Math.PI

> π

**返回：** `Number`

## Math.pow()

**函数原型：**

```actionscript
function pow(base, pow);
```

> 计算幂函数
>
> 计算并返回 base 的 pow 次幂。

**返回：** base 的 pow 次幂的值。 (`Number`)

| 参数 | 类型 | 描述 |
|---|---|---|
| `base` | `Number` | 将自乘参数 pow 次的数字。 |
| `pow` | `Number` | 指定参数 base 的自乘次数的数字。 |

## Math.random()

**函数原型：**

```actionscript
function random();
```

> 返回伪随机数
>
> 返回一个伪随机数 n，其中 0 <= n < 1。因为该计算不可避免地包含某些非随机的成分，所以返回的数字以保密方式计算且为“伪随机数”。

**返回：** 一个伪随机数。 (`Number`)

## Math.round()

**函数原型：**

```actionscript
function round(val);
```

> 四舍五入取整
>
> 将参数 val 的值向上或向下舍入为最接近的整数并返回该值。如果 val 与最接近的两个整数等距离（即该数字以 .5 结尾），则该值向上舍入为下一个较大的整数。

**返回：** 参数 val 舍入为最近的整数。 (`Number`)

| 参数 | 类型 | 描述 |
|---|---|---|
| `val` | `Number` | 要舍入的数字。。 |

## Math.sin()

**函数原型：**

```actionscript
function sin(angleRadians);
```

> 正弦
>
> 以弧度为单位计算并返回指定角度的正弦值。要计算弧度，请参阅 Math 类的概述。

**返回：** 一个数字；指定角度的正弦值（介于 -1.0 和 1.0 之间）。 (`Number`)

| 参数 | 类型 | 描述 |
|---|---|---|
| `angleRadians` | `Number` | 一个数字，它表示一个以弧度为单位的角度。 |

## Math.sqrt()

**函数原型：**

```actionscript
function sqrt(val);
```

> 计算平方根
>
> 计算并返回指定数字的平方根。

**返回：** 如果参数 val 大于等于 0，则为一个数字，否则为 NaN（非数字）。 (`Number`)

| 参数 | 类型 | 描述 |
|---|---|---|
| `val` | `Number` | 一个大于等于 0 的数字或表达式。 |

## Math.tan()

**函数原型：**

```actionscript
function tan(val);
```

> 正切
>
> 计算并返回指定角度的正切值。要计算弧度，请参阅 Math 类的概述。

**返回：** 一个数字，它表示一个以弧度为单位的角度。 (`Number`)

| 参数 | 类型 | 描述 |
|---|---|---|
| `val` | `Number` | 参数 angleRadians 的正切值。 |

