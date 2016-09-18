# Display.createGraphic.graphics

- [Display.createGraphic.graphics.beginFill()](#displaycreategraphicgraphicsbeginfill)
- [Display.createGraphic.graphics.beginGradientFill()](#displaycreategraphicgraphicsbegingradientfill)
- [Display.createGraphic.graphics.clear()](#displaycreategraphicgraphicsclear)
- [Display.createGraphic.graphics.curveTo()](#displaycreategraphicgraphicscurveto)
- [Display.createGraphic.graphics.drawCircle()](#displaycreategraphicgraphicsdrawcircle)
- [Display.createGraphic.graphics.drawEllipse()](#displaycreategraphicgraphicsdrawellipse)
- [Display.createGraphic.graphics.drawRect()](#displaycreategraphicgraphicsdrawrect)
- [Display.createGraphic.graphics.drawRoundRect()](#displaycreategraphicgraphicsdrawroundrect)
- [Display.createGraphic.graphics.endFill()](#displaycreategraphicgraphicsendfill)
- [Display.createGraphic.graphics.lineGradientStyle()](#displaycreategraphicgraphicslinegradientstyle)
- [Display.createGraphic.graphics.lineStyle()](#displaycreategraphicgraphicslinestyle)
- [Display.createGraphic.graphics.lineTo()](#displaycreategraphicgraphicslineto)
- [Display.createGraphic.graphics.moveTo()](#displaycreategraphicgraphicsmoveto)

## Display.createGraphic.graphics.beginFill()

**函数原型：**

```actionscript
function beginFill(color, [alpha = 1.0]);
```

> ERR: NO COMP DESC
>
> 指定一种简单的单一颜色填充，可将该填充用于随后调用对象的其它 Graphics 方法（如 lineTo() 或 drawCircle()）。
该填充将保持有效，直到您调用 beginFill() 或 beginGradientFill() 方法。
调用 clear() 方法会清除填充。
在调用 endFill() 方法之前，不会呈现填充。

**返回：** `void`

| 参数 | 类型 | 描述 |
|---|---|---|
| `color` | `uint` | 填充的颜色 |
| `alpha` | `Number` | 填充的 Alpha 值（从 0.0 到 1.0）。 |

## Display.createGraphic.graphics.beginGradientFill()

**函数原型：**

```actionscript
function beginGradientFill(type, colors, alphas, ratios, [matrix = null], [spreadMethod = "pad"], [interpolationMethod = "rgb"], [focalPointRatio = 0]);
```

> ERR: NO COMP DESC
>
> 指定一种渐变填充，可将该填充用于随后调用对象的其它 Graphics 方法（如 lineTo() 或 drawCircle()）。
该填充将保持有效，直到您调用 beginFill() 或 beginGradientFill() 方法。
调用 clear() 方法会清除填充。
在调用 endFill() 方法之前，不会呈现填充。

**返回：** `void`

| 参数 | 类型 | 描述 |
|---|---|---|
| `type` | `String` | 用于指定要使用哪种渐变类型的 GradientType 值：linear 或 radial。 |
| `colors` | `Array<uint>` | 要在渐变中使用的 RGB 十六进制颜色值数组（例如，红色为 0xFF0000，蓝色为 0x0000FF，等等）。可以至多指定 15 种颜色。对于每种颜色，请确保在 alphas 和 ratios 参数中指定对应的值。 |
| `alphas` | `Array<Number>` | colors 数组中对应颜色的 alpha 值数组；有效值为 0 到 1。如果值小于 0，则默认值为 0。如果值大于 1，则默认值为 1。 |
| `ratios` | `Array<int>` | 颜色分布比例的数组；有效值为 0 到 255。该值定义 100% 采样的颜色所在位置的宽度百分比。值 0 表示渐变框中的左侧位置，255 表示渐变框中的右侧位置。注意：该值表示渐变框中的位置，而不是最终渐变的坐标空间，坐标空间可能比渐变框宽或窄。为 colors 参数中的每个值指定一个值。数组中的值必须持续增加；例如，[0, 63, 127, 190, 255]。 |
| `matrix` | `Matrix` | 一个由 Matrix 类定义的转换矩阵。Matrix 类包括 createGradientBox() 方法，通过该方法可以方便地设置矩阵，以便与 beginGradientFill() 方法一起使用，亦可使用$.createGradientBox()。 |
| `spreadMethod` | `String` | 用于指定要使用哪种 spread 方法。值：pad、reflect 或 repeat。 |
| `interpolationMethod` | `String` | 用于指定要使用哪个值。值：linearRGB 或 rgb。 |
| `focalPointRatio` | `Number` | 一个控制渐变的焦点位置的数字。0 表示焦点位于中心，1 表示焦点位于渐变圆的一条边界上，-1 表示焦点位于渐变圆的另一条边界上。小于 -1 或大于 1 的值将舍入为 -1 或 1。 |

## Display.createGraphic.graphics.clear()

**函数原型：**

```actionscript
function clear();
```

> ERR: NO COMP DESC
>
> 清除绘制到此 Graphics 对象的图形，并重置填充和线条样式设置。

**返回：** `void`

## Display.createGraphic.graphics.curveTo()

**函数原型：**

```actionscript
function curveTo(controlX, controlY, anchorX, anchorY);
```

> ERR: NO COMP DESC
>
> 通过由 (controlX, controlY) 指定的控制点，使用当前线条样式绘制一条从当前绘画位置开始到 (anchorX, anchorY) 结束的曲线。 当前绘画位置随后设置为 (anchorX, anchorY)。如果正在其中绘制的影片剪辑包含用 Flash 绘画工具创建的内容，则调用 curveTo() 方法将在该内容下面进行绘制。如果在调用 moveTo() 方法之前调用了 curveTo() 方法，则当前绘画位置的默认值为 (0, 0)。如果缺少任何一个参数，则此方法将失败，并且当前绘画位置不改变。
绘制的曲线是二次贝塞尔曲线。二次贝塞尔曲线包含两个锚点和一个控制点。 该曲线内插这两个锚点，并向控制点弯曲。

**返回：** `void`

| 参数 | 类型 | 描述 |
|---|---|---|
| `controlX` | `Number` | 一个数字，指定控制点相对于父显示对象注册点的水平位置。 |
| `controlY` | `Number` | 一个数字，指定控制点相对于父显示对象注册点的垂直位置。 |
| `anchorX` | `Number` | 一个数字，指定下一个锚点相对于父显示对象注册点的水平位置。 |
| `anchorY` | `Number` | 一个数字，指定下一个锚点相对于父显示对象注册点的垂直位置。 |

## Display.createGraphic.graphics.drawCircle()

**函数原型：**

```actionscript
function drawCircle(x, y, radius);
```

> ERR: NO COMP DESC
>
> 绘制一个圆。您必须在调用 drawCircle() 方法之前，通过调用 linestyle()、lineGradientStyle()、beginFill() 或 beginGradientFill() 方法来设置线条样式和/或填充。

**返回：** `void`

| 参数 | 类型 | 描述 |
|---|---|---|
| `x` | `Number` | 相对于父显示对象注册点的圆心的 x 位置（以像素为单位）。 |
| `y` | `Number` | 相对于父显示对象注册点的圆心的 y 位置（以像素为单位）。 |
| `radius` | `Number` | 圆的半径（以像素为单位）。 |

## Display.createGraphic.graphics.drawEllipse()

**函数原型：**

```actionscript
function drawEllipse(x, y, width, height);
```

> ERR: NO COMP DESC
>
> 绘制一个椭圆。您必须在调用 drawEllipse() 方法之前，通过调用 linestyle()、lineGradientStyle()、beginFill() 或 beginGradientFill() 方法来设置线条样式和/或填充。

**返回：** `void`

| 参数 | 类型 | 描述 |
|---|---|---|
| `x` | `Number` | 相对于父显示对象注册点的椭圆圆心的 x 位置（以像素为单位）。 |
| `y` | `Number` | 相对于父显示对象注册点的椭圆圆心的 y 位置（以像素为单位）。 |
| `width` | `Number` | 椭圆的宽度（以像素为单位）。 |
| `height` | `Number` | 椭圆的高度（以像素为单位）。 |

## Display.createGraphic.graphics.drawRect()

**函数原型：**

```actionscript
function drawRect(x, y, width, height);
```

> ERR: NO COMP DESC
>
> 绘制一个矩形。您必须在调用 drawRect() 方法之前，通过调用 linestyle()、lineGradientStyle()、beginFill() 或 beginGradientFill() 方法来设置线条样式和/或填充。

**返回：** `void`

| 参数 | 类型 | 描述 |
|---|---|---|
| `x` | `Number` | 一个表示相对于父显示对象注册点的水平位置的数字（以像素为单位）。 |
| `y` | `Number` | 一个表示相对于父显示对象注册点的垂直位置的数字（以像素为单位）。 |
| `width` | `Number` | 矩形的宽度（以像素为单位）。 |
| `height` | `Number` | 矩形的高度（以像素为单位）。 |

## Display.createGraphic.graphics.drawRoundRect()

**函数原型：**

```actionscript
function drawRoundRect(x, y, width, height, ellipseWidth, ellipseHeight);
```

> ERR: NO COMP DESC
>
> 绘制一个矩形。您必须在调用 drawRoundRect() 方法之前，通过调用 linestyle()、lineGradientStyle()、beginFill() 或 beginGradientFill() 方法来设置线条样式和/或填充。

**返回：** `void`

| 参数 | 类型 | 描述 |
|---|---|---|
| `x` | `Number` | 一个表示相对于父显示对象注册点的水平位置的数字（以像素为单位）。 |
| `y` | `Number` | 一个表示相对于父显示对象注册点的垂直位置的数字（以像素为单位）。 |
| `width` | `Number` | 圆角矩形的宽度（以像素为单位）。 |
| `height` | `Number` | 圆角矩形的高度（以像素为单位）。 |
| `ellipseWidth` | `Number` | 用于绘制圆角的椭圆的宽度（以像素为单位）。 |
| `ellipseHeight` | `Number` | 用于绘制圆角的椭圆的高度（以像素为单位）。（可选）如果未指定值，则默认值与为 ellipseWidth 参数提供的值相匹配。 |

## Display.createGraphic.graphics.endFill()

**函数原型：**

```actionscript
function endFill();
```

> ERR: NO COMP DESC
>
> 对从上一次调用 beginFill() 或 beginGradientFill() 方法之后添加的直线和曲线应用填充。 Flash 使用的是对 beginFill() 或 beginGradientFill() 方法的先前调用中指定的填充。如果当前绘画位置不等于 moveTo() 方法中指定的上一个位置，而且定义了填充，则用线条闭合该路径，然后进行填充。

**返回：** `void`

## Display.createGraphic.graphics.lineGradientStyle()

**函数原型：**

```actionscript
function lineGradientStyle(type, colors, alphas, ratios, [matrix = null], [spreadMethod = "pad"], [interpolationMethod = "rgb"], [focalPointRatio = 0]);
```

> ERR: NO COMP DESC
>
> 指定一种线条样式的渐变，Flash Player 可将该渐变用于随后调用对象的其它 Graphics 方法（如 lineTo() 或 drawCircle()）。线条样式仍然有效，直到使用不同的参数调用 lineStyle() 方法或 lineGradientStyle() 方法为止。可以在绘制路径的中间调用 lineGradientStyle() 方法以为路径中的不同线段指定不同的样式。
在调用 lineGradientStyle() 之前调用 lineStyle() 以启用笔触，否则线条样式的值仍然是 undefined。

**返回：** `void`

| 参数 | 类型 | 描述 |
|---|---|---|
| `type` | `String` | 用于指定要使用哪种渐变类型的 GradientType 类型。值：GradientType.LINEAR 或 GradientType.RADIAL。 |
| `colors` | `Array<uint>` | 要在渐变中使用的 RGB 十六进制颜色值数组（例如，红色为 0xFF0000，蓝色为 0x0000FF 等等）。 |
| `alphas` | `Array<Number>` | colors 数组中对应颜色的 alpha 值数组，有效值为 0 到 100。如果值小于 0，Flash Player 将使用 0；如果值大于 100，Flash Player 将使用 100。 |
| `ratios` | `Array<Number>` | 颜色分布比率的数组，有效值为 0 到 255。该值定义 100% 采样的颜色所在位置的宽度百分比。值 0 表示渐变框中的左侧位置，255 表示渐变框中的右侧位置。该值表示渐变框中的位置，而不是最终渐变的坐标空间，坐标空间可能比渐变框宽或窄。为 colors 参数中的每个值指定一个值。数组中的值必须持续增加；例如，[0, 63, 127, 190, 255]。 |
| `matrix` | `Matrix` | 一个由 Matrix 类定义的转换矩阵。Matrix 类包括 createGradientBox() 方法，通过该方法可以方便地设置矩阵，以便与 beginGradientFill() 方法一起使用，亦可使用$.createGradientBox()。 |
| `spreadMethod` | `String` | 用于指定要使用哪种 spread 方法。值：pad, reflect, repeat。 |
| `interpolationMethod` | `String` | 用于指定要使用哪个值。值：linearRGB 或 rgb。 |
| `focalPointRatio` | `Number` | 一个控制渐变的焦点位置的数字。0 表示焦点位于中心，1 表示焦点位于渐变圆的一条边界上，-1 表示焦点位于渐变圆的另一条边界上。小于 -1 或大于 1 的值将舍入为 -1 或 1。 |

**注：**

> 调用 clear() 会将线条样式设置回 undefined。

## Display.createGraphic.graphics.lineStyle()

**函数原型：**

```actionscript
function lineStyle(thickness, [color = 0], [alpha = 1.0], [pixelHinting = false], [scaleMode = "normal"], [caps = null], [joints = null], [miterLimit = 3]);
```

> ERR: NO COMP DESC
>
> 指定一种线条样式，Flash 可将该样式用于随后调用对象的其它 Graphics 方法（如 lineTo() 或 drawCircle()）。线条样式仍然有效，直到使用不同的参数调用 lineGradientStyle() 方法或 lineStyle() 方法为止。可以在绘制路径的中间调用 lineStyle()，以便为路径中的不同线段指定不同的样式。

**返回：** `void`

| 参数 | 类型 | 描述 |
|---|---|---|
| `thickness` | `Number` | 一个整数，以磅为单位表示线条的粗细，有效值为 0 到 255。如果未指定数字，或者未定义该参数，则不绘制线条。如果传递的值小于 0，则默认值为 0。值 0 表示极细的粗细；最大粗细为 255。如果传递的值大于 255，则默认值为 255。 |
| `color` | `uint` | 线条的十六进制颜色值（例如，红色为 0xFF0000，蓝色为 0x0000FF 等）。如果未指明值，则默认值为 0x000000（黑色）。可选。 |
| `alpha` | `Number` | 表示线条颜色的 Alpha 值的数字，有效值为 0 到 1。如果未指明值，则默认值为 1（纯色）。如果值小于 0，则默认值为 0；如果值大于 1，则默认值为 1。 |
| `pixelHinting` | `Boolean` | 用于指定是否提示笔触采用完整像素的布尔值。它同时影响曲线锚点的位置以及线条笔触大小本身。在 pixelHinting 设置为 true 的情况下，Flash Player 将提示线条宽度采用完整像素宽度。在 pixelHinting 设置为 false 的情况下，对于曲线和直线可能会出现脱节。如果未提供值，则线条不使用像素提示。 |
| `scaleMode` | `String` | 用于指定要使用哪种缩放模式的 LineScaleMode 类的值：normal（在缩放对象时总是缩放线条的粗细，默认值）, none（从不缩放线条粗细）,vertical（如果仅垂直缩放对象，则不缩放线条粗细）, horizontal（如果仅水平缩放对象，则不缩放线条粗细） |
| `caps` | `String` | 用于指定线条末端处端点类型的 CapsStyle 类的值。有效值为：none、round 和 square。如果未指示值，则 Flash 使用圆头端点。 |
| `joints` | `String` | JointStyle 类的值，指定用于拐角的连接外观的类型。有效值为：bevel、miter 和 round。如果未指示值，则 Flash 使用圆角连接。注意：对于设置为 JointStyle.MITER 的 joints，您可以使用 miterLimit 参数限制尖角的长度。 |
| `miterLimit` | `Number` | 一个表示将在哪个限制位置切断尖角的数字。有效值的范围是 1 到 255（超出该范围的值将舍入为 1 或 255）。此值只可用于 jointStyle 设置为 "miter" 的情况下。miterLimit 值表示向外延伸的尖角可以超出角边相交所形成的结合点的长度。此值表示为线条 thickness 的因子。例如，miterLimit 因子为 2.5 且 thickness 为 10 像素时，尖角将在 25 像素处切断。请注意，对于给定的 miterLimit 值，会有一个被切断的尖角的特定最大角度。 |

**注：**

> 调用 clear() 方法会将线条样式设置回 undefined。

## Display.createGraphic.graphics.lineTo()

**函数原型：**

```actionscript
function lineTo(x, y);
```

> ERR: NO COMP DESC
>
> 使用当前线条样式绘制一条从当前绘画位置开始到 (x, y) 结束的直线；当前绘画位置随后会设置为 (x, y)。如果正在其中绘制的显示对象包含用 Flash 绘画工具创建的内容，则调用 lineTo() 方法将在该内容下面进行绘制。如果在对 moveTo() 方法进行任何调用之前调用了 lineTo()，则当前绘画的默认位置为 (0, 0)。如果缺少任何一个参数，则此方法将失败，并且当前绘画位置不改变。

**返回：** `void`

| 参数 | 类型 | 描述 |
|---|---|---|
| `x` | `Number` | 一个表示相对于父显示对象注册点的水平位置的数字（以像素为单位）。 |
| `y` | `Number` | 一个表示相对于父显示对象注册点的垂直位置的数字（以像素为单位）。 |

## Display.createGraphic.graphics.moveTo()

**函数原型：**

```actionscript
function moveTo(x, y);
```

> ERR: NO COMP DESC
>
> 将当前绘画位置移动到 (x, y)。如果缺少任何一个参数，则此方法将失败，并且当前绘画位置不改变。

**返回：** `void`

| 参数 | 类型 | 描述 |
|---|---|---|
| `x` | `Number` | 一个表示相对于父显示对象注册点的水平位置的数字（以像素为单位）。 |
| `y` | `Number` | 一个表示相对于父显示对象注册点的垂直位置的数字（以像素为单位）。 |

