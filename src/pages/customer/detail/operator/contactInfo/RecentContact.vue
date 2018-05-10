<template>
  <div class="v_operator__recentcontact_container">
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
        prop="city"
        label="通话地">
      </el-table-column>
      <el-table-column
        prop="peer_number"
        label="对方号码">
      </el-table-column>
      <el-table-column
        prop="peer_number_count"
        label="通话号码数">
      </el-table-column>
      <el-table-column
        prop="call_num"
        label="通话次数">
      </el-table-column>
      <el-table-column
        prop="call_time"
        label="通话时长">
      </el-table-column>
      <el-table-column
        prop="dial_num"
        label="主叫次数">
      </el-table-column>
      <el-table-column
        prop="dialed_num"
        label="被叫次数">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VOperatorRecentContact',
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
@import '../../../../../assets/css/vars.scss';

.v_operator__recentcontact_container {
  height: 100%;
  overflow-y: auto;
  .table_box {
    height: calc(100% - 56px) !important;
  }
}
</style>
