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
        label="用户ID"
        prop="alipay_userid">
      </el-table-column>
      <el-table-column
        label="最近交易人的支付宝账号"
        prop="account">
      </el-table-column>
      <el-table-column
        label="最近交易人的真实姓名"
        prop="real_name">
      </el-table-column>
      <el-table-column
        label="最近交易人的昵称"
        prop="nick_name">
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
