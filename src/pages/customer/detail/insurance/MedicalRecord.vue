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
        label="医疗机构名称"
        prop="organization_name">
      </el-table-column>
      <el-table-column
        label="医疗机构类别"
        prop="type">
      </el-table-column>
      <el-table-column
        label="医保结算时间"
        prop="settlemen_time">
      </el-table-column>
      <el-table-column
        label="结算金额"
        prop="money">
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
