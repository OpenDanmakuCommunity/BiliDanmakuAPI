# Bitmap

*Bitmap class (load('bitmap') first)*

- [Bitmap.createBitmap()](#bitmapcreatebitmap)
- [Bitmap.createBitmapData()](#bitmapcreatebitmapdata)
- [Bitmap.createRectangle()](#bitmapcreaterectangle)

## Bitmap.createBitmap()

**函数原型：**

```actionscript
function createBitmap(param, [bitmapData = null], [pixelSnapping = "auto"], [smoothing = false], [parent = undefined], [scale = 1]);
```

> 创建位图对象
>
> 初始化 Bitmap 对象以引用指定的 BitmapData 对象。

**返回：** `CommentBitmap`

| 参数 | 类型 | 描述 |
|---|---|---|
| `param` | `Object` | 包括以下参数。其他参数请详阅 Display#通用创建参数。 |
| `bitmapData` | `BitmapData` | 被引用的 BitmapData 对象。 |
| `pixelSnapping` | `String` | Bitmap 对象是否贴紧至最近的像素。 |
| `smoothing` | `Boolean` | 在缩放时是否对位图进行平滑处理。 |
| `parent` | `Object` | 创建的 Bitmap 对象的父元件 |
| `scale` | `Number` | 创建的 Bitmap 对象的缩放比例 |

## Bitmap.createBitmapData()

**函数原型：**

```actionscript
function createBitmapData(width, height, [transparent = true], [fillColor = 0xffffffff]);
```

> 创建 BitmapData 对象
>
> 创建一个具有指定的宽度和高度的 BitmapData 对象。如果为 fillColor 参数指定一个值，则位图中的每个像素都将设置为该颜色。
默认情况下，将位图创建为透明位图，除非您为 transparent 参数传递值 false。创建了不透明位图后，将无法将其更改为透明位图。不透明位图中的每个像素仅使用 24 位的颜色通道信息。如果将位图定义为透明，则每个像素将使用 32 位的颜色通道信息，其中包括 Alpha 透明度通道。
BitmapData 对象的最大宽度或高度为 8,191 像素，并且像素总数不能超过 16,777,215 像素。（因此，如果 BitmapData 对象的宽度为 8,191 像素，则其高度只能为 2,048 像素。）

**返回：** `BitmapData`

| 参数 | 类型 | 描述 |
|---|---|---|
| `width` | `int` | 位图图像的宽度，以像素为单位。 |
| `height` | `int` | 位图图像的高度，以像素为单位。 |
| `transparent` | `Boolean` | 指定位图图像是否支持每个像素具有不同的透明度。默认值为 true（透明）。要创建完全透明的位图，请将 transparent 参数的值设置为 true，将 fillColor 参数的值设置为 0x00000000（或设置为 0）。将 transparent 属性设置为 false 可以略微提升呈现性能。 |
| `fillColor` | `uint` | 用于填充位图图像区域的 32 位 ARGB 颜色值。默认值为 0xFFFFFFFF（纯白色）。 |

## Bitmap.createRectangle()

**函数原型：**

```actionscript
function createRectangle([x = 0], [y = 0], [width = 0], [height = 0]);
```

> 创建矩形
>
> 创建一个新 Rectangle 对象，其左上角由 x 和 y 参数指定，并具有指定的 width 和 height 参数。如果调用此函数时不使用任何参数，将创建一个 x、y、width 和 height 属性均设置为 0 的矩形。

**返回：** `Rectangle`

| 参数 | 类型 | 描述 |
|---|---|---|
| `x` | `Number` | 矩形左上角的 x 坐标。 |
| `y` | `Number` | 矩形左上角的 y 坐标。 |
| `width` | `Number` | 矩形的宽度（以像素为单位） |
| `height` | `Number` | 矩形的高度（以像素为单位）。 |

