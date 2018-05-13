<template>
  <div class="v_insurance_medical_record">
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
        label="还款日期"
        prop="repay_date">
      </el-table-column>
      <el-table-column
        label="记账日期"
        prop="accounting_date">
      </el-table-column>
      <el-table-column
        label="还款金额"
        prop="repay_amount">
      </el-table-column>
      <el-table-column
        label="还款本金"
        prop="repay_capital">
      </el-table-column>
      <el-table-column
        label="还款利息"
        prop="repay_interest">
      </el-table-column>
      <el-table-column
        label="还款罚息"
        prop="repay_penalty">
      </el-table-column>
      <el-table-column
        label="贷款合同号"
        prop="contract_number">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VInsuranceMedicalRecord',
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

.v_insurance_medical_record {
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
