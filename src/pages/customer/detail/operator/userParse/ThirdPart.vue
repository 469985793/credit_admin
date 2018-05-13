<template>
  <div class="v_operator__thirdpart_container">
    <el-form class="form_list_box" label-position="left" inline>
      <el-form-item label="近一个月与110通话次数">
        <span>{{data.call_110_num_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月与110通话次数">
        <span>{{data.call_110_num_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月与110通话次数">
        <span>{{data.call_110_num_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月与110月均通话次数">
        <span>{{data.call_110_num_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月与110月均通话次数">
        <span>{{data.call_110_num_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月与110时长">
        <span>{{data.call_110_time_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月与110时长">
        <span>{{data.call_110_time_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月与110时长">
        <span>{{data.call_110_time_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月与110月均时长">
        <span>{{data.call_110_time_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月与110月均时长">
        <span>{{data.call_110_time_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月与120通话次数">
        <span>{{data.call_120_num_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月与120通话次数">
        <span>{{data.call_120_num_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月与120通话次数">
        <span>{{data.call_120_num_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月与120月均通话次数">
        <span>{{data.call_120_num_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月与120月均通话次数">
        <span>{{data.call_120_num_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月与120时长">
        <span>{{data.call_120_time_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月与120时长">
        <span>{{data.call_120_time_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月与120时长">
        <span>{{data.call_120_time_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月与120月均时长">
        <span>{{data.call_120_time_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月与120月均时长">
        <span>{{data.call_120_time_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月与贷款公司通话次数">
        <span>{{data.call_loan_num_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月与贷款公司通话次数">
        <span>{{data.call_loan_num_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月与贷款公司通话次数">
        <span>{{data.call_loan_num_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月与贷款公司月均通话次数">
        <span>{{data.call_loan_num_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月与贷款公司月均通话次数">
        <span>{{data.call_loan_num_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月与贷款公司时长">
        <span>{{data.call_loan_time_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月与贷款公司时长">
        <span>{{data.call_loan_time_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月与贷款公司时长">
        <span>{{data.call_loan_time_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月与贷款公司月均时长">
        <span>{{data.call_loan_time_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月与贷款公司月均时长">
        <span>{{data.call_loan_time_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月与信用卡机构通话次数">
        <span>{{data.call_credit_card_num_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月与信用卡机构通话次数">
        <span>{{data.call_credit_card_num_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月与信用卡机构通话次数">
        <span>{{data.call_credit_card_num_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月与信用卡机构月均通话次数">
        <span>{{data.call_credit_card_num_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月与信用卡机构月均通话次数">
        <span>{{data.call_credit_card_num_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月与信用卡机构时长">
        <span>{{data.call_credit_card_time_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月与信用卡机构时长">
        <span>{{data.call_credit_card_time_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月与信用卡机构时长">
        <span>{{data.call_credit_card_time_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月与信用卡机构月均时长">
        <span>{{data.call_credit_card_time_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月与信用卡机构月均时长">
        <span>{{data.call_credit_card_time_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月与澳门地区通话次数">
        <span>{{data.call_macon_num_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月与澳门地区通话次数">
        <span>{{data.call_macon_num_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月与澳门地区通话次数">
        <span>{{data.call_macon_num_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月与澳门地区月均通话次数">
        <span>{{data.call_macon_num_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月与澳门地区月均通话次数">
        <span>{{data.call_macon_num_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月与澳门地区时长">
        <span>{{data.call_macon_time_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月与澳门地区时长">
        <span>{{data.call_macon_time_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月与澳门地区时长">
        <span>{{data.call_macon_time_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月与澳门地区月均时长">
        <span>{{data.call_macon_time_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月与澳门地区月均时长">
        <span>{{data.call_macon_time_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月与催收公司通话次数">
        <span>{{data.call_collection_firm_num_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月与催收公司通话次数">
        <span>{{data.call_collection_firm_num_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月与催收公司通话次数">
        <span>{{data.call_collection_firm_num_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月与催收公司月均通话次数">
        <span>{{data.call_collection_firm_num_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月与催收公司月均通话次数">
        <span>{{data.call_collection_firm_num_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月与催收公司时长">
        <span>{{data.call_collection_firm_time_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月与催收公司时长">
        <span>{{data.call_collection_firm_time_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月与催收公司时长">
        <span>{{data.call_collection_firm_time_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月与催收公司月均时长">
        <span>{{data.call_collection_firm_time_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月与催收公司月均时长">
        <span>{{data.call_collection_firm_time_avg_6m}}</span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VOperatorThirdPart',
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../../../../assets/css/vars.scss';

.v_operator__thirdpart_container {
  height: 100%;
  overflow-y: auto;
  .highlight {
    color: $ent-color-danger;
  }

  .form_list_box {
    font-size: 0;
    margin: 0 $ent-gap-base;
    width: calc(100% - 24px);
    label {
      width: 200px;
      color: #99a9bf;
    }
    .el-form-item {
      margin-right: 0;
      margin-bottom: 0;
      width: 33.3%;
    }
  }
}
</style>
