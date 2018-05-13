<template>
  <div class="v_consumption_detail">
    <el-form class="form_list_box" label-position="left" inline>
      <el-form-item label="近一个月消费总额">
        <span>{{data.total_fee_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月消费总额">
        <span>{{data.total_fee_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月消费总额">
        <span>{{data.total_fee_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月月均消费总额">
        <span>{{data.total_fee_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月月均消费总额">
        <span>{{data.total_fee_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月网络流量消费总额">
        <span>{{data.web_fee_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月网络流量消费总额">
        <span>{{data.web_fee_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月网络流量消费总额">
        <span>{{data.web_fee_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月网络流量月均消费总额">
        <span>{{data.web_fee_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月网络流量月均消费总额">
        <span>{{data.web_fee_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月通话消费总额">
        <span>{{data.call_fee_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月通话消费总额">
        <span>{{data.call_fee_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月通话消费总额">
        <span>{{data.call_fee_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月通话月均消费总额">
        <span>{{data.call_fee_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月通话月均消费总额">
        <span>{{data.call_fee_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月短信消费总额">
        <span>{{data.sms_fee_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月短信消费总额">
        <span>{{data.sms_fee_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月短信消费总额">
        <span>{{data.sms_fee_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月短信月均消费总额">
        <span>{{data.sms_fee_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月短信月均消费总额">
        <span>{{data.sms_fee_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月增值业务消费总额">
        <span>{{data.vas_fee_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月增值业务消费总额">
        <span>{{data.vas_fee_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月增值业务消费总额">
        <span>{{data.vas_fee_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月增值业务月均消费总额">
        <span>{{data.vas_fee_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月增值业务月均消费总额">
        <span>{{data.vas_fee_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月其它费用消费总额">
        <span>{{data.extra_fee_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月其它费用消费总额">
        <span>{{data.extra_fee_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月其它费用消费总额">
        <span>{{data.extra_fee_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月其它费用月均消费总额">
        <span>{{data.extra_fee_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月其它费用月均消费总额">
        <span>{{data.extra_fee_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月充值金额">
        <span>{{data.recharge_amount_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月充值金额">
        <span>{{data.recharge_amount_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月充值金额">
        <span>{{data.recharge_amount_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月月均充值金额">
        <span>{{data.recharge_amount_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月月均充值金额">
        <span>{{data.recharge_amount_avg_6m}}</span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VOperatorConsumption',
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
@import '../../../../assets/css/vars.scss';

.v_consumption_detail {
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
      font-size: $ent-font-size-small;
      width: 200px;
      color: #99a9bf;
    }
    .el-form-item {
      margin-right: 0;
      margin-bottom: 0;
      width: 33.3%;
    }
  }
  .title_box {
    margin: $ent-gap-xx-small $ent-gap-small;
  }
}
</style>
