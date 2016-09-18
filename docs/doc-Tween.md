# Tween

*Tween class*

- [Tween.bezier()](#tweenbezier)
- [Tween.delay()](#tweendelay)
- [Tween.parallel()](#tweenparallel)
- [Tween.serial()](#tweenserial)
- [Tween.slice()](#tweenslice)
- [Tween.repeat()](#tweenrepeat)
- [Tween.reverse()](#tweenreverse)
- [Tween.to()](#tweento)
- [Tween.tween()](#tweentween)
- [Tween.scale()](#tweenscale)

## Tween.bezier()

**函数原型：**

```actionscript
function bezier(object, dest, src, control);
```

> 使用贝塞尔曲线移动对象
>
> 以贝赛尔曲线对物件进行移动

**返回：** `ITween`

| 参数 | 类型 | 描述 |
|---|---|---|
| `object` | `Object` | 要移动的物件 |
| `dest` | `Object` | 移动目标数值 |
| `src` | `Object` | 移动来源数值 |
| `control` | `Object` | 贝赛尔曲线控制点 |

## Tween.delay()

**函数原型：**

```actionscript
function delay(src, delay);
```

> 复制移动效果并且延迟执行
>
> 复制指定效果并延迟执行

**返回：** `ITween`

| 参数 | 类型 | 描述 |
|---|---|---|
| `src` | `ITween` | 复制来源效果 |
| `delay` | `Number` | 以秒为单位的延迟时间 |

## Tween.parallel()

**函数原型：**

```actionscript
function parallel(src1);
```

> 并行执行效果
>
> 并行执行效果

**返回：** `ITween`

| 参数 | 类型 | 描述 |
|---|---|---|
| `src1` | `ITween` | 并行执行效果来源 |

## Tween.serial()

**函数原型：**

```actionscript
function serial(src1);
```

> 串行执行效果
>
> 串行执行效果

**返回：** `ITween`

| 参数 | 类型 | 描述 |
|---|---|---|
| `src1` | `ITween` | 串行执行效果来源 |

## Tween.slice()

**函数原型：**

```actionscript
function slice(src, from, to);
```

> 取出指定效果时间
>
> 取出指定效果时间

**返回：** `ITween`

| 参数 | 类型 | 描述 |
|---|---|---|
| `src` | `ITween` | 复制来源效果 |
| `from` | `Number` | 起始时间(秒) |
| `to` | `Number` | 结束时间(秒) |

## Tween.repeat()

**函数原型：**

```actionscript
function repeat(src, times);
```

> 重复移动效果
>
> 重复指定效果

**返回：** `ITween`

| 参数 | 类型 | 描述 |
|---|---|---|
| `src` | `ITween` | 复制来源效果 |
| `times` | `int` | 效果执行次数 |

## Tween.reverse()

**函数原型：**

```actionscript
function reverse(src);
```

> 将移动反向
>
> 将指定效果反向

**返回：** `ITween`

| 参数 | 类型 | 描述 |
|---|---|---|
| `src` | `ITween` | 复制来源效果 |

## Tween.to()

**函数原型：**

```actionscript
function to(object, dest, duration, easing);
```

> 使用指定方法移动对象
>
> 使用指定方法对物件进行移动

**返回：** `ITween`

| 参数 | 类型 | 描述 |
|---|---|---|
| `object` | `Object` | 要移动的物件 |
| `dest` | `Object` | 移动目标数值 |
| `duration` | `Number` | 移动时间 |
| `easing` | `Function` | 移动函数 |

## Tween.tween()

**函数原型：**

```actionscript
function tween(object, dest, src, duration, easing);
```

> 使用指定方法移动对象
>
> 使用指定方法对物件进行移动

**返回：** `ITween`

| 参数 | 类型 | 描述 |
|---|---|---|
| `object` | `Object` | 要移动的物件 |
| `dest` | `Object` | 移动目标数值 |
| `src` | `Object` | 移动来源数值 |
| `duration` | `Number` | 移动时间 |
| `easing` | `Function` | 移动函数 请参阅 TweenEasing |

## Tween.scale()

**函数原型：**

```actionscript
function scale(src, scale);
```

> ERR: NO COMP DESC
>
> 复制指定效果并按时间拉伸

**返回：** `ITween`

| 参数 | 类型 | 描述 |
|---|---|---|
| `src` | `ITween` | 复制来源效果 |
| `scale` | `Number` | 时间轴缩放比例 |

