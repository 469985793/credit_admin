<template>
  <div class="v_insurance_record">
    <el-table
      class="table_box"
      stripe
      :data="dataList">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form class="form_list_box" label-position="left" inline>
            <el-form-item label="出账">
              <span>{{ props.row.outcome }}</span>
            </el-form-item>
            <el-form-item label="入账">
              <span>{{ props.row.income }}</span>
            </el-form-item>
            <el-form-item label="补贴入账">
              <span>{{ props.row.subsidy_income }}</span>
            </el-form-item>
            <el-form-item label="补贴出账">
              <span>{{ props.row.subsidy_outcome }}</span>
            </el-form-item>
            <el-form-item label="余额">
              <span>{{ props.row.balance }}</span>
            </el-form-item>
            <el-form-item label="缴存时间">
              <span>{{ props.row.deal_time }}</span>
            </el-form-item>
            <el-form-item label="缴存年月">
              <span>{{ props.row.month }}</span>
            </el-form-item>
            <el-form-item label="缴存公司名称">
              <span>{{ props.row.corporation_name }}</span>
            </el-form-item>
            <el-form-item label="公司缴存金额">
              <span>{{ props.row.corporation_income }}</span>
            </el-form-item>
            <el-form-item label="个人缴存金额">
              <span>{{ props.row.customer_income }}</span>
            </el-form-item>
            <el-form-item label="公司缴存比例">
              <span>{{ props.row.corporation_ratio }}</span>
            </el-form-item>
            <el-form-item label="个人缴存比例">
              <span>{{ props.row.customer_ratio }}</span>
            </el-form-item>
            <el-form-item label="补缴">
              <span>{{ props.row.additional_income }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        type="index"
        label="序号"
        width="60">
      </el-table-column>
      <el-table-column
        label="出账"
        prop="outcome">
      </el-table-column>
      <el-table-column
        label="入账"
        prop="income">
      </el-table-column>
      <el-table-column
        label="余额"
        prop="balance">
      </el-table-column>
      <el-table-column
        label="缴存年月"
        prop="month">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VInsuranceRecord',
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

.v_insurance_record {
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
