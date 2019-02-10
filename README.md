# mssql-i

[![NPM version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][npm-url]
[![Build Status](https://travis-ci.org/heifade/date-i.svg?branch=master)](https://travis-ci.org/heifade/date-i)

# 源代码及文档
[源代码](https://github.com/heifade/date-i)

# 安装
```bash
npm install date-i
```

# 例子
例子1
```js
const { toString } = require('date-i');
console.log(toString(new Date(), "YYYY-MM-DD HH:mm:ss"));
```

例子2
```js
const { toString } = require('date-i');
console.log(toString(new Date(), "YYYY-MM-DD"));
```

例子3
```js
const { toString } = require('date-i');
console.log(toString(new Date(), "HH:mm:ss"));
```
