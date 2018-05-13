<template>
  <div class="v_operator__family_container">
    <el-table
      class="table_box"
      :data="dataList"
      stripe
      style="width: 100%"
      height="100%">
      <el-table-column
        type="index"
        label="序号"
        width="60">
      </el-table-column>
      <el-table-column
        prop="amount"
        label="充值金额">
      </el-table-column>
      <el-table-column
        prop="type"
        label="充值方式">
      </el-table-column>
      <el-table-column
        prop="recharge_time"
        label="充值时间">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VOperatorFamily',
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

.v_operator__family_container {
  height: 100%;
  overflow-y: auto;
  .table_box {
    height: calc(100% - 56px) !important;
  }
}
</style>
