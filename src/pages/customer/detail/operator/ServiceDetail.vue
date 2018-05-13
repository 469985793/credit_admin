<template>
  <div class="v_service_detail_container">
    <el-table
      class="table_box"
      stripe
      :data="dataList">
      <el-table-column
        type="index"
        label="序号"
        width="60">
      </el-table-column>
      <el-table-column
        label="服务号码"
        prop="service_num">
      </el-table-column>
      <el-table-column
        label="月份"
        prop="months">
      </el-table-column>
      <el-table-column
        label="通话次数"
        prop="total_num">
      </el-table-column>
      <el-table-column
        label="通话总时长"
        prop="total_time">
      </el-table-column>
      <el-table-column
        label="主叫次数"
        prop="dial_num">
      </el-table-column>
      <el-table-column
        label="被叫次数"
        prop="dialed_num">
      </el-table-column>
      <el-table-column
        label="主叫总时长"
        prop="dial_time">
      </el-table-column>
      <el-table-column
        label="被叫总时长"
        prop="dialed_time">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VOperatorServiceDetail',
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

.v_service_detail_container {
  height: 100%;
  overflow-y: auto;
  .table_box {
    width: 100%;
    .form_list_box {
      font-size: 0;
      label {
        font-size: $ent-font-size-x-small;
        width: 190px;
        color: #99a9bf;
      }
      .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 33.3%;
      }
    }
  }
}
</style>
