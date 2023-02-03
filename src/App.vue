<template>
  <div id="app">
    <multi-level-table
      v-loading="loading"
      :data="data" 
      :columns="columns"
      border
      isOperate
      style="width:50%;margin-left:30px"
    >
      <template v-slot:operate="">
         <el-button type="text">查看</el-button>
      </template>
    </multi-level-table>
  </div>
</template>

<script>
const columns = [
  {
    label: '码头系统中控运行记录表', 
    prop: '1600081085739610113',
    children: [
      {
        label: '9208皮带',
        prop: '1600081085777358849',
        children: [
          {
            label: '转速(rpm)',
            prop: '1600081085890605057'
          }
        ]
      },
      {
        label: '9207皮带',
        prop: '1600081085785747457',
        children: [
          {
            label: '转速(rpm)',
            prop: '1600081085945131010'
          }
        ]
      },
      {
        label: '9206皮带',
        prop: '1600081085794136065',
        children: [
          {
            label: '转速(rpm)',
            prop: '1600081085978685441'
          }
        ]
      }
    ]
  }
]
const data = [
  { '1600081085890605057' : 1, '1600081085945131010': 2, '1600081085978685441': 3}
]
export default {
  name: 'App',
  data(){
    return{
      loading: false,
      data: data,
      columns: columns
    }
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
