---
  title: '基本使用'
---
### 示例
::: demo

```html
<template>
   <multi-level-table 
      v-loading="loading"
      :data="data" 
      :columns="columns"
      isOperate
      border
      class="md-table"
   >
      <template v-slot:operate="scope">
         <el-button type="text">查看</el-button>
      </template>
   </multi-level-table>
</template>
<script>

export default {
   data() {
      return {
         loading: false,
         data: [{ 
            '1600081085890605057': 1, 
            '1600081085945131010': 2, 
            '1600081085978685441': 3
         }],
         columns: [
            {
               label: '码头系统中控运行记录表', 
               prop: '1600081085739610113',
               children: [
                  {
                     label: '9208皮带',
                     prop: '1600081085777358849',
                     children: [
                        { label: '转速(rpm)', prop: '1600081085890605057' }
                     ]
                  },
                  {
                     label: '9207皮带',
                     prop: '1600081085785747457',
                     children: [
                        { label: '转速(rpm)', prop: '1600081085945131010' }
                     ]
                  }
               ]
            }
         ]
      }
   }
}
</script>
```
:::

### Attributes
参数|说明|类型|必填|默认值
---|---|---|---|---
data| 显示的数据|Array|false|-
columns| 表头|Array|false|-
isIndex| 是否显示索引列|Boolean|false|false
isSelection| 是否显示勾选列|Boolean|false|false
isOperate| 是否显示操作列|Boolean|false|false
indexAttrs| 索引列配置项|Object|false|-
selectionAttrs| 勾选列配置项|Object|false|-
operateAttrs| 操作列配置项|Object|false|-

### IndexAttrs Attributes
参数|说明|类型|默认值
---|---|---|---|---
index| 自定义索引|Number, Function(index)|-

### SelectionAttrs Attributes
参数|说明|类型|默认值
---|---|---|---|---
selectable| 是否可以勾选|Function(row, index)|-
reserve-selection| 为 true 则会在数据更新之后<br>保留之前选中的数据|Boolean|false

### Table-column Attributes
参数|说明|类型|默认值
---|---|---|---|---
label| 显示的标题|String|-
prop| 对应列内容的字段名|String|-

* IndexAttrs、SelectionAttrs、OperateAttrs均支持Table-column相关属性
#### 更多属性及事件请参考 el-table 官方文档，[点此查看](https://element.eleme.cn/#/zh-CN/component/table#table-events)

