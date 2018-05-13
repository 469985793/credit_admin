<template>
  <div class="v_roam_detail_container">
    <el-table
      class="table_box"
      stripe
      :data="dataList">
      <el-table-column
        type="index"
        label="序号"
        width="auto">
      </el-table-column>
      <el-table-column
        label="漫游地"
        prop="roam_day">
      </el-table-column>
      <el-table-column
        label="漫游日期"
        prop="roam_location">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VOperatorRoamDetail',
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

.v_roam_detail_container {
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
