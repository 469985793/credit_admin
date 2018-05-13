<template>
  <div class="v_insurance_classifyinfo">
    <el-table
      class="table_box"
      stripe
      :data="dataList">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form class="form_list_box" label-position="left" inline>
            <el-form-item label="贷款人姓名">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="联系手机">
              <span>{{ props.row.phone }}</span>
            </el-form-item>
            <el-form-item label="贷款状态">
              <span>{{ props.row.status }}</span>
            </el-form-item>
            <el-form-item label="承办银行">
              <span>{{ props.row.bank }}</span>
            </el-form-item>
            <el-form-item label="贷款类型">
              <span>{{ props.row.loan_type }}</span>
            </el-form-item>
            <el-form-item label="贷款人身份证">
              <span>{{ props.row.id_card }}</span>
            </el-form-item>
            <el-form-item label="当前贷款购房地址">
              <span>{{ props.row.mailing_address }}</span>
            </el-form-item>
            <el-form-item label="通讯地址">
              <span>{{ props.row.contract_number }}</span>
            </el-form-item>
            <el-form-item label="贷款合同号">
              <span>{{ props.row.loan_amount }}</span>
            </el-form-item>
            <el-form-item label="贷款金额">
              <span>{{ props.row.monthly_repay_amount }}</span>
            </el-form-item>
            <el-form-item label="贷款期数">
              <span>{{ props.row.periods }}</span>
            </el-form-item>
            <el-form-item label="月还款额度">
              <span>{{ props.row.house_address }}</span>
            </el-form-item>
            <el-form-item label="贷款开始时间">
              <span>{{ props.row.start_date }}</span>
            </el-form-item>
            <el-form-item label="贷款结束日期">
              <span>{{ props.row.end_date }}</span>
            </el-form-item>
            <el-form-item label="还款方式">
              <span>{{ props.row.repay_type }}</span>
            </el-form-item>
            <el-form-item label="每月还款日">
              <span>{{ props.row.deduct_day }}</span>
            </el-form-item>
            <el-form-item label="扣款账号">
              <span>{{ props.row.bank_account }}</span>
            </el-form-item>
            <el-form-item label="扣款银行账号姓名">
              <span>{{ props.row.bank_account_name }}</span>
            </el-form-item>
            <el-form-item label="贷款利率">
              <span>{{ props.row.loan_interest_percent }}</span>
            </el-form-item>
            <el-form-item label="罚息利率">
              <span>{{ props.row.penalty_interest_percent }}</span>
            </el-form-item>
            <el-form-item label="商业贷款合同编号">
              <span>{{ props.row.commercial_contract_number }}</span>
            </el-form-item>
            <el-form-item label="商业贷款银行">
              <span>{{ props.row.commercial_bank }}</span>
            </el-form-item>
            <el-form-item label="商业贷款金额">
              <span>{{ props.row.commercial_amount }}</span>
            </el-form-item>
            <el-form-item label="第二还款人银行账号">
              <span>{{ props.row.second_bank_account }}</span>
            </el-form-item>
            <el-form-item label="第二还款人姓名">
              <span>{{ props.row.second_bank_account_name }}</span>
            </el-form-item>
            <el-form-item label="第二还款人身份证">
              <span>{{ props.row.second_id_card }}</span>
            </el-form-item>
            <el-form-item label="第二还款人手机">
              <span>{{ props.row.second_phone }}</span>
            </el-form-item>
            <el-form-item label="第二还款人工作单位">
              <span>{{ props.row.second_corporation_name }}</span>
            </el-form-item>
            <el-form-item label="贷款余额">
              <span>{{ props.row.remain_amount }}</span>
            </el-form-item>
            <el-form-item label="剩余期数">
              <span>{{ props.row.remain_periods }}</span>
            </el-form-item>
            <el-form-item label="最后还款日期">
              <span>{{ props.row.last_repay_date }}</span>
            </el-form-item>
            <el-form-item label="逾期本金">
              <span>{{ props.row.overdue_capital }}</span>
            </el-form-item>
            <el-form-item label="逾期利息">
              <span>{{ props.row.overdue_interest }}</span>
            </el-form-item>
            <el-form-item label="逾期罚息">
              <span>{{ props.row.overdue_penalty }}</span>
            </el-form-item>
            <el-form-item label="逾期天数">
              <span>{{ props.row.overdue_days }}</span>
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
        label="贷款人姓名"
        prop="name">
      </el-table-column>
      <el-table-column
        label="联系手机"
        prop="phone">
      </el-table-column>
      <el-table-column
        label="贷款状态"
        prop="status">
      </el-table-column>
      <el-table-column
        label="贷款类型"
        prop="loan_type">
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
