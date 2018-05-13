<template>
  <div class="v_operator__consumption_container">
    <el-form class="form_list_box" label-position="left" inline>
      <el-form-item label="近三个月消费总额">
        <span>{{data.total_fee_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月消费总额">
        <span>{{data.total_fee_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月充值次数">
        <span>{{data.recharge_time_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月充值次数">
        <span>{{data.recharge_time_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月单次充值最大金额">
        <span>{{data.recharge_max_amount_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月单次充值最大金额">
        <span>{{data.recharge_max_amount_6m}}</span>
      </el-form-item>
      <el-form-item label="账单最新认证时间">
        <span>{{data.bill_latest_certification_day}}</span>
      </el-form-item>
      <el-form-item label="近一个月流量消费金额">
        <span>{{data.web_fee_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月流量消费金额">
        <span>{{data.web_fee_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月流量消费金额">
        <span>{{data.web_fee_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月月均流量消费金额">
        <span>{{data.web_fee_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月月均流量消费金额">
        <span>{{data.web_fee_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月短信消费金额">
        <span>{{data.sms_fee_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月短信消费金额">
        <span>{{data.sms_fee_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月短信消费金额">
        <span>{{data.sms_fee_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月短信月均消费金额">
        <span>{{data.sms_fee_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月短信月均消费金额">
        <span>{{data.sms_fee_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月通话消费金额">
        <span>{{data.call_fee_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月通话消费金额">
        <span>{{data.call_fee_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月通话消费金额">
        <span>{{data.call_fee_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月月均通话消费金额">
        <span>{{data.call_fee_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月月均通话消费金额">
        <span>{{data.call_fee_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月增值业务消费金额">
        <span>{{data.vas_fee_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月增值业务消费金额">
        <span>{{data.vas_fee_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月增值业务消费金额">
        <span>{{data.vas_fee_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月增值业务月均消费金">
        <span>{{data.vas_fee_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月增值业务月均消费金额">
        <span>{{data.vas_fee_avg_6m}}</span>
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
@import '../../../../../assets/css/vars.scss';

.v_operator__consumption_container {
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
</style>
