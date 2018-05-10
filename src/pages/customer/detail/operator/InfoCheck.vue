<template>
  <div class="v_operator__infocheck_container">
    <el-table
      class="table_box"
      :data="dataList"
      stripe
      style="width: 100%"
      height="100%">
      <el-table-column
        label="序号"
        width="60"
        type="index">
      </el-table-column>
      <el-table-column
        prop="check_item"
        label="校验项">
      </el-table-column>
      <el-table-column
        prop="result"
        label="结果">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VOperatorInfoCheck',
  props: {
    dataList: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../../../assets/css/vars.scss';

.v_operator__infocheck_container {
  height: 100%;
  overflow-y: auto;
  .table_box {
    height: calc(100% - 56px) !important;
  }
}
</style>
