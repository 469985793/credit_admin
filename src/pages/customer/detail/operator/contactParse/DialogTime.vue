<template>
  <div class="v_operator__dialogtime_container">
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
        :show-overflow-tooltip="true"
        prop="time_step"
        label="通话时间段">
      </el-table-column>
      <el-table-column
        prop="total_num"
        label="通话次数">
      </el-table-column>
      <el-table-column
        prop="peer_num"
        label="通话号码数">
      </el-table-column>
      <el-table-column
        prop="total_time"
        label="通话总时长">
      </el-table-column>
      <el-table-column
        prop="dial_num"
        label="主叫号码数">
      </el-table-column>
      <el-table-column
        prop="dialed_num"
        label="被叫号码数">
      </el-table-column>
      <el-table-column
        :show-overflow-tooltip="true"
        prop="latest_call_time"
        label="第一次通话时间">
      </el-table-column>
      <el-table-column
        :show-overflow-tooltip="true"      
        prop="farthest_call_time"
        label="最后一次通话时间">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VOperatorDialogTime',
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

.v_operator__dialogtime_container {
  height: 100%;
  overflow-y: auto;
  .table_box {
    height: calc(100% - 56px) !important;
  }
}
</style>
