<template>
  <div class="v_operator__recentcontact_container">
    <el-table
      class="table_box"
      :data="dataList"
      stripe
      style="width: 100%"
      height="100%">
      <el-table-column
        prop="id"
        label="序号"
        width="60">
      </el-table-column>
      <el-table-column
        prop="telNum"
        label="长号">
      </el-table-column>
      <el-table-column
        prop="telNum"
        label="短号">
      </el-table-column>
      <el-table-column
        prop="telNum"
        label="成员类型">
      </el-table-column>
      <el-table-column
        prop="telNum"
        label="加入日期">
      </el-table-column>
      <el-table-column
        prop="telNum"
        label="失效日期">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VOperatorRecentContact',
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../../../../assets/css/vars.scss';

.v_operator__recentcontact_container {
  height: 100%;
  .table_box {
    overflow-y: auto;
    height: calc(100% - 56px) !important;
  }
}
</style>
