# 源代码

[源代码](https://github.com/heifade/date-i)

# 安装

```bash
npm install date-i
```

# 例子

例子 1

```js
const { toString } = require("date-i");
console.log(toString(new Date(), "YYYY-MM-DD HH:mm:ss"));
```

例子 2

```js
const { toString } = require("date-i");
console.log(toString(new Date(), "YYYY-MM-DD"));
```

例子 3

```js
const { toString } = require("date-i");
console.log(toString(new Date(), "HH:mm:ss"));
```
