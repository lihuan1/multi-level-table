import Vue from 'vue'
import App from './App.vue'
import { Loading, Table, TableColumn, Button } from 'element-ui';
import "element-ui/lib/theme-chalk/index.css";
import MultiLevelTable from '../packages/multi-level-table'

Vue.use(Loading.directive);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Button);
Vue.use(MultiLevelTable);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
