<template>
  <div class="v_insurance_classifyinfo">
    <el-table
      class="table_box"
      stripe
      :data="dataList">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form class="form_list_box" label-position="left" inline>
            <el-form-item label="缴纳基数">
              <span>{{ props.row.base_number }}</span>
            </el-form-item>
            <el-form-item label="缴存公司名称">
              <span>{{ props.row.corporation_name }}</span>
            </el-form-item>
            <el-form-item label="公司缴存比例">
              <span>{{ props.row.corporation_scale }}</span>
            </el-form-item>
            <el-form-item label="个人缴存比例">
              <span>{{ props.row.customer_scale }}</span>
            </el-form-item>
            <el-form-item label="描述信息">
              <span>{{ props.row.description }}</span>
            </el-form-item>
            <el-form-item label="首次参保时间">
              <span>{{ props.row.first_insured_date }}</span>
            </el-form-item>
            <el-form-item label="险种编号">
              <span>{{ props.row.insurance_code }}</span>
            </el-form-item>
            <el-form-item label="参保状态">
              <span>{{ props.row.insurance_status }}</span>
            </el-form-item>
            <el-form-item label="保险Id">
              <span>{{ props.row.insurance_id }}</span>
            </el-form-item>
            <el-form-item label="保险类型">
              <span>{{ props.row.insurance_type }}</span>
            </el-form-item>
            <el-form-item label="公司缴存金额">
              <span>{{ props.row.monthly_corporation_income }}</span>
            </el-form-item>
            <el-form-item label="个人缴存金额">
              <span>{{ props.row.monthly_customer_income }}</span>
            </el-form-item>
            <el-form-item label="缴存月数">
              <span>{{ props.row.total_months }}</span>
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
        label="缴纳基数"
        prop="base_number">
      </el-table-column>
      <el-table-column
        label="缴存公司名称"
        prop="corporation_name">
      </el-table-column>
      <el-table-column
        label="首次参保时间"
        prop="first_insured_date">
      </el-table-column>
      <el-table-column
        label="缴存月数"
        prop="total_months">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VInsuranceClassifyInfo',
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

.v_insurance_classifyinfo {
  .table_box {
    width: 100%;
    .form_list_box {
      font-size: 0;
      label {
        width: 150px;
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
