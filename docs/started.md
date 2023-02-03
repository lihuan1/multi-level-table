---
  title: '快速上手'
---

### 安装插件

使用 `yarn` 安装 `multi-level-table` 组件：
```bash
yarn add multi-level-table -D
```
或者使用 `npm` 安装它：
```bash
npm i multi-level-table --save-dev
```
如果你的网络环境不佳，推荐使用 [cnpm](https://github.com/cnpm/cnpm)。

### 配置插件

打开 babel.config.js 文件，然后在合适的位置引用插件：

```js
module.exports = {
  ...
  plugins: [
    ['component', { libraryName: 'multi-level-table', style: false }]
  ]
  ...
}
```
### 使用插件

```js
// main.js
import MultiLevelTable from 'multi-level-table'
Vue.use(MultiLevelTable)
```
