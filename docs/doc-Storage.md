# Storage

*Storage class (load('storage') first*

- [Storage.loadData()](#storageloaddata)
- [Storage.loadRank()](#storageloadrank)
- [Storage.saveData()](#storagesavedata)
- [Storage.uploadScore()](#storageuploadscore)

## Storage.loadData()

**函数原型：**

```actionscript
function loadData([complete = null], [err = null]);
```

> 读取数据
>
> 读取数据

**返回：** `void`

| 参数 | 类型 | 描述 |
|---|---|---|
| `complete` | `Function` | 成功回调函数。 |
| `err` | `Function` | 读取失败回调函数。 |

## Storage.loadRank()

**函数原型：**

```actionscript
function loadRank(complete, [err = null]);
```

> 读取排名信息
>
> 加载分数排名

**返回：** `void`

| 参数 | 类型 | 描述 |
|---|---|---|
| `complete` | `Function` | 读取成功回调函数。 |
| `err` | `Function` | 读取失败回调函数。 |

## Storage.saveData()

**函数原型：**

```actionscript
function saveData(userData, [complete = null], [err = null]);
```

> 保存数据
>
> 存储数据

**返回：** `void`

| 参数 | 类型 | 描述 |
|---|---|---|
| `userData` | `*` | 存储数据。 |
| `complete` | `Function` | 成功回调函数。 |
| `err` | `Function` | 读取失败回调函数。 |

## Storage.uploadScore()

**函数原型：**

```actionscript
function uploadScore(score, [name = null], [complete = null], [err = null]);
```

> 上传分数
>
> 上传分数

**返回：** `void`

| 参数 | 类型 | 描述 |
|---|---|---|
| `score` | `Number` | 分数。 |
| `name` | `String` | 用户名。 |
| `complete` | `Function` | 成功回调函数。 |
| `err` | `Function` | 读取失败回调函数。 |

