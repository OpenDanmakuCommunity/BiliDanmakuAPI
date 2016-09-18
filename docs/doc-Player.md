# Player

*Player class*

- [Player.commentList](#playercommentlist)
- [Player.commentTrigger()](#playercommenttrigger)
- [Player.createSound()](#playercreatesound)
- [Player.height](#playerheight)
- [Player.jump()](#playerjump)
- [Player.keyTrigger()](#playerkeytrigger)
- [Player.pause()](#playerpause)
- [Player.play()](#playerplay)
- [Player.refreshRate](#playerrefreshrate)
- [Player.seek()](#playerseek)
- [Player.setMask()](#playersetmask)
- [Player.state](#playerstate)
- [Player.time](#playertime)
- [Player.videoHeight](#playervideoheight)
- [Player.videoWidth](#playervideowidth)
- [Player.width](#playerwidth)

## Player.commentList

> 获取当前弹幕列表

**返回：** `Array<CommentData>`

## Player.commentTrigger()

**函数原型：**

```actionscript
function commentTrigger(f, [timeout = 1000]);
```

> 监听发送弹幕
>
> 监听发送弹幕

**返回：** `uint`

| 参数 | 类型 | 描述 |
|---|---|---|
| `f` | `Function` | 发送弹幕时执行的回调函数 |
| `timeout` | `Number` | 监听超时时间(ms) |

**注：**

> 此函数不会因播放器暂停而终止执行。
>
> 回调函数定义
>
> function commentCallback(cd:CommentData):void;

## Player.createSound()

**函数原型：**

```actionscript
function createSound(t, [onLoad = null]);
```

> 建立声音元件
>
> 建立声音元件

**返回：** `ScriptSound`

| 参数 | 类型 | 描述 |
|---|---|---|
| `t` | `String` | 播放声音类型 |
| `onLoad` | `Function` | 载入完成时的回调函数 |

## Player.height

> 播放器高度(只读)

**返回：** `int`

## Player.jump()

**函数原型：**

```actionscript
function jump(av, [page = 1], [newWindow = false]);
```

> 跳至视频
>
> 跳至指定AV号指定页的视频

**返回：** `void`

| 参数 | 类型 | 描述 |
|---|---|---|
| `av` | `String` | 要跳转的视频(如av120040)。 |
| `page` | `Number` | 要跳转的视频页数。 |
| `newWindow` | `Boolean` | 是否打开新窗口进行跳转 |

## Player.keyTrigger()

**函数原型：**

```actionscript
function keyTrigger(f, [timeout = 1000], [up = false]);
```

> 监听键盘输入
>
> 监听键盘输入

**返回：** `uint`

| 参数 | 类型 | 描述 |
|---|---|---|
| `f` | `Function` | 键盘按下时的回调函数 |
| `timeout` | `Number` | 监听超时时间 |
| `up` | `Boolean` | 是否为监听keyUp事件 |

**注：**

> 此函数不会因播放器暂停而终止执行
>
> 此函数只能监听数字键盘 0-9 及 上下左右 Home, End, Page UP, Page Down, W, S, A, D
>
> 回调函数定义
>
> function keyCallback(key:int):void;

## Player.pause()

**函数原型：**

```actionscript
function pause();
```

> 暂停视频
>
> 暂停视频流的回放。如果视频已经暂停，则调用此方法将不会执行任何操作。要在暂时视频后恢复播放，请调用 play()。

**返回：** `void`

## Player.play()

**函数原型：**

```actionscript
function play();
```

> 播放视频
>
> 开始播放媒体文件

**返回：** `void`

## Player.refreshRate

> 弹幕刷新时间(ms)

**返回：** `int`

## Player.seek()

**函数原型：**

```actionscript
function seek(offset);
```

> 跳至时间
>
> 搜索与指定位置最接近的关键帧（在视频行业中也称为 I 帧）。关键帧位于从流的开始处算起的偏移位置（以毫秒为单位）。
视频流通常是使用以下两种类型的帧进行编码的：关键帧（或 I 帧）和 P 帧。关键帧包含完整图像；而 P 帧是一个中间帧，它在两个关键帧之间提供额外的视频信息。通常，视频流每 10 到 50 帧中有一个关键帧。

**返回：** `void`

| 参数 | 类型 | 描述 |
|---|---|---|
| `offset` | `Number` | 要在视频文件中移动到的时间近似值（以毫秒为单位）。 |

## Player.setMask()

**函数原型：**

```actionscript
function setMask(obj);
```

> 设置播放器遮罩
>
> 设置播放器遮罩

**返回：** `void`

| 参数 | 类型 | 描述 |
|---|---|---|
| `obj` | `DisplayObject` | 作为遮罩的图形对象 |

## Player.state

> 播放器状态(只读)

**返回：** `String`

## Player.time

> 播放距头的位置(只读)

**返回：** `Number`

## Player.videoHeight

> 视频高度(只读)

**返回：** `int`

## Player.videoWidth

> 视频宽度(只读)

**返回：** `int`

## Player.width

> 播放器宽度(只读)

**返回：** `int`

