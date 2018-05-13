<template>
  <div class="v_credit_discredit">
    <el-table
      class="table_box"
      stripe
      :highlight-current-row="true"
      :data="dataList">
      <el-table-column
        type="index"
        label="序号"
        width="60">
      </el-table-column>
      <el-table-column
        label="收件人姓名"
        prop="name">
      </el-table-column>
      <el-table-column
        label="省"
        prop="province">
      </el-table-column>
      <el-table-column
        label="市"
        prop="city">
      </el-table-column>
      <el-table-column
        label="区"
        prop="area">
      </el-table-column>
      <el-table-column
        label="地址"
        prop="address">
      </el-table-column>
      <el-table-column
        label="收件人手机"
        prop="phone_number">
      </el-table-column>
      <el-table-column
        label="详细地址"
        prop="full_address">
      </el-table-column>
      <el-table-column
        label="邮编"
        prop="post_code">
      </el-table-column>
      <el-table-column
        label="行政区划码"
        prop="area_code">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VCreditDiscredit',
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

.v_credit_discredit {
  .table_box {
    width: 100%;
    .form_list_box {
      font-size: 0;
      label {
        width: 180px;
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
