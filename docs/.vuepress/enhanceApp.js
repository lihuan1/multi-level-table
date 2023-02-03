import { Loading, Table, TableColumn, Button } from 'element-ui';
import "element-ui/lib/theme-chalk/index.css";
import MultiLevelTable from '../../packages/multi-level-table'

export default ({
  Vue
}) => {
  Vue.use(Loading.directive);
  Vue.use(Table);
  Vue.use(TableColumn);
  Vue.use(Button);
  Vue.use(MultiLevelTable);
}
