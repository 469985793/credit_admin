<template>
  <div class="v_credit_discredit">
    <el-table
      class="table_box"
      stripe
      :highlight-current-row="true"
      :data="dataList">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form class="form_list_box" label-position="left" inline>
            <el-form-item label="映射ID">
              <span>{{ props.row.mapping_id }}</span>
            </el-form-item>
            <el-form-item label="交易号">
              <span>{{ props.row.trade_number }}</span>
            </el-form-item>
            <el-form-item label="交易时间">
              <span>{{ props.row.trade_time }}</span>
            </el-form-item>
            <el-form-item label="交易来源地">
              <span>{{ props.row.trade_location }}</span>
            </el-form-item>
            <el-form-item label="交易类型">
              <span>{{ props.row.trade_type }}</span>
            </el-form-item>
            <el-form-item label="交易对方">
              <span>{{ props.row.counterparty }}</span>
            </el-form-item>
            <el-form-item label="商品名称">
              <span>{{ props.row.product_name }}</span>
            </el-form-item>
            <el-form-item label="交易金额">
              <span>{{ props.row.trade_amount }}</span>
            </el-form-item>
            <el-form-item label="支出或收入">
              <span>{{ props.row.incomeorexpense }}</span>
            </el-form-item>
            <el-form-item label="交易状态">
              <span>{{ props.row.trade_status }}</span>
            </el-form-item>
            <el-form-item label="服务费">
              <span>{{ props.row.service_charge }}</span>
            </el-form-item>
            <el-form-item label="成功退款金额">
              <span>{{ props.row.refund }}</span>
            </el-form-item>
            <el-form-item label="交易备注">
              <span>{{ props.row.comments }}</span>
            </el-form-item>
            <el-form-item label="资金状态">
              <span>{{ props.row.capital_status }}</span>
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
        label="交易号"
        prop="trade_number">
      </el-table-column>
      <el-table-column
        label="交易来源地"
        prop="trade_location">
      </el-table-column>
      <el-table-column
        label="交易类型"
        prop="trade_type">
      </el-table-column>
      <el-table-column
        label="交易金额"
        prop="trade_amount">
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
